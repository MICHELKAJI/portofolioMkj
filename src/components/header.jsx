import { Link } from 'react-router-dom';
import logo from '/src/images/mk_logo.png';
import menu from '/src/images/Menu.png'
import { useState } from 'react';
import Modal from './modal';
import Menu from './menuBurger';

function Header(){
    const handleClick = () => {
        const phoneNumber = "+243970607351"; 
        const message = "Ceci est un message de test"; 
    
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
      const [isModalOpen, setIsModalOpen]= useState(false);

      const OpenModal =()=>{
          setIsModalOpen(true)
      }
      const closeModal=()=>{
          setIsModalOpen(false)
      }

    return(
        <div className='fixed top-0 left-0   lg:w-[100%] z-50 bg-black w-[100%] '>
            <header className='flex flex-row justify-between items-center lg:h-9 lg:w-[100%] w-screen lg:p-8'>
                <div> <Link to='/'><img className=' h-16 w-16 ' src={logo} alt="logo" /></Link></div>
                <nav>
                    <ul className=" hidden md:flex flex-row lg:gap-3 gap-1 justify-end">
                        <Link to='/'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm ">HOME</li></Link>
                        <Link to='/about'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">ABOUT</li></Link>
                        <Link to='/service'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">SERVICES</li></Link>
                        <Link to='/contacts'><li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">CONTACT</li></Link>
                        <a href="#" onClick={handleClick}><li className=" text-blue-700 font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm bg-slate-200">Let's Tolk</li></a>
                    </ul>
                    <div><img className=' block md:hidden h-10 w-10 pr-1' src={menu} alt="menu" onClick={OpenModal} /></div>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <Menu close={closeModal}/>
                    </Modal>
                </nav>
            </header>
        </div>
    )
}
export default Header;