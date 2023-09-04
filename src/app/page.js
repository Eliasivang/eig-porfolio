'use client'
import { useEffect } from "react"
import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Proyects from "./components/Projects"
import Footer from "./components/Footer"
import { Contact } from "./components/Contact"
import dynamic from "next/dynamic"


const DynamicHeader = dynamic (()=> import ('./components/Header'),{ssr:false});
const DynamicProjects = dynamic (()=> import ('./components/Projects'),{ssr:false});

export default function Home() {
    
  return (
    <>
        <DynamicHeader/>
        <Hero/>
        <AboutMe/>
        <DynamicProjects/>
        <Contact/>    
        <Footer/>
    </>
  )
}
