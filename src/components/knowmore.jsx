import { Link } from 'react-router-dom'
import myself from '/src/images/I.png'
function Knowmore(){
    return(
        <div>
            <Link to='/about'><div className=' hidden md:block hover:bg-red-500 hover:scale-105 transition duration-300 flex-col rounded-lg shadow-lg lg:w-60 w-40 p-6 bg-gradient-to-t from-neutral-800 to-zinc-900 '>
                <div><img className=' w-14 h-14' src={myself} alt="logo" /></div>
                <div><h2 className=' text-white font-bold'>Know more About me</h2></div>
            </div></Link>
        </div>
    )
}
export default Knowmore