import React from "react";
import { Link } from "react-router-dom";
import { GrMap } from "react-icons/gr";
import { LuCalendarClock } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendarNumberOutline } from "react-icons/io5";

const Card = ({ data }) => {
  const {
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
    jobTitle,
    _id,
  } = data;
  return (
    // <div>
    //   <h3>{data.jobTitle}</h3>
    // </div>
    <section className="card">
      <Link
        to={`/job/${_id}`}
        className="flex gap-4 flex-col sm:flex-row items-center"
      >
        <img src={companyLogo} alt="" className="h-[70px] w-[70px]" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-primary/70 flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <GrMap />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <LuCalendarClock />
              {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineDollar />
              {minPrice}-{maxPrice}k
            </span>
            <span className="flex items-center gap-2">
              <IoCalendarNumberOutline />
              {postingDate}
            </span>
          </div>

          <p className="text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
