import React from 'react'
import image from '../../public/begin-bg.jpg'

const Begin = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[50vh] md:h-[70vh] overflow-hidden">
    {/* <!-- Texte principal --> */}
    <h1 className="absolute top-[15%] md:top-[20%] text-center text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-[800] uppercase">
      Don’t <span className="text-[#d8464d]">think</span>, begin <span className="text-[#d8464d]">today</span>!
    </h1>
    {/* <!-- Image de fond --> */}
    <img
      src={image}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover bg-center bg-cover bg-no-repeat z-[-1]"
    />
    {/* <!-- Paragraphe --> */}
    <p className="mt-[2rem] md:mt-[4rem] px-[1rem] md:px-[2rem] text-[1rem] md:text-[1.2rem] leading-[1.5rem] text-center text-white">
      Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio
      augue eget libero. <br className="hidden md:block" /> Morbi tempus mauris a nisi luctus imperdiet.
    </p>
    {/* <!-- Bouton --> */}
    <button
      className="mt-[2rem] bg-[#ed563b] hover:bg-orange-400 text-white uppercase p-[0.625rem] px-[1.5rem] rounded-md text-[0.875rem] md:text-[1rem] cursor-pointer hidden md:block"
    >
      Become a member
    </button>
  </div>
  )
}

export default Begin