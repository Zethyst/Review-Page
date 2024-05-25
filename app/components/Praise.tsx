"use client"
import React, { useState } from "react";

interface PraiseProps {
  name: String;
}

const Praise: React.FC<PraiseProps> = ({ name }) => {
  const [select, setSelect] = useState(false);
  const handleClick = () => {
    setSelect(!select)
  };
  return (
    <div
      onClick={handleClick}
      className={`rounded-full ${!select?"bg-[#eaeaea]":"bg-green-300"} hover:bg-green-300 font-medium text-center p-4 cursor-pointer`}
    >
      {name}
    </div>
  );
};

export default Praise;
