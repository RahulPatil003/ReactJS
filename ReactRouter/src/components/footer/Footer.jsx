import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [year, setYear] = useState()
  const getYear = () => setYear(new Date().getFullYear())
  useEffect(()=>{
    getYear();
  },[])
  return (
    <div className='flex justify-center py-5'>
      <div className='flex flex-wrap justify-center text-center  '>
          <div className="flex basis-full flex-wrap text-center justify-center border-b-2 w-[80%] border-black-50 py-4">
          <h1 className='text-3xl text-orange-600 '> Mylogo</h1>
          </div>
          <div className='flex basis-full justify-center text-center py-2 '>
          <p className=''>&copy; {year} rahulpatil. All Rights Reserved.</p>
          
          </div>
      </div>
    </div>
  )
}

export default Footer
