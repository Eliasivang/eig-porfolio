'use client'
import { useEffect } from "react"
import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Proyects from "./components/Projects"
import Footer from "./components/Footer"
import { Contact } from "./components/Contact"



export default function Home() {
    
  return (
    <>
        <Header/>
        <Hero/>
        <AboutMe/>
        <Proyects/>
        <Contact/>
        <Footer/>
        
    </>
  )
}
