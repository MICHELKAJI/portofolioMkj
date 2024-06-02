import myself from '/src/images/I.png'
function Knowmore(){
    return(
        <div>
            <div className=' flex flex-col rounded-lg shadow-lg w-60  p-6 bg-gradient-to-t from-neutral-800 to-zinc-900 '>
                <div><img className=' w-14 h-14' src={myself} alt="logo" /></div>
                <div><h2 className=' text-white font-bold'>Know more About me</h2></div>
            </div>
        </div>
    )
}
export default Knowmore