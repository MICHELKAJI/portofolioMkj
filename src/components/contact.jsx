import arrow from '/src/images/arrow.png';
import { motion } from "framer-motion";

function Contact(){
    const handleClick = () => {
        const phoneNumber = "+243970607351"; 
        const message = "Hello"; 
    
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
    return(
        <div>
            <a href="#" onClick={handleClick}>
            <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=' hidden md:block hover:scale-105 transition duration-300 flex-col gap-1 text-white shadow-lg  p-10 bg-gradient-to-t from-neutral-800 to-zinc-900 lg:w-[30rem] w-60 rounded-lg'>
                <h2>Let's</h2>
                <div className=' flex flex-row justify-between items-center'><h3>Work <strong className=' text-blue-800'>together.</strong></h3><div><img className=' h-5 w-10' src={arrow} alt="logo" /></div></div>
            </motion.div>
            </a>
        </div>
    )
}
export default Contact;