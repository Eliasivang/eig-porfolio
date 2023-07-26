'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image';
import { useState } from 'react';
import {BiMenu} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import { IconContext } from "react-icons";
import logo from '../assets/logov.png'
import Menu from './Menu';




function Header() {
  const [fixed, setFixed] =useState(false);
  const [active,setActive] = useState(false);
  

  const handleClickk = ()=>{
    if (!active) {
        setActive(true)  
    }else{
        setActive(false)
    }
  }
  
  const navBar=() =>{
    if(window.scrollY >= 1) {
        setFixed(true)    
    }else {
      setFixed(false)
    }
  }
  if (window !== undefined) {
    window.addEventListener("scroll", navBar);
  }
  

  return (
  <header className={fixed ? 'fixed bg-neutral-900 top-0 z-50 flex justify-center w-full h-22 shadow-xl' : 'fixed  top-0 z-50 flex justify-center w-full h-24 ' }>
      <div  className=" xl:w-[1300px] w-full px-4">
          <motion.div  whileTap = {{scale :1}} transition={{duration:0.5}} className="flex items-center justify-between w-full py-3" >   
              <motion.div whileHover={{scale: 1.05}} whileTap = {{scale :0.9}} className='w-24 sm:w-auto'>
                  <a href="#">
                      <Image src={logo} alt="logo" className='xl:w-[67px] w-[60px] cursor-pointer'/>
                  </a>
              </motion.div>
              <IconContext.Provider value={{size:45}}>
              <div className='flex justify-end'>
                  <BiMenu size={50} onClick={handleClickk} className={active ? 'hidden' : 'p-1  bg-white rounded-full lg:hidden'}/>
                  <IoClose size={50} onClick={handleClickk} className={active ? 'p-1  bg-white rounded-full lg:hidden': 'hidden' } />
              </div>      
              </IconContext.Provider>
              <ul className='items-center justify-center hidden w-full gap-12 text-sm font-normal text-white lg:flex lg:w-auto' >
                  <motion.li className='text-center cursor-pointer lg:inline-block' whileHover={{scale: 1.1}} whileTap = {{scale :0.9}}><a href='#aboutMe'>SOBRE MI</a></motion.li>
                  <motion.li 
                  className='text-center cursor-pointer lg:inline-block' 
                  whileHover={{scale: 1.1}} 
                  whileTap = {{scale :0.9}}>
                  <a href='#proyects'>
                    PROYECTOS
                  </a>
                  </motion.li>
                  <motion.li className='items-center justify-center transition-all duration-500 rounded shadow-lg cursor-pointer hover:bg-violet-700 lg:h-12 lg:flex w-28 lg:bg-green-400'  whileHover={{scale: 1.1}}  whileTap = {{scale :0.9}}> 
                  <a href="#contact"><p className='p-3 font-semibold text-center text-white'>CONTACTO</p></a>
                  </motion.li>
              </ul>  
          </motion.div >

        <AnimatePresence>
            { active &&(
                <motion.div
                initial = {{x:100, opacity: 0}} 
                animate={{x:0, opacity: 1}} 
                exit={{opacity:0, x:400, transition:{duration:1} }}>
                    <Menu/>
                    </motion.div>            
            )}         
        </AnimatePresence>       
    </div>
    </header>
  )
}

export default Header