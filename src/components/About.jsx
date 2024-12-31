import React from 'react'
import aboutHeader from '../../content/aboutHeader.json'
import about from '../../content/about.json'

const About = () => {
  return (
    <>
    <div className="mt-[5.5rem] mb-[4rem] flex flex-col gap-[1.25rem] justify-center items-center text-center">
  {/* Titre */}
  <h2 className="text-black uppercase text-[1.75rem] md:text-[2rem] font-[800]">
     {aboutHeader.header}
  </h2>

  {/* Image décorative */}
  <img
    src={aboutHeader.image}
    alt="Line decoration"
  />

  {/* Paragraphe */}
  <p className="text-[#7a7a7a] text-[0.875rem] md:text-[1rem] leading-[1.563rem] text-center">
   {aboutHeader.subtitle}
  </p>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-[4rem] max-w-[1120px] mx-auto px-4">
      {/* <!-- Carte 1 --> */}
     {about.map((aboute) => (
         <div className="flex gap-6" key={aboute.id}>
         <img
           className="w-[80px] h-[80px] flex-shrink-0"
           src={aboute.image}
           alt=""
         />
         <div>
           <h3 className="text-[#232d39] uppercase text-[1.188rem] font-[600]">{aboute.title}</h3>
           <p className="text-[#7a7a7a] text-[0.875rem] leading-[1.563rem]">
             {aboute.subtitle}
           </p>
           <a className="text-[#ed563b] hover:underline cursor-pointer" href="#">{aboute.link}</a>
         </div>
       </div>
     ))}

    </div>

    
    </>
  )
}

export default About