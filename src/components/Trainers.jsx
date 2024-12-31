import React from 'react';
import trainers from '../../content/trainers.json';
import trainersHeader from '../../content/trainersHeader.json';
import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';

const Trainers = () => {
  return (
    <div className="max-w-[1120px] mx-auto my-[4rem]">
      {/* Header Section */}
      {trainersHeader && (
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-900">
            {trainersHeader.header || 'Our Trainers'}
          </h2>
          {trainersHeader.image && (
            <img
              src={trainersHeader.image}
              alt="Separator"
              className="my-4 mx-auto"
              loading="lazy"
            />
          )}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed text-center">
            {trainersHeader.subtitle || 'Meet our expert team.'}
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="md:flex md:justify-center flex-wrap gap-6 p-4">
        {trainers.map((trainer, index) => (
          <div
            key={trainer.id || index}
            className="bg-white shadow-md hover:shadow-lg rounded-lg transition-shadow max-w-xs mx-auto mb-6 p-[2rem]"
          >
            <img
              className="w-full rounded-t-lg"
              src={trainer.image}
              alt={trainer.name || 'Trainer Image'}
              loading="lazy"
            />
            <div className="p-6">
              <h5 className="text-sm font-semibold text-[#ed563b]">
                {trainer.title2}
              </h5>
              <h3 className="text-lg font-bold text-gray-900 mt-2">
                {trainer.title}
              </h3>
              <p className="text-gray-500 text-sm mt-4">{trainer.subtitle}</p>
              <div className="flex justify-start gap-4 mt-4">
                {trainer.facebook && (
                  <a
                    href={trainer.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Follow ${trainer.name} on Facebook`}
                    className="text-gray-700 hover:text-[#ed563b] text-xl"
                  >
                    <FaFacebook />
                  </a>
                )}
                {trainer.twitter && (
                  <a
                    href={trainer.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Follow ${trainer.name} on Twitter`}
                    className="text-gray-700 hover:text-[#ed563b] text-xl"
                  >
                    <FaTwitter />
                  </a>
                )}
                {trainer.linkedin && (
                  <a
                    href={trainer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Connect with ${trainer.name} on LinkedIn`}
                    className="text-gray-700 hover:text-[#ed563b] text-xl"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {trainer.behance && (
                  <a
                    href={trainer.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${trainer.name}'s portfolio on Behance`}
                    className="text-gray-700 hover:text-[#ed563b] text-xl"
                  >
                    <FaBehance />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
