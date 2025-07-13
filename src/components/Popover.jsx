import React from 'react'
import { useSelector } from 'react-redux'

const Popover = ({visible})=>{
  const {constituency, assembly,lok_minister,articles,coordinates} = useSelector(state => state.geo)
  return (
    <>
      <div className={ ` ${visible?``:`hidden`} absolute p-3 top-[40px] rounded-md bg-[#fff] text-[#000] min-h-[100px] w-[300px]`}>
        <div className='w-full uppercase font-extralight h-full flex flex-col gap-1'>
            <span>Lat:{coordinates?.lat} Long:{coordinates?.lon}</span>
            <span>Assembly: {assembly?.AC_NAME}</span>
            <span>Constituency: {constituency?.PC_NAME}</span>
        </div>
      </div>
    </>
  )
}

export default Popover
