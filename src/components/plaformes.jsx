import github from '/src/images/GitHub.png';
import upwork from '/src/images/upwork.webp'
function Platform(){
    return(
        <div>
            <div className=" flex flex-col shadow-lg rounded-lg gap-10  p-5 bg-gradient-to-t from-neutral-800 to-zinc-900">
                <div className=" flex flex-row gap-5 justify-center">
                    <div><img className=' h-8 w-8' src={github} alt="icon" /></div>
                    <div><img className=' h-8 w-8 rounded-full' src={upwork} alt="icon" /></div>
                </div>
                <h2 className=' text-xs text-white'>The platforms i work on</h2>
            </div>
        </div>
    )
}
export default Platform;