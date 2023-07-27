import React from 'react'
import { motion } from 'framer-motion';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



function Footer() {
  return (
    <motion.div animate={{ y: [100,-20, 0] }} className='grid w-full grid-rows-2 mt-10 mb-1 font-poppins ' >
      <div className='flex items-center justify-center gap-8 sm:gap-3'>
        
      <FaLinkedin  size={40} className='text-4xl text-green-400 '/>
        <FaGithub size={40} className='text-4xl text-green-400 '/>
      </div>
      <div className='grid items-center text-center'>
        <p className='text-sm text-white font-extralight lg:text-xl'>© 2023 Creado por Elias Gonzalez con Next JS y TailwindCSS</p>
      </div>
    </motion.div>
  )
}

export default Footer