import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Conteneur principal */}
      <div className="flex flex-wrap md:flex-nowrap mb-[3rem] mt-[0.6rem]">
        {/* Carte Google Maps */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999522.9381395306!2d41.30764689671755!3d11.812970501079601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1622d46734f9f601%3A0x1472bba7ef0f5b88!2sDjibouti!5e0!3m2!1sfr!2sdj!4v1733213310115!5m2!1sfr!2sdj"
            width="100%"
            height="650" // Ajuste la hauteur pour les petits écrans
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location of Djibouti"
          ></iframe>
        </div>

        {/* Formulaire de contact */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://templatemo.com/templates/templatemo_548_training_studio/assets/images/contact-bg.jpg')",
          }}
        >
          <form className="bg-white text-black p-[1rem] m-[2rem] rounded-lg w-full max-w-lg shadow-lg">
            {/* Champ Nom */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name*"
                required
                className="w-full p-3 rounded border border-black text-gray-800 outline-none"
              />
            </div>

            {/* Champ Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email*"
                required
                className="w-full p-3 rounded border border-black text-gray-800 outline-none"
              />
            </div>

            {/* Champ Sujet */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full p-3 rounded border border-black text-gray-800 outline-none"
              />
            </div>

            {/* Champ Message */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Message"
                className="w-full p-3 rounded border border-black text-gray-800 outline-none"
              ></textarea>
            </div>

            {/* Bouton Submit */}
            <button
              type="submit"
              className="w-full bg-[#ed563b] hover:bg-orange-500 text-white font-bold py-3 rounded shadow-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
