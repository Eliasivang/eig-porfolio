'use client'
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {proyects} from "../data/proyects"
import { AiFillDownCircle, AiFillUpCircle  } from "react-icons/ai"
import  {HiOutlineExternalLink} from "react-icons/hi"
import {BsFileEarmarkCode} from "react-icons/bs"
import { useState } from "react";
// import tasksImg from '../assets/images/tasks.png';
// import gastosImg from '../assets/images/gastos.png';
// import seguroImg from '../assets/images/seguro.png';

function Proyects() {
const [down, setDown] = useState(false);
const [showAll,setShowAll] = useState(false);
const [last,setLast] = useState(4);

const handleClick =()=>{
    setLast(8)
    setShowAll(true)
}
const downScroll = ()=>{
    if(window.scrollY > 900){
    setDown(true)
    }else {
    setDown(false)
    }
}
const scrollTop = ()=>{
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    }) 
}
const scrollDown = ()=>{
    window.scrollTo({
    top : 4000,
    behavior: "smooth",
    }) 
}
window.addEventListener("scroll", downScroll);



    return (
        <section id="proyects" className="flex items-center justify-center w-full my-0 xl:my-20">   
            <div className='xl:w-[1300px] flex flex-col items-center justify-center w-full pt-2 sm:pt-6 px-2 mt-6  font-extralight'>
                <motion.h1 initial ={{x:200} }animate={{x:0}} transition = {{duration:0.6}} className='text-4xl font-bold text-center text-green-400 lg:text-6xl'>PROYECTOS</motion.h1>
                <AiFillDownCircle onClick = {scrollDown} className={down ? "hidden" : " hidden fixed cursor-pointer bottom-0 z-50  my-16 text-6xl text-white right-0 lg:right-8 animate-bounce "}/>
                <AiFillUpCircle onClick={scrollTop} className={down ? "cursor-pointer fixed bottom-0 z-50  my-16 text-6xl text-white right-0 lg:right-8 animate-bounce " : "hidden" } />         
                <div
                className='grid w-full grid-cols-1 gap-10 my-8 xl:my-20 xl:grid-cols-2 font-poppins'>
                {proyects.slice(0,last).map((proyects)=>(
                <motion.div
                key={proyects.title}
                initial = {{y:200, opacity:0}} 
                transition= {{duration: 0.7}} 
                whileInView={{opacity: 1, y:0}} 
                viewport= {{once:true}}
                className="grid items-center justify-center w-full grid-cols-1 gap-3 p-4 shadow-2xl rounded-3xl bg-neutral-900 shadow-black">
                    <div className="relative flex justify-center w-full ">
                        <Image className=" rounded-xl" alt={proyects.title}  src={proyects.image}/>
                        <div className="absolute bottom-0 left-0 flex gap-2 p-3 m-1 bg-black rounded md:m-3 bg-opacity-80" >
                            {proyects.tecnologies.map((tec)=>(
                            <p 
                            key={Math.random()} 
                            className="text-xl text-green-400 ">
                                {tec}
                            </p>
                        ))}</div>
                    </div>
                    <div className="flex flex-col w-full gap-4 p-1 border-t-4 border-violet-800 ">
                        <h1 className='mt-5 text-xl font-light text-center text-green-400 lg:text-3xl'>{proyects.title}</h1>
                        <p className='text-sm text-center text-white lg:text-[18px]'>{proyects.description}</p>
                        <div className='flex justify-center gap-4 my-4 text-center '>
                            <button 
                            className='flex items-center justify-center h-12 gap-2 p-1 text-sm font-bold text-white bg-green-400 rounded w-36 hover:text-white hover:bg-violet-900'>
                                <a className="flex items-center w-ful;l h-full justify-center gap-1"  target="_blank"  href={proyects.urlDeploy}>
                                    DEPLOY
                                    <span className="mb-[4px]">
                                        <HiOutlineExternalLink size={23}/>
                                    </span>
                                </a>
                            </button>
                            <button 
                            className='flex items-center justify-center h-12 gap-2 text-sm font-bold text-white bg-green-400 rounded hover:text-white w-36 hover:bg-violet-900'>
                                <a className="flex items-center justify-center w-full h-full gap-1" target="_blank"  href={proyects.urlCode}>
                                    REPO
                                    <span className="mb-[2px]">
                                        <BsFileEarmarkCode size={22}/>
                                    </span>
                                </a>
                            </button>
                        </div>
                        </div>     
                    </motion.div>          
                ))}
                </div>
                {!showAll &&
                <button 
                onClick={handleClick} 
                className="h-12 text-sm font-bold text-white bg-green-400 rounded shadow-2xl shadow-black w-72 text- hover:bg-violet-800 hover:text-white">
                        VER TODOS LOS PROYECTOS
                </button>
                }
            </div>
        </section>
    )
}

 export default Proyects