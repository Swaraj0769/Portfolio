import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='pt-18 ml-10 inline text-center'>
        <div className='text-[7vw] uppercase flex items-center justify-start leading-[7vw]'>Lorem ipsum </div>
        <div className='text-[7vw] uppercase flex items-start justify-start leading-[7vw] '> sit 
            <div className='h-[6vw] w-[13vw] rounded-3xl mt-3 overflow-hidden'>
                <Video />
            </div>amet 
         </div>
        <div className='text-[7vw] uppercase flex items-center justify-start leading-[7vw]'> consectetur </div>
    </div>
  )
}

export default HomeHeroText