import image from '/src/images/Capture.png';
import images from '/src/images/Capturee.png';
import clone from '/src/images/clone.png';
import { motion } from "framer-motion";
function Projects (){
    return(
        <div>
            <main className=" text-white flex flex-col gap-14 p-8 lg:w-[100%] w-[100%] h-auto">
                <h2 className=' text-white font-bold text-lg'>PROJECTS</h2>
                <div className=' flex lg:flex-row flex-col lg:gap-10 gap-2'>
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
                        <div className=' flex lg:flex-row flex-wrap gap-3'>
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
                <div className=' flex lg:flex-row flex-col lg:gap-10 gap-3'>
                    <div className=' flex flex-col gap-3'>
                        <h3 className=' text-blue-600 font-bold text-lg'>Miva Takatisha Group Service Cleaner</h3>
                    <div><img className=' h-60 w-96' src={images} alt="" /></div>
                    </div>
                    <div className=' w-[1px] bg-slate-300'></div>
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
                </div>
                <div className=' flex lg:flex-row flex-col lg:gap-10'>
                    <div className=' flex flex-col gap-3'>
                        <h3 className=' text-blue-600 font-bold text-lg'>Clone Twitter</h3>
                    <div><img className=' h-60 w-96' src={clone} alt="" /></div>
                    </div>
                    <div className=' w-[1px] bg-slate-300'></div>
                    <div className=' flex flex-col gap-3'>
                        <h2 className='text-white font-bold text-lg'>DESCRIPTION OF THE PROJECT</h2>
                        <p className=' w-96'>Twitter clone is a project developed in react which allowed me to take control of react.js and make it my favorite library on the frontend side....</p>
                        <div>
                        <h3 className='text-white font-bold text-lg'>Skills</h3>
                        <div className=' flex flex-row gap-3'>
                            <h4 className=' bg-slate-200 text-black w-32 p-1 rounded-lg text-center center'>React.js</h4>
                            <h4 className=' bg-slate-200 text-black w-32 p-1 rounded-lg text-center center'>API Twitter</h4>
                        </div>
                        </div>
                        <a className=' text-blue-300 hover:text-red-500' href="#" target='_blank'>following the link...</a>
                    </div>
                </div>
            </main>

        </div>
    )
}
export default Projects;