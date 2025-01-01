import React from 'react'

const Footer = () => {
  return (
    <div class="mb-[4rem]">
    <p class="text-black text-center text-sm md:text-base flex flex-wrap justify-center items-center gap-1">
      Copyright &copy; {new Date().getFullYear()} Training Studio - Cloned by 
      <a 
        class="text-[#d45f65] hover:text-[#b43a4a] transition-colors"
        href="#" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Samatar
      </a>
    </p>
  </div>
  )
}

export default Footer