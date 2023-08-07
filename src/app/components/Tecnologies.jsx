import React from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip } from 'react-tooltip'
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiCplusplus,  } from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import {SiMui} from 'react-icons/si';



function Tecnologies() {
  return (
      <>
          <div className='flex flex-wrap justify-center gap-5 text-xl sm:py-0 '>      
                <Tooltip anchorId="html-logo" content="HTML" style={{ color: 'rgb(255, 97, 0)' }}/>
                <a id='html-logo' ><FaHtml5  className='text-5xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="css-logo" content="CSS" style={{ color: 'rgb(0, 39, 255)' }} />
                <a id="css-logo"><FaCss3Alt className='text-5xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="cpp-logo" content="C++" style={{ color: 'rgb(0, 116, 255)'}} />
                <a id='cpp-logo'><SiCplusplus className='text-5xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="js-logo" content="Javascript" style={{ color: 'rgb( 255, 232, 0)' }} />
                <a id='js-logo'><IoLogoJavascript className='text-5xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="TypeScript-logo" content="TypeScript" style={{ color:'rgb(49, 120, 198)' }}/>
                <a id='TypeScript-logo'><SiTypescript className='text-5xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="react-logo" content="React" style={{ color: 'rgb(0, 116, 255)' }} />
                <a id='react-logo'><FaReact className='text-5xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="next-logo" content="NextJS" style={{ color: 'rgb(255,255,255)' }}/>
                <a id='next-logo'><TbBrandNextjs className='text-5xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="git-logo" content="Git" style={{ color: 'rgb(255, 0, 0)'  }} />
                <a id='git-logo'><FaGit className='text-6xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="tailwind-logo" content="Tailwind" style={{ color: 'rgb(0, 116, 255)'}} />
                <a id='tailwind-logo'><SiTailwindcss className='text-6xl text-green-400 hover:text-violet-800'/></a>
                <Tooltip anchorId="material-ui" content="Material UI" style={{ color: '#0000FF' }}/>
                <a id='material-ui'><SiMui className='text-5xl text-green-400 hover:text-violet-800'/></a>  
                <Tooltip anchorId="framer-logo" content="Framer Motion" style={{ color: 'rgb(250,49,162)' }}/>
                <a id='framer-logo'><SiFramer className='text-5xl text-green-400 hover:text-violet-800'/></a>
               
          </div>
    </>
  )
}

export default Tecnologies