import React from 'react'
import classes from '../../content/classes.json'
import classesHeader from '../../content/classesHeader.json'

const Classes = () => {
  return (
    // <!-- En-tête de section -->
    <>
    <div class="mt-[2rem] mb-[4rem] flex flex-col gap-[1.25rem] justify-center items-center text-center">
      <h2 class="text-black uppercase text-[1.75rem] md:text-[2rem] font-[800]">
        {classesHeader.header}
      </h2>
      <img
        src={classesHeader.image}
        alt="Line decoration"
        
      />
      <p class="text-[#7a7a7a] text-[0.875rem] md:text-[1rem] leading-[1.563rem]">
        {classesHeader.subtitle}
      </p>
    </div>
  
    {/* // <!-- Contenu principal --> */}
    <div className="flex flex-col md:flex-row gap-[2rem] justify-between max-w-[1120px] mx-auto px-4 mb-[4rem]">
      {/* <!-- Liste des classes --> */}
      <div className="flex flex-col w-full md:w-[35%] gap-6 p-4">
        <div className="flex items-center gap-4 p-4 shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-10 h-10"
            src="https://templatemo.com/templates/templatemo_548_training_studio/assets/images/tabs-first-icon.png"
            alt="Icon 1"
          />
          <h3 className="text-[1.188rem] font-[600] text-[#232d39]">First Training Class</h3>
        </div>
        <div className="flex items-center gap-4 p-4 shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-10 h-10"
            src="https://templatemo.com/templates/templatemo_548_training_studio/assets/images/tabs-first-icon.png"
            alt="Icon 2"
          />
          <h3 className="text-[1.188rem] font-[600] text-[#232d39]">Second Training Class</h3>
        </div>
        <div className="flex items-center gap-4 p-4 shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-10 h-10"
            src="https://templatemo.com/templates/templatemo_548_training_studio/assets/images/tabs-first-icon.png"
            alt="Icon 3"
          />
          <h3 className="text-[1.188rem] font-[600] text-[#232d39]">Third Training Class</h3>
        </div>
        <div className="flex items-center gap-4 p-4 shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-10 h-10"
            src="https://templatemo.com/templates/templatemo_548_training_studio/assets/images/tabs-first-icon.png"
            alt="Icon 4"
          />
          <h3 className="text-[1.188rem] font-[600] text-[#232d39]">Fourth Training Class</h3>
        </div>
        <button className="bg-[#ed563b] hover:bg-[#d8464d] text-white py-2 px-4 md:py-3 md:px-6 rounded-md capitalize self-start">
          View all schedules
        </button>
    

      </div>
  
      {/* <!-- Image et détails --> */}
      <div className="w-full md:w-[60%]">
        <img
          className="w-full h-auto rounded-md shadow-md"
          src={classes.image}
          alt="Training className"
        />
        <h3 className="text-[1.438rem] font-[700] text-[#232d39] mt-4">
          {classes.header}
        </h3>
        <p className="text-[0.875rem] text-[#7a7a7a] font-[400] mt-2 mb-4">
          {classes.subtitle}
        </p>
        <button className="bg-[#ed563b] hover:bg-orange-400 text-white py-2 px-4 rounded-md capitalize">
          View schedule
        </button>
      </div>
    </div>
    </>
  )
}

export default Classes