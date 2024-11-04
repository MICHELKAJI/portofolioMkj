
import { Link } from "react-router-dom";
function Footer(){
    const handleClick = () => {
        const phoneNumber = "+243970607351"; 
        const message = "hello"; 
    
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
    return(
        <div>
            <footer className=' flex lg:flex-row justify-center p-2 mt-2 items-center'>
                <nav>
                    <ul className=" flex lg:flex-row lg:gap-3 gap-1 justify-end items-center">
                        <Link to='/'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm ">HOME</li></Link>
                        <Link to='/about'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">ABOUT</li></Link>
                        <Link to='/service'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">SERVICES</li></Link>
                        <Link to='/contacts'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">CONTACT</li></Link>
                        <a href="#" onClick={handleClick}><li className=" text-blue-700 font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm bg-slate-200">Let's Talk</li></a>
                    </ul>
                </nav>
            </footer>
        </div>
    ) 
}
export default Footer;