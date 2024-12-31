import React from 'react'
import video from '../assets/video.webm'

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden h-screen flex justify-center items-center">
      {/* Vidéo de fond */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={video} type="video/webm" />
        <source src="../assets/video.mp4" type="video/mp4" />
        <source src="../assets/video.ogv" type="video/ogg" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
      
      {/* Contenu superposé */}
      <div className="relative text-center z-10 px-4 sm:px-8">
        {/* Slogan */}
        <h3 className="text-white uppercase text-[1.188rem] font-bold leading-[1.813] mb-4">
          Work harder, get stronger
        </h3>

        {/* Titre principal */}
        <h1 className="text-white uppercase text-[2.5rem] md:text-[4.125rem] font-extrabold mb-6">
          Easy with our <span className="text-[#d8464d]">Gym</span>
        </h1>

        {/* Bouton CTA */}
        <button className="hidden md:inline-block bg-[#ed563b] hover:bg-[#d8464d] text-white uppercase px-6 py-3 rounded-md transition-colors">
          Become a member
        </button>
      </div>

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  )
}

export default HeroSection
