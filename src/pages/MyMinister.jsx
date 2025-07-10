import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { get_headlines } from '../store/Reducers/geoReducer'

const MyMinister = () => {
    const count = 1
    const [tx,setTx] = useState(0)
    const {constituency, assembly,lok_minister,articles} = useSelector(state => state.geo)
    const dispatch = useDispatch();
    useEffect(()=>{
        if(lok_minister.name){
        dispatch(get_headlines({ministers: [lok_minister?.name.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')]}))
        }
    },[lok_minister])
    
  return (
    <div className='w-full min-h-screen '>
        <Header/>
        {!count?
            <div>
                no ministers
            </div>
            : 
            <div className=' w-full pt-[135px] h-full p-5 '>
                <div className='w-full h-full bg-[#000000b0] py-5 rounded-md text-[#fff]'>
                    {/* toggle */}
                    <div onClick={()=>{tx==89?setTx(0):setTx(89)}} className='w-full flex items-center justify-center h-[80px]'>
                        <div className='relative flex justify-evenly rounded-full p-2 border-1 w-[200px] border-[#fff] gap-2'>
                            <div>
                                MP
                            </div>
                            <div>
                                MLA
                            </div>

                            <div
                                className="absolute top-1 bottom-1 left-1 bg-white backdrop-blur-sm border border-white/30 rounded-full shadow-lg z-10 transition-all duration-300 ease-out"
                                style={{
                                    transform: `translateX(${tx}px)`,
                                    width: "100px",
                                    opacity: 0.3,
                                    willChange: 'transform'
                                }}
                            />
                        </div>
                    </div>
                    {/* body */}
                    <div className='flex flex-col w-full h-full gap-5 px-20'>
                        {/* <div className='text-3xl'>
                            Header location details
                        </div> */}
                        {/* data container */}
                        <div className='flex flex-col gap-5 w-full h-full pt-5'>
                            <div className='flex max-md:flex-col max-md:items-center max-md:justify-center md:items-start gap-5 md:justify-evenly w-full h-full '>
                                <div className=' bg-gradient-to-bl from-[#9e0808] max-md:w-1/3 to-[#300101] rounded-full md:w-1/5 aspect-square overflow-hidden'>
                                    <img className='h-full w-full bg-cover' src='https://res.cloudinary.com/decks92gf/image/upload/e_background_removal/v1752091041/ministers/Amit_Shah.png' />
                                </div>
                                <div className=' md:w-4/5 h-[400px] flex max-md:w-full max-md:flex-col gap-5 md:pl-10 '>
                                    <div className='flex flex-col items-start h-full gap-10 w-full'>
                                        <div className='text-5xl font-[impacted]'>{("Amit Shah").slice(0,20)}</div>
                                        <div className='flex flex-col items-start gap-2 pl-5'>
                                            <div className='flex gap-2'>
                                                <span>Political party:</span>
                                                <span>BJP</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>State:</span>
                                                <span>Gujrat</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Constituency:</span>
                                                <span>Gandhinagar</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Termcount:</span>
                                                <span>second term</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Education Details:</span>
                                                <span>-----</span>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <div className='border-1 border-[#ffffffb0] rounded-md h-full w-full max-h-[600px] overflow-auto'>
                                        {
                                            articles[0].title
                                        }
                                        <img src={`${articles[0].img}`} />
                                    </div>                                    
                                </div>
                            </div>

                        </div>

                    </div>
                        
                </div>
            </div>
        }
    </div>
  )
}

export default MyMinister
