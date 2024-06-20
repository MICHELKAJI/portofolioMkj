import { motion } from "framer-motion"; 
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "easeOut", delay:0.1}}className="fixed inset-0  flex  justify-end h-60 mt-3 mr-1">
        <div className=" bg-neutral-800 p-0 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button onClick={onClose} className=" text-lg font-bold text-white pr-5">&times;</button>
          </div>
          <div className="mt-4 text-white">
            {children}
          </div>
        </div>
      </motion.div>
    );
  };
  export default Modal