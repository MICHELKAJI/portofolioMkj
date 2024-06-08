import FormContact from "../components/form";
import Media from "../components/media";



function PageContacts(){
    return(
        <div>
            <div className=" flex flex-row-reverse justify-center gap-10 items-center mt-36">
            <FormContact/>
            <Media/>

            </div>
            
        </div>
    )
}
export default PageContacts;