import linkedin from '/src/images/linkdine.png';
import whatsapp from '/src/images/whatsapp.png';
import facboock from '/src/images/fb.png';
function Profil(){
    const handleClick = () => {
        const phoneNumber = "+243970607351"; 
        const message = "Hello"; 
    
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
     
    return(
        <div>
            <div className=' flex flex-col lg:gap-5 gap-2 rounded-lg shadow-lg  p-5 bg-gradient-to-t from-neutral-800 to-zinc-900'>
                <div className=' flex flex-row justify-center items-center gap-3'>
                    <div className=' hover:bg-red-500 hover:scale-105 transition duration-300 rounded-full'><a href="https://www.linkedin.com/in/michel-kajibwami-884803230/" target='_blank'><img className=' h-8 w-8' src={linkedin} alt="logo" /></a></div>
                    <div className=' hover:bg-red-500 hover:scale-105 transition duration-300 rounded-full'><a href="#" onClick={handleClick}><img className=' h-8 w-8' src={whatsapp} alt="logo" /></a></div>
                    <div className=' hover:bg-red-500 hover:scale-105 transition duration-300 rounded-full'><a href="https://web.facebook.com/futurekajibwami.michel" target='_blank'><img className=' h-8 w-8' src={facboock} alt="logo" /></a></div>
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