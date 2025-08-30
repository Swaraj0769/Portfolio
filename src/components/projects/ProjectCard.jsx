import React from 'react'

const ProjectCard = (props) => {

  const projectShow =[
    'https://tours-and-travel-aone.vercel.app/',
    'https://web-os-two.vercel.app/',
    'https://labubulo.vercel.app/',
    'https://cyberpunk-liart.vercel.app/',
    'https://location-tracker-n422.onrender.com',
    'https://baat-gpt.onrender.com',
    'https://baat-gpt.onrender.com',
    'https://baat-gpt.onrender.com'
  ]

  return (
    <>
          <div className='w-1/2 transition-all relative group hover:rounded-[60px] rounded-none overflow-hidden h-full '>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='absolute opacity-0 transition-all group-hover:opacity-100 top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
              <h2 onClick={()=>{
                window.open(projectShow[props.index])
              }} className='uppercase text-3xl border-2 cursor-pointer p-1 rounded-full'>View the Project</h2>
            </div> 
          </div>
          <div className='w-1/2 transition-all relative group hover:rounded-[60px] rounded-none overflow-hidden h-full '>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='absolute opacity-0 transition-all group-hover:opacity-100 top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
              <h2 onClick={()=>{
                window.open(projectShow[props.index +4])
              }} className='uppercase text-3xl border-2 cursor-pointer p-1 rounded-full'>View the Project</h2>
            </div> 
          </div>
    </>
  )
}

export default ProjectCard