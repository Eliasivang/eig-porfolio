import taskList from "../assets/tasks.png"
import linkspot from "../assets/linkspot.png"
import moviesWiki from "../assets/mb.png"
import devFinder from "../assets/definder.png"
import crocheteando from "../assets/crocheteando.png"
import controlGastos from "../assets/gastos.png"
import weatherApp from "../assets/weatherApp.png"
import tictactoe from "../assets/tictactoe.png"
import {BiLogoTailwindCss} from 'react-icons/bi'
import {SiNextdotjs} from 'react-icons/si';
import {BiLogoReact} from 'react-icons/bi';
import {PiFramerLogoFill} from 'react-icons/pi';
import {BiLogoJavascript} from 'react-icons/bi';
import {SiMui} from 'react-icons/si';
import {SiAxios} from 'react-icons/si';
import {SiTypescript} from 'react-icons/si'
import {BiLogoFirebase} from 'react-icons/bi'

export const proyects = [{
    title: "DEV FINDER",
    image: devFinder,
    description: "Usamos la API de GitHub para buscar perfiles y obtener su información, tal como redes , cantidad de repos, seguidores, etc. Se hace uso de context API y cuenta con Dark Mode.",
    tecnologies:[<BiLogoTailwindCss key={Math.random}/>,<SiNextdotjs key={Math.random()}/>],
    urlCode:"https://github.com/Eliasivang/DevFinder",
    urlDeploy:"https://dev-finder-8usvif0kg-eliasivang.vercel.app/"
},
{
    title: "CROCHETEANDO",
    image: crocheteando,
    description: "Crocheteando es una página pensada para que siga creciendo, a este punto cuenta con un carrito de compras, paginación y buscador de articulos.Se hace uso de Context API y Local Storage. ",
    tecnologies:[<BiLogoReact key={Math.random()} />,<BiLogoTailwindCss key={Math.random()} />,<PiFramerLogoFill key={Math.random()} />],
    urlCode:"https://github.com/Eliasivang/crocheteando-cart",
    urlDeploy:"https://crocheteando.vercel.app/"
},
{
    title: "LINKSPOT",
    image:  linkspot,
    description: "Página en donde podrás crear,actualizar o borrar links para posteriormente mostrarlos en un perfil público, al estilo linktree. Se hace uso de Firebase para la base de datos y autenticación del usuario.",
    tecnologies: [<SiNextdotjs key={Math.random()} />,<BiLogoFirebase key={Math.random()}/>,,<BiLogoTailwindCss key={Math.random()}/>],
    urlCode:"https://github.com/Eliasivang/link-spot",
    urlDeploy:"https://link-spot.vercel.app/"
},
{
    title: "TIC TAC TOE",
    image: tictactoe,
    description:"En esta web podremos jugar al clásico tic tac toe, tendremos la opción de resetear la partida, visualizar los turnos y cuenta con mensajes para el jugador/es que ganen la partida",
    tecnologies:[<SiNextdotjs key={Math.random()} />,<SiTypescript key={Math.random()} />,<BiLogoTailwindCss key={Math.random()} />],
    urlCode: "https://github.com/Eliasivang/tic-tac-toe",
    urlDeploy: "https://tic-tac-toe-eta-eight.vercel.app/"
    
},
{
    title: "MOVIES WIKI",
    image: moviesWiki,
    description: "Página para buscar películas y obtener los detalles de las mismas, tal como fecha de estreno, director, etc. Cuenta con un scroll infinito y debounce.",
    tecnologies: [<BiLogoReact key={Math.random()} />,<BiLogoTailwindCss key={Math.random()} />],
    urlCode:"https://github.com/Eliasivang/MoviesWiki",
    urlDeploy:"https://movies-wiki-lzq2u7ezh-eliasivang.vercel.app/"
},
{
    image:  taskList,
    description: "Web donde podremos listar tareas, marcarlas como completadas o eliminarlas. Se hace uso de Local Storage para la persistencia de datos en el navegador.",
    tecnologies: [<BiLogoReact key={Math.random()} />,<BiLogoTailwindCss  key={Math.random()}/>],
    urlCode:"https://github.com/Eliasivang/Task-list-",
    urlDeploy:"https://task-list-eig.netlify.app/"
},
{
    title: "CONTROL DE GASTOS",
    image: controlGastos  ,
    description: "En base a un presupuesto inicial ingresado , le iremos restando los gastos ingresados por el usuario y mostrando en pantalla el restante capital del inicial.",
    tecnologies: [<BiLogoJavascript key={Math.random()} />,<BiLogoTailwindCss key={Math.random()} />],
    urlCode:"",
    urlDeploy:""
},
{
    title: "WEATHER APP",
    image:  weatherApp,
    description: "Página simple con el fin de consultar el clima de cualquier parte del mundo mediante Weather API y Axios.",
    tecnologies: [<BiLogoReact key={Math.random()} />,<SiMui key={Math.random()} />,<SiAxios key={Math.random()} />],
    urlCode:"https://github.com/Eliasivang/Weather-App",
    urlDeploy:"https://eig-weather-app.netlify.app/"
},
]