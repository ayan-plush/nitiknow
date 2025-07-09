import React from 'react'

const Popover = ({visible})=>{
  return (
    <>
      <div className={ ` ${visible?``:`hidden`} absolute p-3 top-[40px] rounded-md bg-[#fff] text-[#000] min-h-[100px] w-[300px]`}>
        <div className='w-full uppercase font-extralight h-full flex flex-col gap-1'>
            <span>Lat Long</span>
            <span>Assembly</span>
            <span>Constituency</span>
        </div>
      </div>
    </>
  )
}

export default Popover
