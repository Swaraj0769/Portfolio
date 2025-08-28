import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
        <Link to='/project' className='text-[6vw] leading-[5vw] border-4 border-white rounded-full uppercase px-8 overflow-hidden'>Projects</Link>
        <Link to='/agence' className='text-[6vw] leading-[5vw] border-4 border-white rounded-full uppercase px-8 overflow-hidden'>Agence</Link>
    </div>
  )
}

export default HomeBottomText