import React from "react";
import { FiBriefcase } from "react-icons/fi";

function ExperienceCard({ icon, title, date, description }) {
  return (
    <div className="w-[95%] backgroundColor  border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 E-Card">
      
      {/* Top Row */}
      <div className=" flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className='text-xl'>
            {<FiBriefcase className="skill-color" />}
          </div>
          <h3 className="text-lg font-semibold skill-color">{title}</h3>
        </div>

        <p className="text-sm text-pink-300">{date}</p>
      </div>
      {/* Description */}
      <p className="text-blue-700 text-lg leading-relaxed Blue-Color">{description}</p>
    </div>
  );
}

export default ExperienceCard;
