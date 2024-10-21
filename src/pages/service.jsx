import { motion } from "framer-motion";
import Footer from "../components/footer";
import full from '/src/images/full.jpeg';
import worpress from '/src/images/wordPress.png';
import code from '/src/images/chevron.png';


const gridCintainerVarias ={
    hidden: { opacity: 0}, 
    show:{
        opacity: 1,
        transition:{
            staggerChildren: 0.25,
        },
    }
}
const gridVariance ={
    hidden :{opacity: 0}, show:{opacity: 1}
}

function Service(){
    return(
        <div>
            <div>
                <main>
                    <div className=" flex flex-row gap-10 mt-16 ">
                        <div className=" hidden md:flex flex-col gap-20 justify-center w-96 p-5 rounded-lg bg-gradient-to-t from-neutral-800 to-zinc-900">
                            <div className=" flex flex-row gap-2 "><div><img className=" h-8 w-8" src={full} alt="icon" /></div> <h2 className=" text-white font-bold">MERN, PERN</h2></div>
                            <div className=" flex flex-row gap-2 "><div><img  className=" h-8 w-8"  src={code} alt="icon" /></div> <h2 className=" text-white font-bold">CUSTOM CODING</h2></div>
                            <div className=" flex flex-row gap-2 "><div><img  className=" h-8 w-8"  src={worpress} alt="icon" /></div> <h2 className=" text-white font-bold">WORDPRESS</h2></div>
                        </div>
                        <div className="">
                            <h2 className=" text-xl font-bold text-white text-center mt-2">MY OFFERINGS</h2>
                            <motion.div variants={gridCintainerVarias} initial="hidden" animate="show" className=" flex flex-row flex-wrap justify-center gap-5 p-5 bg-gradient-to-t from-neutral-800 to-zinc-900 rounded ">
                            <motion.div variants={gridVariance} className=" hover:bg-slate-950  hover:scale-105 transition duration-300 border border-gray-900 rounded-lg p-5 shadow-lg bg-zinc-800 ">
                                <h2 className=" font-bold text-blue-700">MERN, PERN</h2>
                                <motion.p initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=" text-white w-80">
                                As a MERN developer, I use MongoDB, Express.js, React.js, and Node.js to build scalable web and mobile applications. With the PERN stack, I combine PostgreSQL, Express.js, React.js and Node.js for projects requiring more structured data storage. I master the complete development cycle, from front-end to back-end, and am at your disposal to meet your specific needs.
                                </motion.p>
                            </motion.div>
                            <motion.div variants={gridVariance} className=" hover:bg-slate-950  hover:scale-105 transition duration-300 border border-gray-900 rounded-lg p-5 shadow-lg bg-zinc-800 ">
                                <h2 className=" text-blue-700 font-bold">CUSTON CODING</h2>
                                <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}}  className=" text-white w-80">I excel in custom coding using HTML5, CSS3, jascript, react to bring your unique vision to life.
                                    whether it's adding special features or creating bespoke designs. I provide tailored solutions who improv
                                    of functionality ensuring your website stands out.
                                </motion.p>
                            </motion.div>
                            <motion.div variants={gridVariance} className=" hover:bg-slate-950  hover:scale-105 transition duration-300 border border-gray-900 rounded-lg p-5 shadow-lg bg-zinc-800 ">
                                <h2 className=" text-blue-700 font-bold">WORDPRESS</h2>
                                <motion.p initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}}className=" text-white w-80">Experienced WordPress developer with 2 years of expertise. In-depth knowledge of WordPress site design, development, and customization. Advanced proficiency in HTML5, CSS3, and JavaScript. Excellent problem-solving and troubleshooting skills. Passionate about continuously improving website performance and user experience.</motion.p>
                            </motion.div>
                            <motion.div variants={gridVariance} className=" hover:bg-slate-950  hover:scale-105 transition duration-300 border border-gray-900 rounded-lg p-5 shadow-lg bg-zinc-800 ">
                                <h2 className=" text-blue-700 font-bold">RESPONSIVE WEB DESIGN</h2>
                                <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=" text-white w-80">I desing responsive websites that provide an optimal viewing experience accross all devices. From mobile phones to desktops, my designs are flexible and
                                    adaptable ensuring your site looks great ang functions smoothly on any screen size.
                                </motion.p>
                            </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </main>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Service; 