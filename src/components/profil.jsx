import linkedin from '/src/images/linkdine.png';
import whatsapp from '/src/images/whatsapp.png';
import facboock from '/src/images/fb.png';
function Profil(){
    return(
        <div>
            <div className=' flex flex-col gap-5 rounded-lg shadow-lg  p-5 bg-gradient-to-t from-neutral-800 to-zinc-900'>
                <div className=' flex flex-row justify-center items-center gap-3'>
                    <div><img className=' h-8 w-8' src={linkedin} alt="logo" /></div>
                    <div><img className=' h-8 w-8' src={whatsapp} alt="logo" /></div>
                    <div><img className=' h-8 w-8' src={facboock} alt="logo" /></div>
                </div>
                <div>
                    <p className=' text-center text-white text-xs'>STAY WITH ME</p>
                    <h2 className=' text-center font-bold text-white'>Profiles</h2>
                </div>
            </div>

        </div>
    )
}
export default Profil;