"use client"
import Image from "next/image";
import Stars from "./components/Stars";
import { useState } from "react";
import Praise from "./components/Praise";

export default function Home() {
  let companyName:string="Trausti"
  const [like,setLike] = useState(false);
  const [dislike,setDislike] = useState(false);
  const handleDislike = () => {
    if (!dislike) {
      setDislike(true);
      setLike(false);
    } else {
      setDislike(false);
    }
  }

  const handleLike = () => {
    if (!like) {
      setLike(true);
      setDislike(false);
    } else {
      setLike(false);
    }
  }
  return (
    <main className="flex items-center justify-center p-10 bg-slate-200">
      <div className="shadow w-full lg:w-[50%] p-10 bg-white flex flex-col justify-center items-start gap-10 rounded-3xl">
        <p className="text-3xl font-bold p-3 w-full md:text-center" style={{borderBottom:"1px solid #ccc"}}>Leave a review</p>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10">
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="font-semibold text-2xl">Safety</p>
            <p className="text-[#ccc] font-medium">
              How safe do you feel with {companyName}
            </p>
            <Stars rate="rate1" uniqueId="safety" />
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="font-semibold text-2xl">Communication</p>
            <p className="text-[#ccc] font-medium">
              How easy was it to communicate with {companyName}
            </p>
            <Stars rate="rate2" uniqueId="communication" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start self-start gap-2">
          <p className="font-semibold text-2xl">Would you recommend {companyName}</p>
          <p className="text-[#ccc] font-medium mx-1 mb-2">Your opinion won't be made public</p>
            <div className="flex justify-center items-center gap-10 mx-4">
              <div className={`flex justify-center items-center gap-4 cursor-pointer ${dislike?"text-green-400":"text-[#ccc]"} `} onClick={handleDislike}><i className="fa-solid fa-thumbs-down " style={{scale:"2"}}></i>No</div>
              <div className={`flex justify-center items-center gap-4 cursor-pointer ${like?"text-green-400":"text-[#ccc]"} `} onClick={handleLike}><i className="fa-solid fa-thumbs-up" style={{scale:"2"}}/>Yes</div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
        <p className="font-semibold text-2xl">Praise</p>
          <p className="text-[#ccc] font-medium mb-2">What traits best describes {companyName}</p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <Praise name="Adventurous"/>
            <Praise name="Clean"/>
            <Praise name="Good Listener"/>
            <Praise name="Honest"/>
            <Praise name="Humourous"/>
            <Praise name="Inspiring"/>
            <Praise name="Kind"/>
            <Praise name="Knowledgable"/>
            <Praise name="Non-judgemental"/>
            <Praise name="Spontanous"/>
            <Praise name="Talkative"/>
            <Praise name="Thoughtful"/>
            <Praise name="Trustworthy"/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-2 w-full">
        <p className="font-semibold text-2xl">Care to share more?</p>
          <p className="text-[#ccc] font-medium mb-2">How was your overall experience? What's that one thing you won't forget {companyName} for?</p>
          <textarea name="Extra" id="Extra" className="rounded-lg p-5 w-full h-52 outline-none"  placeholder="Come on, you know the drill." style={{border:"2px solid #ccc"}}></textarea>
        </div>
        <button className="my-3 w-full md:w-64 bg-green-300 hover:bg-green-400 text-blue-900 font-semibold uppercase self-center p-4 rounded-md">Publish Review</button>
      </div>
    </main>
  );
}
