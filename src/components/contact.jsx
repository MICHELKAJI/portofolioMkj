import arrow from '/src/images/arrow.png';
import { motion } from "framer-motion";
function Contact(){
    return(
        <div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className='flex flex-col gap-1 text-white shadow-lg  p-10 bg-gradient-to-t from-neutral-800 to-zinc-900 lg:w-[30rem] w-60 rounded-lg'>
                <h2>Let's</h2>
                <div className=' flex flex-row justify-between items-center'><h3>Work <strong className=' text-blue-800'>together.</strong></h3><div><img className=' h-5 w-10' src={arrow} alt="logo" /></div></div>
            </motion.div>

        </div>
    )
}
export default Contact;