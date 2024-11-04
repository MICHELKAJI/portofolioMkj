import React, { useEffect, useRef, useState } from 'react';
import image from '/src/images/Capture.png';
import images from '/src/images/Capturee.png';
import imagess from '/src/images/Capture1.png';
import clone from '/src/images/clone.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedItem from '../components/animation';


function Projects (){
    const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  React.useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);
  
    return(
        <div>
            <main className=" text-white flex flex-col  gap-14 lg:p-8 p-4 lg:w-full w-sreen h-auto">
                <h2 className=' text-white font-bold text-lg'>PROJECTS</h2>
                <div className=' flex lg:flex-row md:flex-row justify-center flex-col lg:gap-10 gap-2'>
                    <div className=' flex flex-col gap-3'>
                        <h3 className=' text-blue-600 font-bold text-lg'>ImmoCongo</h3>
                    <div><img className=' h-60 w-96' src={image} alt="" /></div>
                    </div>
                    <div className=' w-[1px] bg-slate-300'></div>
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=' flex flex-col gap-3'>
                        <h2 className='text-white font-bold text-lg'>DESCRIPTION OF THE PROJECT</h2>
                        <p className=' w-96'>ImmoCongo is a real estate web application which allows different commissioners to have a space to publish their offers for rental of houses, apartments, sale of plots and allocation of party rooms...</p>
                        <div>
                        <h3 className='text-white font-bold text-lg'>Skills</h3>
                        <div className=' flex lg:flex-row w-60 flex-wrap gap-3'>
                            <h4 className=' bg-slate-200 text-black w-20 p-1 rounded-lg text-center center'>React.Js</h4>
                            <h4 className=' bg-slate-200 text-black w-20 p-1 rounded-lg text-center center'>Express.js</h4>
                            <h4 className=' bg-slate-200 text-black w-32 p-1 rounded-lg text-center center'>PostgreSql</h4>
                            <h4 className=' bg-slate-200 text-black w-20 p-1 rounded-lg text-center center'>Prisma</h4>
                            <h4 className=' bg-slate-200 text-black w-20 p-1 rounded-lg text-center center'>Tailwind</h4>
                        </div>
                        </div>
                        <a className=' text-blue-300 hover:text-red-500' href="https://immcongo.onrender.com" target='_blank'>following the link...</a>
                    </motion.div>
                </div>
                <div className=' flex lg:flex-row md:flex-row justify-center flex-col lg:gap-10 gap-3'>
                    <div className=' flex flex-col gap-3'>
                        <h3 className=' text-blue-600 font-bold text-lg'>Miva Takatisha Group Service Cleaner</h3>
                    <div><img className=' h-60 w-96' src={images} alt="" /></div>
                    </div>
                    <div className=' w-[1px] bg-slate-300'></div>
                    <AnimatedItem>
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=' flex flex-col gap-3'>
                        <h2 className='text-white font-bold text-lg'>DESCRIPTION OF THE PROJECT</h2>
                        <p className=' w-96'>Miva Takatisha Group is a landing page for a cleaning service....</p>
                        <div>
                        <h3 className='text-white font-bold text-lg'>Skills</h3>
                        <div className=' flex flex-row gap-3'>
                            <h4 className=' bg-slate-200 text-black w-32 p-1 rounded-lg text-center center'>WordPress</h4>
                            <h4 className=' bg-slate-200 text-black w-32 p-1 rounded-lg text-center center'>Elementor</h4>
                        </div>
                        </div>
                        <a className=' text-blue-300 hover:text-red-500' href="https://live-miva.pantheonsite.io/" target='_blank'>following the link...</a>
                    </motion.div>
                    </AnimatedItem>
                </div>
                <div className=' flex lg:flex-row md:flex-row justify-center flex-col lg:gap-10'>
                    <div className=' flex flex-col gap-3'>
                        <h3 className=' text-blue-600 font-bold text-lg'>Clone Twitter</h3>
                    <div><img className=' h-60 w-96' src={clone} alt="" /></div>
                    </div>
                    <div className=' w-[1px] bg-slate-300'></div>
                    <motion.div ref={ref} initial="hidden" animate={controls} variants={{visible: { opacity: 1, y: 0 },hidden: { opacity: 0, y: 100 }}} transition={{ duration: 0.8, ease: 'easeInOut' }} className=' flex flex-col gap-3'>
                        <h2 className='text-white font-bold text-lg'>DESCRIPTION OF THE PROJECT</h2>
                        <p className=' w-96'>Twitter clone is a project developed in react which allowed me to take control of react.js and make it my favorite library on the frontend side....</p>
                        <div>
                        <h3 className='text-white font-bold text-lg'>Skills</h3>
                        <div className=' flex flex-row gap-3'>
                            <h4 className=' bg-slate-200 text-black w-32 p-1 rounded-lg text-center center'>React.js</h4>
                            <h4 className=' bg-slate-200 text-black w-32 p-1 rounded-lg text-center center'>API Twitter</h4>
                        </div>
                        </div>
                        <a className=' text-blue-300 hover:text-red-500' href="https://clonetwitter-eight.vercel.app/" target='_blank'>following the link...</a>
                    </motion.div>
                </div>
                
                <div className=' flex lg:flex-row md:flex-row justify-center flex-col lg:gap-10 gap-3'>
                    <div className=' flex flex-col gap-3'>
                        <h3 className=' text-blue-600 font-bold text-lg'>APEH</h3>
                    <div><img className=' h-60 w-96' src={imagess} alt="" /></div>
                    </div>
                    <div className=' w-[1px] bg-slate-300'></div>
                  <AnimatedItem>
                    
                    <div className=' flex flex-col gap-3'>
                        <h2 className='text-white font-bold text-lg'>DESCRIPTION OF THE PROJECT</h2>
                        <p className=' w-96'>The Association for the promotion of entrepreneurship and humanitarian aid APEH/Asbl in single is the result of the work of a few visionary and dynamic young people embodying the idea of ​​the main initiator who is the only one of entrepreneurship as well as the love of neighbor</p>
                        <div>
                        <h3 className='text-white font-bold text-lg'>Skills</h3>
                        <div className=' flex lg:flex-row w-60 flex-wrap gap-3'>
                            <h4 className=' bg-slate-200 text-black w-20 p-1 rounded-lg text-center center'>Angular</h4>
                            <h4 className=' bg-slate-200 text-black w-20 p-1 rounded-lg text-center center'>Express.js</h4>
                            <h4 className=' bg-slate-200 text-black w-32 p-1 rounded-lg text-center center'>PostgreSql</h4>
                            <h4 className=' bg-slate-200 text-black w-20 p-1 rounded-lg text-center center'>Prisma</h4>
                            <h4 className=' bg-slate-200 text-black w-20 p-1 rounded-lg text-center center'>Tailwind</h4>
                        </div>
                        </div>
                        <a className=' text-blue-300 hover:text-red-500' href="https://apeh.vercel.app/" target='_blank'>following the link...</a>
                       
                    </div>
                    </AnimatedItem>
                </div>
            </main>

        </div>
    )
}
export default Projects;