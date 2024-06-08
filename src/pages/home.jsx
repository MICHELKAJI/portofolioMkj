
import project from '/src/images/Capture.png';
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
function Home(){
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
            <main className=' flex flex-col gap-3 font-sans mt-20 h-full'>
                <div className=' flex flex-row gap-10'>
                    <div className=' flex flex-row gap-8 items-center w-3/6 p-5 rounded-lg shadow-lg bg-gradient-to-t from-neutral-800 to-zinc-900 '>
                        <div><img className=' h-32 w-32 rounded-full' src={avatar} alt="avatar" /></div>
                        <div>
                            <h1 className=' text-white font-bold'>Michel KAJIBWAMI</h1>
                            <TypewriterEffectSmooth words={words}/>
                            <p className=' text-white w-96'> </p>
                        </div>
                    </div>
                   <div className=' hover:bg-red-500 hover:scale-105 transition duration-300 flex flex-col items-center w-2/6 gap-2 rounded-lg shadow-lg  p-5 bg-gradient-to-t from-neutral-800 to-zinc-900'>
                   <Link to="/projects">
                        <div><h2 className=' font-bold text-white'>MY WORKS</h2></div>
                        <div><img className=' h-28 w-40' src={project} alt="image" /></div>
                        <p className=' font-bold text-white'>ImmoCongo</p>
                        <p className=' font-bold text-white text-start'>Projects</p>
                    </Link>
                    </div>
                   
                    <div className=' hover:bg-red-500 shadow-md hover:scale-105 transition duration-300 flex flex-col justify-center gap-2 border rounded-lg border-slate-400 p-5'>
                        <div><img className=' h-28 w-28' src={cv} alt="cv" /></div>
                        <p className=' text-white'>My CV</p>
                        <h2 className=' text-white font-bold'>Download</h2>
                    </div>
                </div>
                
                <div className=' flex flex-row gap-10'>
                <div className=' flex flex-col p-5 rounded-lg shadow-lg bg-gradient-to-t from-neutral-800 to-zinc-900 w-96 gap-3'>
                    <div className=' flex flex-row justify-center items-center gap-8'>
                        <div className=' h-8 w-8'><img src={wordpress} alt="logo" /></div>
                        <div className=' h-8 w-8'><img src={solving} alt="logo" /></div>
                        <div className=' h-8 w-8'><img src={coding} alt="logo" /></div>
                    </div>
                    <p className=' text-white text-xs text-center'>SPECIALIZATION</p>
                    <h2 className=' text-white font-bold text-center'>Service Offering</h2>
                </div>
                <div>
                    <Profil/>
                </div>
                <div>
                <Realisation/>
                </div>
                </div>
                <div className=' flex flex-row gap-10'>
                    <div><Contact/></div>
                    <div><Knowmore/></div>
                    <div><Platform/></div>
                </div>
                <Footer/>
            </main>
        </div>
    )
}
export default Home;