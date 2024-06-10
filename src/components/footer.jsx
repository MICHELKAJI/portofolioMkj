
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div>
            <footer className=' flex lg:flex-row justify-center p-2 mt-2 items-center'>
                <nav>
                    <ul className=" flex lg:flex-row lg:gap-3 gap-1 justify-end">
                        <Link to='/'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm ">HOME</li></Link>
                        <Link to='/about'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">ABOUT</li></Link>
                        <Link to='/service'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">SERVICES</li></Link>
                        <Link to='/contacts'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">CONTACT</li></Link>
                        <Link><li className=" text-blue-700 font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm bg-slate-200">Let's Tolk</li></Link>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}
export default Footer;