import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
  const data = useLocation();

  // Get the current date and day
  const today = new Date();
  const options = { weekday: "long" };
  const day = today.toLocaleDateString("en-US", options);
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get the current time
  const currentTime = today.toLocaleTimeString("en-US");

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header name={data.state.user} />
        
        {/* Card */}
        <div className="flex justify-between gap-7 flex-wrap">
          <Card bgColor={"#8272DA"} title={"23°"} subTitle={"Chennai"} />
          <Card bgColor={"#FD6663"} title={day} subTitle={formattedDate} />
          <Card bgColor={"#FCA201"} title={"Current Time"} subTitle={currentTime} />
        </div>
        
        {/* TodoContainer */}
        <TodoContainer />
      </div>
    </div>
  );
}

export default Landing;
