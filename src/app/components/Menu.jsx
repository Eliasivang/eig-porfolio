import React from 'react'

function Menu() {
  return (
    <div className='absolute right-0 z-50 w-7/12 text-left shadow-xl bg-neutral-900 rounded-xl'>
        <div className='px-3 py-3'>
            <ul className='grid gap-3 my-4 text-xl text-white'>
                <li className='p-2 hover:bg-green-400 w-fit rounded-xl'>
                      <a href="#aboutMe">SOBRE MI</a> 
                </li>
                <li className='p-2 hover:bg-green-400 w-fit rounded-xl'>
                      <a href="#proyects">PORTFOLIO</a> 
                </li>
                <li className='p-2 hover:bg-green-400 w-fit rounded-xl'>
                      <a href="#contact">CONTACTO</a> 
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Menu