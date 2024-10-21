import github from '/src/images/GitHub.png';
import upwork from '/src/images/upwork.webp'
function Platform(){
    return(
        <div>
            <div className=" hidden md:block flex-col shadow-lg rounded-lg gap-10  p-5 bg-gradient-to-t from-neutral-800 to-zinc-900">
                <div className=" flex flex-row gap-5 justify-center">
                    <div className=' hover:bg-red-500 hover:scale-105 transition duration-300 rounded-full'><a href="https://github.com/MICHELKAJI" target='_blank'><img className=' h-8 w-8' src={github} alt="icon" /></a></div>
                    <div className=' hover:bg-red-500 hover:scale-105 transition duration-300 rounded-full'><a href="https://www.upwork.com/freelancers/~0108f33da72afb6335" target='_blank'><img className=' h-8 w-8 rounded-full' src={upwork} alt="icon" /></a></div>
                </div>
                <h2 className=' text-xs text-white'>The platforms i work on</h2>
            </div>
        </div>
    )
}
export default Platform;