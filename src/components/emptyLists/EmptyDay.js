import React from "react";
import { BsCalendar3 } from "react-icons/bs";

const EmptyDay = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <span className="text-primary text-6xl">
        <BsCalendar3 />
      </span>
      <h1 className="text-primary">What are your plans today?</h1>
    </div>
  );
};

export default EmptyDay;
