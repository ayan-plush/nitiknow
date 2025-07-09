import React, { useState } from 'react'
import Header from '../components/Header'

const MyMinister = () => {
    const count = 1
    const [tx,setTx] = useState(0)
  return (
    <div className='w-full min-h-screen '>
        <Header/>
        {!count?
            <div>
                no ministers
            </div>
            : 
            <div className=' w-full pt-[135px] h-full'>
                <div className='w-full h-full bg-[#000] text-[#fff]'>
                    {/* toggle */}
                    <div onClick={()=>{tx==89?setTx(0):setTx(89)}} className='w-full flex items-center justify-center h-[80px]'>
                        <div className='relative flex justify-evenly rounded-full p-2 border-1 w-[200px] border-[#fff] gap-2'>
                            <div>
                                OPTION 1
                            </div>
                            <div>
                                OPTION 2
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
                        <div className='text-3xl'>
                            Header location details
                        </div>
                        {/* data container */}
                        <div className='flex flex-col gap-5 w-full h-full'>
                            <div className='flex items-start gap-5 justify-evenly w-full h-full'>
                                <div className='bg-[#fff] rounded-full w-1/5 aspect-square'></div>
                                <div className='bg-[#fff] w-4/5 h-[400px]'></div>
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
