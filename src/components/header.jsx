import { Link } from 'react-router-dom';
import logo from '/src/images/mk_logo.png'
function Header(){
    return(
        <div>
            <header className=' flex flex-row justify-between items-center'>
                <div> <img className=' h-16 w-16' src={logo} alt="logo" /></div>
                <nav>
                    <ul className=" flex flex-row gap-3 justify-end">
                        <Link to='/'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm ">HOME</li></Link>
                        <Link to='/about'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">ABOUT</li></Link>
                        <Link to='/service'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">SERVICES</li></Link>
                        <li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">CONTACT</li>
                        <li className=" text-blue-700 font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm bg-slate-200">Let's Tolk</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;