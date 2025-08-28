import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeMainHero from '../components/home/HomeMainHero'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen overflow-hidden w-screen flex flex-col relative justify-between'>
        <div className='flex items-center justify-between mr-18'>
          <HomeHeroText />
          <HomeMainHero />
        </div>
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home