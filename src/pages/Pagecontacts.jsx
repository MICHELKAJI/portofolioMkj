import FormContact from "../components/form";
import Media from "../components/media";
import { motion } from "framer-motion";



function PageContacts(){
    return(
        <div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=" flex lg:flex-row-reverse flex-col lg:justify-center gap-10 mx-10 lg:items-center lg:mt-36 mt-20">
            <FormContact/>
            <Media/>

            </motion.div>
            
        </div>
    )
}
export default PageContacts;