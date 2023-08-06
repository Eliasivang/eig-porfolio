import React from 'react'
import { motion } from 'framer-motion';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



function Footer() {
  return (
    <motion.div animate={{ y: [100,-20, 0] }} className='grid w-full grid-rows-2 mt-10 mb-1 font-poppins ' >
        <div className='flex items-center justify-center gap-2 sm:gap-3'>       
            <a target='_blank' href="https://www.linkedin.com/in/elias-gonzalez-043291201/"><FaLinkedin  size={40} className='text-4xl text-green-400 cursor-pointer '/></a>
            <a target='_blank' href="https://github.com/Eliasivang"><FaGithub size={40} className='text-4xl text-green-400 '/></a>
        </div>
        <div className='grid items-center text-center'>
            <p className='text-xs text-white font-extralight lg:text-[16px]'>© 2023 Creado por Elias Gonzalez con Next JS y TailwindCSS</p>
        </div>
    </motion.div>
  )
}

export default Footer