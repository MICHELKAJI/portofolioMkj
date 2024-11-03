

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
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";
import imageOne from '/src/images/Capture.png';
import imageTow from '/src/images/clone.png';
import imageThree from '/src/images/Capturee.png'
import imagess from '/src/images/Capture1.png';


function Home(){
    const downloadFile = () => {
        fetch('/cvMichel.pdf')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob();
          })
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'cvMichel.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(error => alert('Erreur lors du téléchargement du fichier : ' + error.message));
      };
    


  const images = [imageOne, imageTow, imageThree, imagess]

    return(
        <div>
    <main className="flex flex-col h-screen pt-20 justify-between font-sans  w-full">
        <div className="flex flex-col lg:flex-row justify-between  gap-5">
        <div className="flex flex-col lg:flex-row  items-center gap-5 p-5 rounded-lg shadow-lg bg-gradient-to-t from-neutral-800 to-zinc-900 w-full lg:w-auto">
    <motion.img
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="h-24 w-24 lg:h-32 lg:w-32 rounded-full mb-4 lg:mb-0"
        src={avatar}
        alt="avatar"
    />
    <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full lg:w-auto">
        <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-white font-bold text-lg lg:text-xl px-2 lg:px-5"
        >
            Michel KAJIBWAMI
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-white leading-5 lg:leading-6 text-sm lg:text-base w-full lg:w-[24rem] p-2 lg:p-5"
        >
            Certified web developer who specializes in working with JavaScript, React, Node.js; WordPress, and MongoDB. Currently exploring full-stack freelance development opportunities.
        </motion.p>
    </div>
</div>

            <div className=" hover:scale-105 transition duration-300 flex flex-col items-center w-full lg:w-[25rem] gap-2 rounded-lg shadow-lg py-5 bg-gradient-to-t from-neutral-800 to-zinc-900">
                <Link to="/projects">
                    <h2 className="font-bold text-white">MY WORKS</h2>
                    <ImagesSlider className=" w-72 h-40" images={images}>
                        <motion.div
                            initial={{ opacity: 0, y: -80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="h-28 w-40"
                        ></motion.div>
                    </ImagesSlider>
                    <p className="font-bold text-white text-start">Projects</p>
                </Link>
            </div>

            <div
                onClick={downloadFile}
                className="hover:bg-red-500 shadow-md hover:scale-105 transition duration-300 flex flex-col justify-center items-center gap-2 border rounded-lg border-slate-400 p-5 w-full lg:w-auto"
            >
                <img className="h-14 w-14 lg:h-28 lg:w-28" src={cv} alt="cv" />
                <p className="text-white">My CV</p>
                <h2 className="text-white font-bold">Download</h2>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between  gap-5 mt-5">
            <Link to="/service" className="hover:bg-red-500 hover:scale-105 transition duration-300 flex flex-col p-5 rounded-lg shadow-lg bg-gradient-to-t from-neutral-800 to-zinc-900 w-full lg:w-96">
                <div className="flex flex-row justify-center items-center gap-8">
                    <img className="h-8 w-8" src={wordpress} alt="logo" />
                    <img className="h-8 w-8" src={solving} alt="logo" />
                    <img className="h-8 w-8" src={coding} alt="logo" />
                </div>
                <p className="text-white text-xs text-center">SPECIALIZATION</p>
                <h2 className="text-white font-bold text-center">Service Offering</h2>
            </Link>
            <div>
                <Profil />
            </div>
            <div>
                <Realisation />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <Contact />
            <Knowmore />
            <Platform />
        </div>

        <Footer />
    </main>
</div>

    )
}
export default Home;