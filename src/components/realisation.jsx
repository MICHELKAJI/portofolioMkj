import { motion } from "framer-motion";
function Realisation (){
    return(
        <div>
            <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "easeOut", delay:0.2}} className=" flex flex-row justify-center gap-10 rounded-lg shadow-lg  p-5 bg-gradient-to-t from-neutral-800 to-zinc-900 lg:w-[44rem] w-96">
                <div className=" flex flex-col gap-1 border border-gray-900 rounded-lg items-center text-white p-3 shadow-lg bg-zinc-800 w-40">
                    <p className=" font-bold text-xl">2</p>
                    <h2 className=" text-xs">YEARS</h2>
                    <h2 className=" text-xs">EXPERIENCE</h2>
                </div>
                <div className=" flex flex-col gap-1 border border-gray-900 rounded-lg items-center text-white p-3 shadow-lg bg-zinc-800 w-40">
                    <p className=" font-bold text-xl">10</p>
                    <h2 className=" text-xs">CLIENTS</h2>
                    <h2 className=" text-xs">WORLDWIDE</h2>
                </div>
                <div className=" flex flex-col gap-1 border border-gray-900 rounded-lg items-center text-white p-3 shadow-lg bg-zinc-800 w-40">
                    <p className=" font-bold text-xl">29</p>
                    <h2 className=" text-xs">TOTAL</h2>
                    <h2 className=" text-xs">PROJECTS</h2>
                </div>
            </motion.div>

        </div>
    )
}
export default Realisation;