import Footer from '../components/footer';
import avatar from '/src/images/MF.jpeg';
import { motion } from "framer-motion";
import js from "/src/images/JavaScript.png";
import html from "/src/images/Html5.png";
import css from "/src/images/CSS3.png";
import tailwind from "/src/images/TailwindCSS.png";
import node from "/src/images/Nodejs.png";
import express from "/src/images/ExpressJs.png";
import mongo from "/src/images/MongoDb.png";
import mysql from "/src/images/MySQLLogo.png";
import postgres from "/src/images/PostgreSQL.png";
import github from "/src/images/GitHub.png";
import react from "/src/images/React.png";
import angular from "/src/images/AngularJS.png";
import next from "/src/images/Next.js.png";

function About (){
    const handleClick = () => {
        const phoneNumber = "+243970607351"; 
        const message = "Ceci est un message de test"; 
    
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }

   
    return(
        <div>
            <div className=" flex lg:flex-row flex-col lg:gap-10 mt-20 mx-5"> 
                <div>
                <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=' flex flex-col gap-8 items-center p-5 rounded-lg shadow-lg bg-gradient-to-t  from-neutral-800 to-zinc-900 '>
                        <div><img className=' h-32 w-32 rounded-full' src={avatar} alt="avatar" /></div>
                        <div>
                            <h1 className=' text-white font-bold'>Michel KAJIBWAMI</h1>
                            <p className=' text-white lg:w-96 leading-6 '>Certified web developer who specializes in working with JavaScript,React, Node.js; WordPress and MongoBD. Currently exploring full-stack freelance development opportunities. </p>
                        </div>
                        <button onClick={handleClick} className=' bg-blue-700 p-2 text-white rounded-lg hover:bg-red-500 shadow-md hover:scale-105 transition duration-300"'>Contact Me</button>
                    </motion.div>
                </div>
                <main className=' flex flex-col gap-8 text-white'>
                    <div className=' flex flex-col gap-2'><h2 className=' font-bold text-xl'>ABOUT ME</h2><div className=' flex flex-col gap-2 h-[0.5px] w-full bg-slate-500'></div></div>
                    <div>
                        <motion.p initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=' p-2'>As a web developer, I have experienced freelance opportunities, where I implement web content based on Javascript and other web technologies, such as HTML5, CSS3, Node.js, React.js, MongoDB and MySQL . I have successfully tested and improved the user experience and technical development of various web applications, and provided insightful suggestions to improve their functionality and performance.

                               I'm passionate about learning new development programs and tools, and I'm always looking for innovations and best practices in web development.</motion.p>
                    </div>
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=' flex flex-col gap-4'>
                        <h2 className='font-bold text-lg'>EXPERIENCES</h2>
                        <div className=' h-[0.5px] w-full bg-slate-500'></div>
                        <div className=' flex flex-col gap-2'>
                            <h3 className=' text-xl font-bold' >2023-2024</h3>
                            <div>
                            <h4  className=' text-xl font-bold text-blue-800'>Web Developper and web mobile</h4>
                            <span> Kinshasa Digital Academy Kinshasa/RDCongo</span>
                            <h5>Html5, Css3, Javascript, react, express, MongoDB, PostgreSql</h5>
                            </div>
                            <ul>
                                <li>Design and develop responsive and interactive web and mobile web content.</li>
                                <li>Participate in the creation of server-side features using Node.js technology</li>
                                <li>Analyze database schemas, create SQL queries, use database management systems like MySQL, PostgreSQL,MongoDB</li>
                            </ul>
                        </div>
                        <div div className=' flex flex-col gap-4'>
                            <h3 className=' text-xl font-bold'> Juin 2023- august 2024</h3>
                            <div>
                            <h4 className=' text-xl font-bold text-blue-800'>Web Developper</h4>
                            <span>General Secretariat of Employment, Labor and Social Security Kinshasa</span>
                            <h5>Html5, Css3, Javascript, express, MongoDB</h5>
                            </div>
                            <ul>
                                <li>Lead the virtualization and archiving of all administrative documents.</li>
                                <li>Design an attractive and interactive showcase website.</li>
                            </ul>
                        </div>
                       
                    </motion.div>
                    <div>
                     <h2 className=' font-bold text-lg'>EDUCATIONS</h2>
                    <div className=' flex flex-row items-start gap-2 text-white'>
                      
                        <div className='flex flex-col items-center'>
                            
                            <div className='lg:h-4 lg:w-4 md:h-4 md:w-4 h-4 w-4 border border-slate-500 rounded-full'></div>

                            <div className='lg:h-14 lg:w-[0.5px] md:h-14 md:w-[0.5px] h-20 bg-slate-500 border border-dashed '></div>

                            <div className='lg:h-4 lg:w-4 md:h-4 md:w-4 h-4 w-4 border border-slate-500 rounded-full'></div>

                            <div className='lg:h-14 lg:w-[0.5px] md:h-14 md:w-[0.5px] h-20 bg-slate-500 border border-dashed '></div>

                            <div className='lg:h-4 lg:w-4 md:h-4 md:w-4 h-4 w-4 border border-slate-500 rounded-full'></div>
                        </div>
                        
                       <div className=' flex flex-col gap-4'>
                       <div>
                            <h3 className=' text-xl text-blue-300 font-bold'>web and mobile development</h3>
                            <p>From May 2023 to May 2024 Kinshasa Digital Academy Kinshasa / DR Congo</p>
                        </div>
                        <div>
                            <h3 className=' text-xl text-blue-300 font-bold'> Frontend Development</h3>
                            <p>Frome september 2022 to March 2023 OpenClassroom France</p>
                        </div>
                        <div>
                            <h3 className=' text-xl text-blue-300 font-bold'>Network and telecommunications license</h3>
                            <p>From October 2019 to December 2020 Higher Institute of Computer Science and Management Goma</p>
                        </div> 

                       </div>
                        
                    </div>

                    </div>
                    
                    <div className=' flex flex-col gap-2'>
                        <h2 className=' font-bold text-lg'>SKILLS</h2>
                        <div className=' h-[0.5px] w-full bg-slate-500'></div>
                       <div className=' flex flex-row gap-5 flex-wrap justify-center p-4'>
                        <div><img className='h-14 w-14 shadow' src={html} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={css} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={tailwind} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={js} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={node} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={github} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={react} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={angular} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={express} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={mongo} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={mysql} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={next} alt="logo" /></div>
                        <div><img className='h-14 w-14 shadow' src={postgres} alt="logo" /></div>
                       </div>
                    </div>

                </main>
            </div>
            <Footer/>
        </div>
    )
}
export default About;