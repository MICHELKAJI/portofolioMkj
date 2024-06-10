import { Link } from 'react-router-dom';
import logo from '/src/images/mk_logo.png'
function Header(){
    return(
        <div className='fixed top-0 lg:w-[90%] z-50 bg-black'>
            <header className='flex lg:flex-row justify-between  items-center lg:h-9 lg:w-[100%] w-screen lg:p-10 '>
                <div> <Link to='/'><img className=' h-16 w-16' src={logo} alt="logo" /></Link></div>
                <nav>
                    <ul className=" hidden md:flex flex-row lg:gap-3 gap-1 justify-end">
                        <Link to='/'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm ">HOME</li></Link>
                        <Link to='/about'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">ABOUT</li></Link>
                        <Link to='/service'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">SERVICES</li></Link>
                        <Link to='/contacts'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">CONTACT</li></Link>
                        <li className=" text-blue-700 font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm bg-slate-200">Let's Tolk</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;