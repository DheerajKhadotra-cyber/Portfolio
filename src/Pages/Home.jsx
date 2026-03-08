import React from 'react'
import { Link } from 'react-scroll'
import {motion} from 'motion/react'
import sabstand from "../assets/sabstand.png"


const Home = () => {
  



  return (
    <section id="Home"className='h-screen flex  items-center justify-center '>
      <div className='h-full w-4/9 bg-slate-50 text-white p-16 flex flex-col justify-center space-y-4'>
      <motion.span 
       initial ={{opacity:0 , y:-200}}
       animate={{opacity:1 ,y:0}}
       transition={{duration:1.5}}
      className='md:text-2xl text-lg font-medium text-slate-900 mb-2'
      >Hello, I'm </motion.span>
      
      <motion.h1
       initial ={{opacity:0 , x:-200}}
       animate={{opacity:1 ,x:0}}
       transition={{type:"spring ",duration:1.5,
        stiffness:100 , damping:10}}
        
        









      


        className='md:text-5xl text-xl font-bold bg-gradient-to-r from-blue-400  to-indigo-700 text-transparent bg-clip-text
         '>
         {"DHEERAJ_    ".split("").map((letter,index)=>(
                         <motion.span
                         id='Shona'
                             key={index}
                             className="inline-block cursor-pointer bg-gradient-to-t from-indigo-500 to-blue-300 bg-clip-text text-transparent"
         
                             whileHover={{y:-15 ,scale:1.2, textShadow:"0px 0px 15px rgba(99,102,241,0.8)"  }}
                             transition={{
                               type:"spring",
                               stiffness:300,
                               damping:15,
                               delay:index*0
                             }}
                             >
                             {letter==="" ? "":letter}
                         </motion.span>
                     ))}
                     <span className = "text-indigo-600"></span>
                     <span className='text-slate-400 font-light'>KHADOTRA</span>
         
         
         
         
         </motion.h1>
      
      <motion.h2 
      initial ={{opacity:0 , x:200}}
       animate={{opacity:1 ,x:0}}
       transition={{duration:1.5}}
      className='md:text-3xl text-xl font-bold text-slate-900'>Frontend Developer | React Developer</motion.h2>
      
      <motion.p 
      initial ={{opacity:0 , y:200}}
       animate={{opacity:1 ,y:0}}
       transition={{duration:1.5}}
      className='max-w-md text-gray-900 mt-4 leading-relaxed'
      >I build modern interactive web applications using
      
      <span className='font-semibold'> React </span>and modern technologies</motion.p>


      {/* <div className='flex gap-10 mt-10'>
        <Link className='bg-black text-white px-6 py-3 rounded-3xl active:scale-95  hover:scale-110 transition-transform duration-300'>
          View Projects
        </Link>


        <button>
          Contact Me
        </button>
      </div> */}
      
      </div>



     {/* Right side */}



      <div className='h-full w-5/9 bg-gradient-to-br from -[#0f172a]  to-[#1e293b] relative flex items-center justify-center overflow-hidden'>
      </div>
      <div className='absolute right-32 w-[500px] h-[500px] bg-red-600  rounded-full -z-10 blur-3xl opacity-40 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
      </div>
      
      <motion.img
      
      animate={{y:[0, -20 , 0]}}
      transition={{
        duration:4,
        repeat:Infinity,
        ease:"easeInOut"
      }}
      className='absolute right-30 -bottom-3 md:w-[600px] w-[100px] drop-shadow-2xl' src={sabstand} alt="hero" />
      
      {/* <div className='absolute -bottom-45'>
        <div className=' bg-red-600 w-40 h-40 rounded-full'>

        </div>
      </div> */}
    </section>
  )
}

export default Home
