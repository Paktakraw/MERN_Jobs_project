import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <HiOutlineMailOpen />
          Email me for hobs
        </h3>
        <p className="text-primary/75 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          totam fuga eos odit? Nostrum.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* 2nd part */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <IoRocketSharp />
          Get noticed faster
        </h3>
        <p className="text-primary/75 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          totam fuga eos odit? Nostrum.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
