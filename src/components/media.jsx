import whatsapp from '/src/images/whatsapp.png';
import fb from '/src/images/fb.png';
import x from '/src/images/TwitterX.png';
import gmail from '/src/images/Gmail.png';
import linkedin from '/src/images/linkdine.png'; 
function Media(){
    const handleClick = () => {
        const phoneNumber = "+243970607351"; 
        const message = "Hello"; 
    
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
      
    return(
        <div>
            <div className=' flex flex-col gap-3 text-white font-bold'>
                <div className=' flex flex-col gap-4'>
                <h2>Contact info</h2>
                <div>
                <div className=' flex flex-row gap-2 items-center hover:translate-x-3 transition-all ease-linear hover:text-blue-400'><img className=' h-6 w-6' src={whatsapp} alt="" /> <h3><a href="#" onClick={handleClick}>+243 970607351</a></h3></div>
                <div className=' flex flex-row gap-2 items-center hover:translate-x-3 transition-all ease-linear hover:text-blue-400'><img className=' h-7 w-6'src={fb} alt="" /><a href="https://web.facebook.com/futurekajibwami.michel" target='_blank'>Michel Kajibwami</a></div>
                <div className=' flex flex-row gap-2 items-center hover:translate-x-3 transition-all ease-linear hover:text-blue-400'><img className=' h-5 w-5'src={gmail} alt="" /> <a href="mailto:michelkajibwami@gmail.com" target='_blank'>michelkajibwami@gmail.com</a></div>
                </div>
                
                </div>
                <div  className=' flex flex-col gap-4'>
                    <h2>Social Handles</h2>
                    <div>
                    <div className=' flex flex-row gap-2 items-center hover:translate-x-3 transition-all ease-linear hover:text-blue-400'><img className=' h-7 w-6' src={x} alt="" /><a href="https://x.com/KajiMichel">Michel Kajibwami</a></div>
                    <div className=' flex flex-row gap-2 items-center hover:translate-x-3 transition-all ease-linear hover:text-blue-400'><img className=' h-6 w-6'src={linkedin} alt="" /><a href="https://www.linkedin.com/in/michel-kajibwami-884803230/ " target='_blank'>Michel Kajibwami</a></div>
                    </div>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Media;