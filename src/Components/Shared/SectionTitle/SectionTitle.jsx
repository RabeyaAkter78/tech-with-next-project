import React from "react";

function SectionTitle({ Heading, SubHeading }) {
  return (
    <div className="text-center  justify-items-center">
      <div className=" ">
        <h1 className="text-xl md:text-3xl font-bold ">{Heading}</h1>
        <div className="border-0 border-b-4 border-blue-500 w-20  mx-auto"></div>
        <p>{SubHeading}</p>
      </div>
    </div>
  );
}

export default SectionTitle;
