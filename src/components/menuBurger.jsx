import { Link } from "react-router-dom"
function Menu({close}){
    return(
        <div className=" h-60 w-60 p-5">
            <ul className=" flex flex-col gap-3 font-bold">
                <Link to='/'><li onClick={close}>Home</li></Link>
                <Link to='/about'><li onClick={close}>About</li></Link>
                <Link to='/service'><li onClick={close}>Service</li></Link>
                <Link to='/projects'><li onClick={close}>Projects</li></Link>
                <Link to='/contacts'><li onClick={close}>Contact</li></Link>
            </ul>
        </div>
    )
}
export default Menu;