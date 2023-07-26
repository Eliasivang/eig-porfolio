import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'

function SideSocials() {
  return (
    <div className='fixed left-0 hidden bg-green-400 shadow-2xl xl:block ml-7 shadow-black rounded-xl top-96 w-fit'>
        <ul>
            <li className='p-2 m-2 rounded-xl hover:bg-white hover:text-black'>
                <a target="_blank" href="https://www.linkedin.com/in/elias-gonzalez-043291201/"> <FaLinkedinIn size={20}/> </a>
            </li>
            <li className='p-2 m-2 rounded-xl hover:bg-white hover:text-black'>
                <a target="_blank" href="https://github.com/Eliasivang"><FiGithub size={20}/></a>
            </li>
            <li className='p-2 m-2 rounded-xl hover:bg-white hover:text-black'>
                <a target="_blank" href="https://twitter.com/EliasIvanG"><AiOutlineTwitter size={20}/></a>
            </li>
        </ul>
    </div>
  )
}

export default SideSocials