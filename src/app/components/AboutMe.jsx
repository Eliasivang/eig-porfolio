'use client'
import React from 'react'
import meImg1 from '../assets/eig.png'
import { motion } from 'framer-motion'
import Tecnologies from './Tecnologies'
import Image from 'next/image'



function AboutMe() {
  return (
    <section className='flex justify-center w-full px-2'>    
    <div className=' lg:w-[1300px] w-full  flex flex-col '>
        <h1 className='text-4xl font-bold text-center text-green-400 lg:text-6xl'>SOBRE MI</h1>
        <motion.div 
        initial = {{y:200, opacity:0}} transition= {{duration: 0.7}} whileInView={{opacity: 1, y:0}} viewport= {{once:true}} 
        className='lg:flex lg:items-center font-poppins lg:justify-center grid justify-items-center w-full h-auto gap-6 px-2 my-10 lg:my-20 lg:pb-0  lg:px-4 py-4 shadow-black rounded-2xl bg-neutral-900 lg:h-[340px]  shadow-2xl'>
            <div className='flex w-full justify-center  items-center sm:w-[490px] overflow-hidden rounded-full lg:hidden '>
                <Image className='rounded-full hover:scale-110 transition-all duration-500 sm:w-[450px]' src={meImg1} alt="me" />
            </div>
            <div className='flex flex-col items-center justify-center h-full gap-6 lg:gap-7 lg:w-1/3'>
                <p className='p-1 text-sm text-center text-white font-extralight lg:text-lg'>Estudiante de sistemas en la Universidad Tecnológica Nacional, autodidacta y estusiasta por el desarrollo web. Motivado a seguir sumando conocimientos para aplicarlos en el entorno profesional.</p>
                <div className='flex items-center justify-center w-full' >
                    <a target='_blank' href="https://drive.google.com/file/d/1R5dvyLYtTksK5Pwk9MOxq3e4bAw6h4C_/view?usp=sharing">
                        <button className='p-3 font-bold text-center text-white bg-green-400 rounded text-md w-38 h-14 lg:text-sm hover:shadow-xl hover:text-white hover:shadow-black hover:bg-violet-900 font-bebas '> DESCARGAR CV</button>
                    </a>   
                </div>
            </div>
        <div className='sm:w-[450px] w-full overflow-hidden lg:block hidden rounded-full'>
            <Image className='rounded-full  hover:scale-110 transition-all duration-500 w-[450px]' src={meImg1} alt="me" />
        </div> 
        <div className='flex flex-col items-center justify-center w-full h-full gap-10 lg:gap-8 lg:w-1/3'>
          <p className='text-center text-white font-extralight lg:text-lg text-md'>Tecnologías que utilizo tanto en mis proyectos personales como en la universidad:</p>
          <Tecnologies/>
        </div>
      </motion.div>

    </div>
      
    </section>
  )
}



export default AboutMe