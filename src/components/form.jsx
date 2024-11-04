import { useState } from "react";
import emailjs from 'emailjs-com';

function FormContact(){
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_dfyd0dj', 'template_3cp3mwj', formData, '_kSHwWzdGECQppZMm')
        .then((response) => {
            console.log('Message envoyé avec succès!', response.status, response.text);
            // Réinitialiser le formulaire ou afficher un message de succès
        }, (err) => {
            console.error('Échec de l\'envoi du message.', err);
        });
        setFormData({
          nom: '',
          email: '',
          message: ''

        })
};


    return(
      <div>
        <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6 flex flex-col">
          <h2 class="text-2xl font-bold text-gray-200">Contact</h2>

          <form class="flex flex-wrap" onSubmit={handleSubmit}>
            <input
              type="text"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
              placeholder="Full Name" name="nom" value={formData.nom} onChange={handleChange}
            />
            <input
              type="email"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
              placeholder="Email" name="email" value={formData.email} onChange={handleChange}
            />
             <div className=" flex flex-row gap-2">
            <textarea
              name="message"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
              placeholder="Message" value={formData.message} onChange={handleChange}
            ></textarea>
            
              <button
                type="submit"
                class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Send
              </button>

            </div>

          </form>
        </div>
      </div>
    )
}
export default FormContact;