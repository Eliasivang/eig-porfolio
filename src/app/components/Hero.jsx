'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {Typewriter} from 'react-simple-typewriter' 
import Image from 'next/image'
import programmerImg from '../assets/programmer.svg'
import { AiFillDownCircle } from "react-icons/ai"
import {CiLocationOn } from "react-icons/ci"
import SideSocials from './SideSocials'

function Hero() {
 
  return (
    <div className='flex flex-col items-center w-full h-screen '>
            <div className= 'flex flex-col-reverse items-center justify-evenly xl:w-[1300px] px-6 gap-2 py-36 xl:py-40 h-3/4 sm:flex-row'>
                    <motion.div 
                    initial ={{x:-200} }
                    animate={{x:0}} 
                    transition = {{duration:0.8}}  
                    className='2xl:w-2/3'>
                          
                            <p className='w-full text-6xl font-extrabold text-white lg:text-7xl '>
                            <Typewriter 
                            words = {["Elias Gonzalez"]}
                            loop= {1}    
                            />
                
                            {/* <span><Cursor></Cursor></span><br /> */}
                            </p>
                            <p className='w-full text-5xl font-extrabold text-green-400 lg:text-6xl'>
                            <Typewriter 
                            words = {["FrontEnd Developer"]}
                            loop= {1}  
                            />
                            </p>
                            <div className='flex gap-1'>
                            <CiLocationOn size={25} className='text-white'/>
                            <p className='text-xl text-white font-poppins font-extralight'>
                            <Typewriter 
                            words = {["Buenos Aires, Argentina"]}
                            loop= {1}  
                            />
                            </p>
                            </div>                                                               
                    </motion.div>
            <motion.div 
            initial ={{x:200} }
            animate={{x:0}} 
            transition = {{duration:0.8}}   
            className='hidden w-1/3 xl:block ' >
            <Image src={programmerImg} alt="programmer"/>
            </motion.div>
        </div>
        <div id='aboutMe' className='flex flex-col items-center justify-center w-full my-10 '>
        <AiFillDownCircle className= 'text-6xl text-white animate-bounce'/>
        </div>
        <motion.div
        initial= {{opacity:0}}
        animate ={{opacity:1}}
        > 
        <SideSocials/>
        </motion.div>
        
    </div>

  )
}

export default Hero