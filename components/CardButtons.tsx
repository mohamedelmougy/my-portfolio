"use client";
import Link from "next/link";
import React from "react";

const CardButtons = () => {
  return (
    <div className="flex mt-10 p-4 w-full justify-between items-center border-t border-t-gray-600">
      <a
        download="resume"
        onClick={() => window.open("/js.pdf", "_blank")}
        className="cursor-pointer text-center text-nowrap text-sm sm:text-2xl px-3 py-2 sm:p-4 my-3 sm:m-4 border border-white rounded-full hover:text-primary-green transition-all duration-300"
      >
        download cv
      </a>
      <Link
        href="https://www.upwork.com/freelancers/~01c0b3a061499df17a"
        target="_blank"
        className="text-center text-nowrap text-sm sm:text-2xl px-3 py-2 sm:p-4 sm:px-10 my-3 sm:m-4 border border-white rounded-full hover:text-primary-green transition-all duration-300"
      >
        Hire me
      </Link>
    </div>
  );
};

export default CardButtons;
