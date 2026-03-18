import {motion} from 'motion/react'
import React from 'react'
import { Link } from 'react-scroll'
import Home from '../Pages/Home'
import Hamburger from './Hamburger'


const Navebar = () => {
  return (
    
    <div className='fixed top-0   w-full flex justify-between  items-center backdrop-blur-md bg-white/10 border-b border-white/20   z-50  py-4 px-10'>
        <h2 
        className='md:text-5xl font-extrabold text-amber- flex gap-1'>
            {"VANTAGE/".split("").map((letter,index)=>(
                <motion.span
                id=''
                    key={index}
                    className="incline-block cursor-pointer bg-gradient-to-t from-indigo-500 to-blue-300 bg-clip-text text-transparent "

                    whileHover={{y:-15 ,scale:1.2, textShadow:"0px 0px 15px rgba(99,102,241,0.8)"  }}
                    transition={{
                      type:"spring",
                      stiffness:300,
                      damping:15,
                      delay:index*0
                    }}
                    >
                    {letter }
                </motion.span>
            ))}
            <span className = "text-indigo-600"></span>
            <span className='text-slate-400 font-light'>WEB</span>
            </h2>
        <div className='hidden md:flex gap-8 py-2 cursor-pointer items-center '>

      {/* <a href = '#Home'>Home</a>
      <a href = '#About'>About</a>
      <a href = '#Contact'>Contact</a>
      <a href = '#Project'>Project</a>
      <a href = '#Skills'>Skills</a>
      <a href = '#SocialLinks'>SocialLinks</a> */}
      <Link className='relative py-2 text-xs md:text-lg font-medium group active:scale-90 duration:300 transition-transform' to='Home' smooth={true} duration={0}>Home <span className='absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span></Link>
      <Link className='relative py-2 text-xs md:text-lg font-medium group active:scale-90 duration:300 transition-transform' to='About' smooth={true} duration={0}>About <span className='absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span></Link>
      <Link className='relative py-2 text-xs md:text-lg font-medium group active:scale-90 duration:300 transition-transform' to='Skills' smooth={true} duration={0}>Skills <span className='absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span></Link>
      <Link className='relative py-2 text-xs md:text-lg font-medium group active:scale-90 duration:300 transition-transform' to='Project' smooth={true} duration={0}>Project <span className='absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span></Link>
      {/* <Link className='bg-gradient-to-t from-indigo-500 to-blue-300 bg-clip-text text-transparent rounded-3xl py-2 px-6 active:scale-95 font-extrabold hover:scale-125 transition-transform duration-300 hover:bg-indigo-700 hover:shadow-lg   transtion' to='Contact' smooth={true} duration={0}>Hire Me</Link> */}
      <Link className='bg-gradient-to-t text-sm md:text-2xl from-indigo-500 to-blue-300 bg-clip-text text-transparent rounded-3xl py-2 px-6 active:scale-95 font-extrabold hover:scale-125 transition-transform duration-300 hover:bg-indigo-700 hover:shadow-lg transtion' to='SocialLinks' smooth={true} duration={0}>SocialLinks</Link>

      </div>
      <div className='top-30 '>
          {/* <Hamburger /> */}
        </div>
      <div>
        
      </div>
    </div>
  )
}

export default Navebar
