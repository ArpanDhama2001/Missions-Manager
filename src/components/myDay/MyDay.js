import React from "react";
import Header from "../header/Header";
import { BsCalendar3 } from "react-icons/bs";
import EmptyDay from "../emptyLists/EmptyDay";
import AddTaskInput from "../addTaskInput/AddTaskInput";

function MyDay() {
  return (
    <main className="bg-fill h-full p-4">
      <Header title="My Day" icon={<BsCalendar3 />} />
      <section className="relative flex flex-col items-center justify-center h-full overflow-hidden">
        <EmptyDay />
        <div className="absolute bottom-24 w-full">
          <AddTaskInput />
        </div>
      </section>
    </main>
  );
}

export default MyDay;
