import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeMainHero from '../components/home/HomeMainHero'
import Skills from '../components/pages/Skills'
import About from '../components/pages/About'

const Home = () => {
  return (
    <div>
      <>
      <div className='h-screen w-[99vw] fixed'>
        <Video />
      </div>
      <div className='h-screen overflow-hidden w-[99vw] flex flex-col relative justify-between'>
        <div className='flex items-center justify-between mr-18'>
          <HomeHeroText />
          <HomeMainHero />
        </div>
        <HomeBottomText />
      </div>
      </>
      <>
        <Skills />
      </>
    </div>
  )
}

export default Home