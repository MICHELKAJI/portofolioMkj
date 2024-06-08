
function Footer(){
    return(
        <div>
            <footer className=' flex flex-row justify-center p-5 items-center mb-0'>
                <nav>
                    <ul className=" flex flex-row gap-3 justify-end">
                        <li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm ">HOME</li>
                        <li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">ABOUT</li>
                        <li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">SERVICES</li>
                        <li className=" text-white font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm">CONTACT</li>
                        <li className=" text-blue-700 font-bold p-5 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm bg-slate-200">Let's Tolk</li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}
export default Footer;