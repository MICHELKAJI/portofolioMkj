import { Link } from 'react-router-dom';
import logo from '/src/images/mk_logo.png';
import menu from '/src/images/Menu.png'
import { useState } from 'react';
import Modal from './modal';
import Menu from './menuBurger';
import { motion } from "framer-motion";

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
        <div className="fixed top-0 left-0 w-full z-50 bg-black">
    <header className="flex flex-row justify-between items-center h-16 lg:h-20 px-4 lg:px-[5rem] py-2 lg:py-4">
        <div>
            <Link to="/">
                <img className="h-12 w-12 lg:h-16 lg:w-16" src={logo} alt="logo" />
            </Link>
        </div>
        <nav>
            {/* Menu de navigation pour les écrans moyens et larges */}
            <ul className="hidden md:flex flex-row gap-2 lg:gap-5 justify-end">
                <Link to="/">
                    <li className="text-white font-bold hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm lg:text-base">
                        HOME
                    </li>
                </Link>
                <Link to="/about">
                    <li className="text-white font-bold hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm lg:text-base">
                        ABOUT
                    </li>
                </Link>
                <Link to="/service">
                    <li className="text-white font-bold hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm lg:text-base">
                        SERVICES
                    </li>
                </Link>
                <Link to="/contacts">
                    <li className="text-white font-bold hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm lg:text-base">
                        CONTACT
                    </li>
                </Link>
                <motion.a
                    animate={{
                        scale: [1, 1.5, 1.5, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    href="#"
                    onClick={handleClick}
                >
                    <li className="text-blue-700 font-bold hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm lg:text-base bg-slate-200">
                        Let's Talk
                    </li>
                </motion.a>
            </ul>
            {/* Icône du menu pour petits écrans */}
            <div className="block md:hidden">
                <img
                    className="h-7 w-7 cursor-pointer"
                    src={menu}
                    alt="menu"
                    onClick={OpenModal}
                />
            </div>
            {/* Modal du menu pour petits écrans */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Menu close={closeModal} />
            </Modal>
        </nav>
    </header>
</div>

    )
}
export default Header;
