import React from 'react';
import logoFound from '../assets/notfound.avif';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 -mt-[10.1rem]">
      <PageTitle title="Not Found Page" />
      <img 
        src={logoFound} 
        alt="Page Not Found" 
        className="w-[300px] h-auto mb-8" 
      />
      <Link
        to="/"
        className="bg-transparent border-2 border-[#1A1A1A] rounded-[15px] text-[#3B3B3B] cursor-pointer text-[16px] font-semibold leading-normal px-[24px] py-[16px] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#1A1A1A] hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:shadow-none active:translate-y-0"
      >
        Go Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
