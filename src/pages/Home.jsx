import React, { useEffect, useState } from 'react'
import { get_assembly, get_constituency, get_headlines, get_loksabha_elective, setCoordinates } from '../store/Reducers/geoReducer';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';

function Home() {

  // move to app level for location and all
    const [lat,setLat] = useState();
    const [lon,setLon] = useState();
    const [pc, setPc] = useState();
    const [pca, setPca] = useState();
    const[pcin, setPcin] = useState();
    const {constituency, assembly,lok_minister,articles} = useSelector(state => state.geo)
    const dispatch = useDispatch();
    const submitHandle = (e) =>{
        e.preventDefault();
        setPc(pcin);
    }
    // console.log("Home rendered")
    useEffect(() => {
      const getLocation = async () => {
          try {
          const pos = await new Promise((resolve, reject) =>
              navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
              timeout: 5000,
              })
          );
          setLat(pos.coords.latitude);
          setLon(pos.coords.longitude);
          setCoordinates({lat: lat,long: lon});
          console.log("Awaited location:", pos.coords.latitude, pos.coords.longitude);
          } catch (err) {
          console.error("Geolocation error", err);
          }
      };
      getLocation();
    }, []);

    useEffect(()=>{
      if(lat&&lon){
        dispatch(get_constituency({lat,lon}))
        dispatch(get_assembly({lat,lon}))
      }
    },[lat,lon])

    useEffect(()=>{
      if(pc){
        dispatch(get_loksabha_elective({pc}))
      }
    },[pc])

    useEffect(()=>{
      setPc(constituency.PC_NAME)
    },[constituency])
    useEffect(()=>{
      console.log(assembly)
      setPca(assembly.AC_NAME)
    },[assembly])
    useEffect(()=>{
      if(lok_minister.name){
        dispatch(get_headlines({ministers: [lok_minister?.name.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')]}))
      }
    },[lok_minister])


  return (
    <> 
      {/* <div className='h-full text-[#fff] overflow-y-auto flex flex-col justify-center items-center w-full bg-[#08080b]'>
        <form className='w-full flex flex-col justify-center items-center text-[#fff] h-[80px]' onSubmit={submitHandle} >
            <input onChange={(e)=>{setPcin(e.target.value)}} placeholder='constituency name' type='text' value={pcin} label='const'></input>
            <button>Enter</button>
        </form>
        <span className='text-[#fff] text-3xl '>{`${lat} and ${lon} assembly: ${pca} constituency: ${pc} mp: ${lok_minister?.name}`}</span>
        <span className='text-[#fff] text-3xl '>{`${lat} and ${lon} constituency: ${pca}`}</span>
        {articles?.map((article,key)=>
        <div>
          <p>{article.articlelink}</p>
          <p>{article.title}</p>
          <img src={`${article.img}`} />
        </div>
        )}

      </div> */}
      <Header/>
      <div className=''>
      </div>

    </>
  )
}

export default Home;
