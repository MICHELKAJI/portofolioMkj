import Footer from "../components/footer";
import FormContact from "../components/form";
import Media from "../components/media";
import { motion } from "framer-motion";



function PageContacts(){
    return(
        <div className=" flex flex-col-reverse">
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=" flex lg:flex-row-reverse md:flex-row-reverse flex-col lg:justify-center md:justify-center justify-center gap-10 mx-10 lg:items-center lg:mt-36 lg:pt-40 md:items-center md:mt-36 md:pt-40  mt-20 ">
            <FormContact/>
            <Media/>
            </motion.div>
            
        </div>
    )
}
export default PageContacts;