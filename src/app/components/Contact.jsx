'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {FiSend} from 'react-icons/fi';
import { useState } from 'react';
import Spinner from './Spinner';

export const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(null);
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [text,setText] =useState('');
  const [loader,setLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if([email, name, text].includes('')) {
      setError(true)
      setTimeout(()=>{
        setError(null) 
      },3000)
      return;
    } else{

      setError(false)
      emailjs.sendForm('service_tb970ea', 'template_2p8jwlg', form.current, 'RHTL9fh2jyclRUc29')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName("");
      setText("");
      setEmail("");
      setLoader(true);

      setTimeout(()=>{
        setLoader(false)
      },3000)

      setTimeout(()=>{
        setError(null) 
      },6000)
    } 
  };
  return (
    <section id='contact' className='flex flex-col items-center justify-center w-full my-20 mb-32'>
    
        <motion.h1 initial ={{x:-200} } animate={{x:0}} transition = {{duration:0.6}}  className='text-4xl font-bold text-center text-green-400 sm:text-7xl' >CONTACTO</motion.h1>
        <motion.form initial ={{x:200} }animate={{x:0,}} transition = {{duration:0.6}}  className='grid items-center w-full grid-cols-1 gap-4 px-3 mt-10 font-poppins sm:mt-10 lg:px-0 lg:w-1/2' ref={form} onSubmit={sendEmail}>           
              <input  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Escriba su nombre'  className='h-10 p-2 rounded outline-none' type="text" name="user_name" />
              <input  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Escriba su email'  className='h-10 p-2 rounded outline-none caret-violet-900' type="email" name="user_email" />
              <textarea onChange={(e)=>setText(e.target.value)} value={text} minLength= {10} placeholder="Escriba aqui su mensaje" className='p-2 rounded outline-none h-96 max-h-44 min-h-10' name="message" />
                {error ===true &&        
                  <div className='flex items-center justify-center bg-red-800 rounded h-11'>
                      <p className='text-xs font-medium text-center text-white sm:text-sm'>🚨 DEBES COMPLETAR TODOS LOS CAMPOS CORRECTAMENTE 🚨</p>
                  </div>
                }  
                { loader ? <Spinner/> : error === false &&
                  <div className='flex items-center justify-center bg-green-600 rounded h-11'>
                    <p className='text-xs font-medium text-center text-white sm:text-sm'>✔️ MENSAJE ENVIADO CON EXITO ✔️</p>
                  </div>
                }
              <div className='w-full pt-2 text-center'>
                  <button  className='text-white bg-green-400 rounded text-md hover:bg-violet-900 hover:text-white sm:w-32 w-28 h-11 sm:h-14' type="submit">ENVIAR<FiSend className='inline-block '/></button>
              </div>               
        </motion.form>
        
    </section>
  );
};