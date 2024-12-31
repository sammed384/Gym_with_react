import React from 'react';
import schedulesHeader from '../../content/schedulesHeader.json';
import schedulesTable from '../../content/schedulesTable.json';
import image from '../../public/schedule-bg.jpg';

const Schedules = () => {
  return (
    <div
      className="mb-[2rem] mt-[0rem] relative bg-no-repeat bg-cover bg-center h-auto py-20"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        {/* Title */}
        <h2 className="text-white uppercase text-2xl md:text-3xl font-extrabold">
          {schedulesHeader.header}
        </h2>

        {/* Decorative Image */}
        <img
          src={schedulesHeader.image}
          alt="Line decoration"
          className="max-w-full h-auto mb-4"
        />

        {/* Subtitle */}
        <p className="text-white text-sm md:text-base leading-6 text-center">
          {schedulesHeader.subtitle}
        </p>
      </div>

      {/* Navigation days */}
      <div className="text-center mt-8">
        <div className="inline-flex space-x-4 text-white">
          {["Monday", "Tuesday", "Thursday", "Friday"].map((day, index) => (
            <React.Fragment key={day}>
              {index > 0 && <span>/</span>}
              <button
                className={`hover:text-red-500 ${day === "Monday" ? "text-red-600" : ""}`}
                onClick={(e) => e.preventDefault()} // Prevent actual link navigation for now
              >
                {day}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Schedule table */}
      <div className="overflow-x-auto mt-10 max-w-4xl mx-auto">
        <table className="w-full border-collapse text-sm md:text-lg text-white text-center">
          <thead>
            <tr>
              <th className="p-4 border bg-gray-700">Session</th>
              <th className="p-4 border bg-gray-700">Start Time</th>
              <th className="p-4 border bg-gray-700">End Time</th>
              <th className="p-4 border bg-gray-700">Trainer</th>
            </tr>
          </thead>
          <tbody>
            {schedulesTable.map((session, index) => (
              <tr
                key={session.name}
                className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}
              >
                <td className="p-4 border">{session.name}</td>
                <td className="p-4 border">{session.start}</td>
                <td className="p-4 border">{session.end}</td>
                <td className="p-4 border">{session.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedules;
