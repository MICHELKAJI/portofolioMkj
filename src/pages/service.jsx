import Footer from "../components/footer";
import full from '/src/images/full.jpeg';
import worpress from '/src/images/wordPress.png';
import code from '/src/images/chevron.png'

function Service(){
    return(
        <div>
            <div>
                <main>
                    <div className=" flex flex-row gap-10 mt-14 ">
                        <div className=" flex flex-col gap-20 justify-center w-96 p-5 rounded-lg bg-gradient-to-t from-neutral-800 to-zinc-900">
                            <div className=" flex flex-row gap-2 "><div><img className=" h-8 w-8" src={full} alt="icon" /></div> <h2 className=" text-white font-bold">MERN, PERN</h2></div>
                            <div className=" flex flex-row gap-2 "><div><img  className=" h-8 w-8"  src={code} alt="icon" /></div> <h2 className=" text-white font-bold">CUSTOM CODING</h2></div>
                            <div className=" flex flex-row gap-2 "><div><img  className=" h-8 w-8"  src={worpress} alt="icon" /></div> <h2 className=" text-white font-bold">WORDPRESS</h2></div>
                        </div>
                        <div className="">
                            <h2 className=" text-xl font-bold text-white text-center">MY OFFERINGS</h2>
                            <div className=" flex flex-row flex-wrap justify-center gap-5 p-5 bg-gradient-to-t from-neutral-800 to-zinc-900 rounded ">
                            <div className=" hover:bg-slate-950  hover:scale-105 transition duration-300 border border-gray-900 rounded-lg p-5 shadow-lg bg-zinc-800 ">
                                <h2 className=" text-white font-bold">MERN, PERN</h2>
                                <p className=" text-white w-80">
                                As a MERN developer, I use MongoDB, Express.js, React.js, and Node.js to build scalable web and mobile applications. With the PERN stack, I combine PostgreSQL, Express.js, React.js and Node.js for projects requiring more structured data storage. I master the complete development cycle, from front-end to back-end, and am at your disposal to meet your specific needs.
                                </p>
                            </div>
                            <div className=" hover:bg-slate-950  hover:scale-105 transition duration-300 border border-gray-900 rounded-lg p-5 shadow-lg bg-zinc-800 ">
                                <h2 className=" text-white font-bold">CUSTON CODING</h2>
                                <p className=" text-white w-80">I excel in custom coding using HTML5, CSS3, jascript, react to bring your unique vision to life.
                                    whether it's adding special features or creating bespoke designs. I provide tailored solutions who improv
                                    of functionality ensuring your website stands out.
                                </p>
                            </div>
                            <div className=" hover:bg-slate-950  hover:scale-105 transition duration-300 border border-gray-900 rounded-lg p-5 shadow-lg bg-zinc-800 ">
                                <h2 className=" text-white font-bold">WORDPRESS</h2>
                                <p className=" text-white w-80">Experienced WordPress developer with 2 years of expertise. In-depth knowledge of WordPress site design, development, and customization. Advanced proficiency in HTML5, CSS3, and JavaScript. Excellent problem-solving and troubleshooting skills. Passionate about continuously improving website performance and user experience.</p>
                            </div>
                            <div className=" hover:bg-slate-950  hover:scale-105 transition duration-300 border border-gray-900 rounded-lg p-5 shadow-lg bg-zinc-800 ">
                                <h2 className=" text-white font-bold">RESPONSIVE WEB DESIGN</h2>
                                <p className=" text-white w-80">I desing responsive websites that provide an optimal viewing experience accross all devices. From mobile phones to desktops, my designs are flexible and
                                    adaptable ensuring your site looks great ang functions smoothly on any screen size.
                                </p>
                            </div>
                            </div>

                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </main>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Service; 