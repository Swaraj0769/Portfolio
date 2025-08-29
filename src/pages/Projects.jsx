import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = (props) => {

  const projects = [{
    image1: 'https://images.alphacoders.com/900/900419.jpg',
    image2: "https://i.pinimg.com/originals/a6/40/08/a64008abee1bb5b88297760184f5dbfa.jpg"
  },{
    image1: 'https://w0.peakpx.com/wallpaper/352/336/HD-wallpaper-breaking-bad.jpg',
    image2:'https://www.shutterstock.com/image-illustration/east-java-indonesia-september-21st-260nw-2364790023.jpg'
  },{
    image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJJHZjCX5LxZsWxtd14i2_ctxVw7Mn1yexw&s',
    image2: 'https://i.pinimg.com/736x/a7/55/29/a755298904cc91247e3abdd51d7dd416.jpg'
  },{
    image1: 'https://posterspy.com/wp-content/uploads/2017/01/breaking-bad-edit.jpg',
    image2: 'https://www.slashfilm.com/img/gallery/every-season-of-breaking-bad-ranked/l-intro-1725389701.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount: 0.5
      },
      scrollTrigger:{
        trigger: '.lol',
        markers: true,
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='p-4 mb-100vh'>
      <div className=' pt-[45vh]'>
        <h2 className='text-[8vw] uppercase'>Projects</h2>
      </div>
      <div className='-mt-5 lol'>
        {projects.map(function (elem, idx){
          return <div key={idx} className='hero w-full h-[400px] mb-4 flex gap-4'>
          <ProjectCard image1={elem.image1} image2={elem.image2} />
        </div>
        })}
      </div>
    </div>
  )
}

export default Projects