import arrow from '/src/images/arrow.png';
function Contact(){
    return(
        <div>
            <div className='flex flex-col gap-1 text-white shadow-lg  p-10 bg-gradient-to-t from-neutral-800 to-zinc-900 w-[30rem] rounded-lg'>
                <h2>Let's</h2>
                <div className=' flex flex-row justify-between items-center'><h3>Work <strong className=' text-blue-800'>together.</strong></h3><div><img className=' h-5 w-10' src={arrow} alt="logo" /></div></div>
            </div>

        </div>
    )
}
export default Contact;