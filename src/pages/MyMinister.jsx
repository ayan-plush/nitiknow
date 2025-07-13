import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { get_assembly, get_constituency, get_headlines, get_loksabha_elective } from '../store/Reducers/geoReducer'
import LazyImage from '../components/LazyImage'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
const MyMinister = () => {
    const count = 1
    const [isMP,setIsMP] = useState(true)
    const {constituency, assembly,lok_minister,articles,coordinates} = useSelector(state => state.geo)
    const dispatch = useDispatch();
    const baseX = isMP ? 0 : 89;

    const bounceKeyframes = isMP
        ? [89, 75, 89, 80, 89] 
        : [0, 10, 0, 5, 0]; 

    useEffect(()=>{
        if(!constituency?.PC_NAME||!assembly?.AC_NAME){
            dispatch(get_constituency({ lat: coordinates.lat, lon: coordinates.lon }))
            dispatch(get_assembly({ lat: coordinates.lat, lon: coordinates.lon }))
        }
    },[coordinates])
    useEffect(()=>{
        if(constituency.PC_NAME){
        dispatch(get_loksabha_elective({pc: constituency.PC_NAME}))
        }
    },[constituency])
    
    useEffect(()=>{
        if(lok_minister.name){
        dispatch(get_headlines({minister: lok_minister?.name.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-'), mpId: lok_minister?._id}))
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
                    <div
                    onClick={() => setIsMP(!isMP)}
                    className="w-full flex items-center justify-center h-[80px] cursor-pointer select-none"
                    >
                    <div className="relative flex justify-evenly items-center rounded-full p-2 border border-white w-[200px] gap-2 bg-white/5 backdrop-blur-sm">
                        <div className="z-20 w-1/2 text-center font-semibold text-white">MLA</div>
                        <div className="z-20 w-1/2 text-center font-semibold text-white">MP</div>

                        {/* Indicator with bounce keyframes */}
                        <motion.div
                        key={isMP ? 'mp' : 'mla'}
                        initial={{ x: baseX }}
                        animate={{ x: bounceKeyframes }}
                        transition={{
                            duration: 0.5,
                            ease: [0.68, -0.6, 0.32, 1.6], 
                        }}
                        className="absolute top-1 bottom-1 left-1 w-[100px] rounded-full bg-white opacity-30 border border-white/30 shadow-2xl z-10"
                        />
                    </div>
                    </div>

                    {/* body */}
                    <div className='flex flex-col w-full h-full gap-5 max-md:px-5 md:px-20'>
                        {/* <div className='text-3xl'>
                            Header location details
                        </div> */}
                        {/* data container */}
                        {
                            isMP?
                            <div className='flex flex-col gap-5 w-full h-full pt-5'>
                                <div className='flex max-md:flex-col max-md:items-center max-md:justify-center md:items-start gap-5 md:justify-evenly w-full h-full '>
                                    <div className=' bg-gradient-to-bl from-[#9e0808] max-md:w-1/3 to-[#300101] rounded-full md:w-1/5 aspect-square overflow-hidden'>
                                        <LazyImage styleApplied={' w-full h-full object-scale-down'} src={lok_minister?.imageUrl}/>
                                    </div>
                                    <div className=' md:w-4/5  flex max-md:w-full max-md:flex-col gap-5 md:pl-10 '>
                                        <div className='flex flex-col items-start h-full gap-10 w-full'>
                                            <div className='text-5xl font-[impacted]'>{(`${lok_minister?.name}`).slice(0,20)}</div>
                                            <div className='flex flex-col items-start gap-2 pl-5'>
                                                <div className='flex gap-2'>
                                                    <span>Political party:</span>
                                                    <span>{lok_minister?.politicalParty}</span>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <span>State:</span>
                                                    <span>{lok_minister?.state}</span>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <span>Constituency:</span>
                                                    <span>{lok_minister?.pcName}</span>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <span>Termcount:</span>
                                                    <span>{lok_minister?.termCount}</span>
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <span>Education Details:</span>
                                                    <div className='flex flex-col gap-1'>
                                                        <span>{`Education Qualification: ${lok_minister?.education?.educational_qualification}`}</span>
                                                        <span>{` ${lok_minister?.education?.educational_qualification_details}`}</span>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        </div>
                                        <div className='border-1 border-[#ffffffb0] rounded-md gap-10 h-full w-full max-h-[350px] overflow-auto p-5 flex flex-col justify-start items-center'>
                                            {
                                                articles?.map((a)=><a target="_blank" rel ="noopener noreferrer" href={a.url} className='flex justify-start gap-2 w-full h-full items-start'>
                                                    <LazyImage styleApplied='w-[80px] max-w-[80px] overflow-clip object-cover' src={a.img} />
                                                    <a>{a.title}</a>
                                                </a>)
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                            :
                            <div></div>

                        }

                    </div>
                        
                </div>
            </div>
        }
    </div>
  )
}

export default MyMinister
