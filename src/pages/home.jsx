

import avatar from '/src/images/MF.jpeg';
import cv from '/src/images/cv.png';
import wordpress from '/src/images/wordPress.png';
import solving from '/src/images/pen.png';
import coding from '/src/images/chevron.png';
import Profil from '../components/profil';
import Realisation from '../components/realisation';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Knowmore from '../components/knowmore';
import Platform from '../components/plaformes';
import { Link } from 'react-router-dom';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";

function Home(){
    const images = ["src/images/Capture.png","src/images/clone.png", "src/images/Capturee.png"]

    const words = [
        {
          text: "Certified web developer who specializes",
        },
        {
          text: "in working with JavaScript,",
        },
        {
          text: "React, Node.js; WordPress and MongoBD.",
        },
        {
          text: "Currently exploring full-stack freelance",
        },
        {
          text: "development opportunities.",
          className: "text-white w-4/6",
        },]
    return(
        <div>
            <main className=' flex flex-col gap-3 font-sans mt-20 h-screen bottom-0  '>
                <div className=' flex lg:flex-row justify-center flex-wrap lg:gap-10 gap-2'>
                    <div className=' flex lg:flex-row flex-wrap flex-col lg:gap-8 items-center lg:w-3/6 p-5 rounded-lg shadow-lg bg-gradient-to-t from-neutral-800 to-zinc-900 '>
                        <div><motion.img initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=' h-32 w-32 rounded-full' src={avatar} alt="avatar" /></div>
                        <div>
                            <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=' text-white font-bold'>Michel KAJIBWAMI</motion.h1>
                            <TypewriterEffectSmooth words={words}/>
                        </div>
                    </div>
                   <div className=' hover:bg-red-500 hover:scale-105 transition duration-300 flex flex-col items-center lg:w-[25rem] gap-2 rounded-lg shadow-lg  lg:p-5 p-2 bg-gradient-to-t from-neutral-800 to-zinc-900'>
                   <Link to="/projects">
                        <div><h2 className=' font-bold text-white'>MY WORKS</h2></div>
                        <ImagesSlider className="lg:h-[10rem]" images={images}>
     
                        <motion.div  initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }} className=' h-28 w-40'></motion.div>
                        </ImagesSlider>
                        <p className=' font-bold text-white'>ImmoCongo</p>
                        <p className=' font-bold text-white text-start'>Projects</p>
                    </Link>
                    </div>
                   
                    <div className=' hover:bg-red-500 shadow-md hover:scale-105 transition duration-300 flex flex-col justify-center gap-2 border rounded-lg border-slate-400 p-5'>
                        <div><img className=' lg:h-28 lg:w-28 h-14 w-14' src={cv} alt="cv" /></div>
                        <p className=' text-white'>My CV</p>
                        <h2 className=' text-white font-bold'>Download</h2>
                    </div>
                </div>
                
                <div className='  flex lg:flex-row justify-center flex-wrap lg:gap-8 gap-3'>
                <Link to='/service'><div className=' hover:bg-red-500 hover:scale-105 transition duration-300 flex flex-col p-5 rounded-lg shadow-lg bg-gradient-to-t from-neutral-800 to-zinc-900 lg:w-96 w-40 lg:gap-3'>
                    <div className=' flex flex-row justify-center items-center gap-8'>
                        <div className=' h-8 w-8'><img src={wordpress} alt="logo" /></div>
                        <div className=' h-8 w-8'><img src={solving} alt="logo" /></div>
                        <div className=' h-8 w-8'><img src={coding} alt="logo" /></div>
                    </div>
                    <p className=' text-white text-xs text-center'>SPECIALIZATION</p>
                    <h2 className=' text-white font-bold text-center'>Service Offering</h2>
                 </div>
                </Link>
                <div>
                    <Profil/>
                </div>
                <div>
                <Realisation/>
                </div>
                </div>
               
                <div className=' flex lg:flex-row flex-wrap justify-center lg:gap-10 gap-2 '>
                    <div><Contact/></div>
                    <div><Knowmore/></div>
                    <div><Platform/></div>
                </div>
                <div>
                <Footer/>
                </div>
              
            </main>
        </div>
    )
}
export default Home;