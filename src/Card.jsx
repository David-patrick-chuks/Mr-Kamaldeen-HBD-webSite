import React from "react";
import chuksFace from "./assets/profile img.png";
import kenFace from "./assets/kenkarmalFace.jpg";
import { AiFillHeart } from "react-icons/ai";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
export const Card = () => {
  return (
    <div className="w-screen h-screen lg:h-fit overflow-hidden lg:w-fit lg:p2 p-2 flex items-center justify-center ">
      <div className=" shadow-md lg:w-[23%] lg:h-fit overflow-hidden rounded-xl bg-slate-200">
        <div className="lg:w-[100%] px-4 pt-3 pb-2 flex  items-center justify-between">
          <div className="flex gap-[6px]">
            <img
              src={chuksFace}
              className=" rounded-full w-6 h-6 border border-white outline outline-yellow-800"
            />
            <div>
              <h1 className="text-[16px] leading-none font-semibold ">
                David_chuks
              </h1>
              <h1 className="text-[1px] leading-none font-mono ">
                Web developer
              </h1>
            </div>
          </div>
          <div className=" cursor-pointer rounded-[4px] bg-gradient-to-br from-yellow-800 to-orange-800 text-white px-[15px] py-[3px] text-[14px]">
            <p>Follow</p>
          </div>
        </div>
        <div className=" lg:w-[100%]">
          <img src={kenFace} />
        </div>
        <div className="lg:w-[100%] flex justify-between items-center py-2 px-3">
          <div className="flex gap-2 items-center">
            <AiFillHeart className="text-yellow-700" size={25} />
            <IoPaperPlaneOutline />
            {/* <FaRegComment /> */}
            <BiComment />
          </div>
          <div>
            <FaRegBookmark />
          </div>
        </div>
        <div className="lg:w-[100%]">
          <h1 className=" px-3 text-[4px] font-semibold ">6,585,209 likes</h1>
          <h1 className=" pb-1 px-3 text-[4px]">
            <span className="font-semibold">David_chuks </span> Happy Birthday{" "}
            <span className="font-semibold">Mr Kamaldeen</span>, Thank you for
            your guidance and support. wishing you a wonderful day and a year
            filled with success!.
          </h1>
          <p className="pb-3 px-3 text-[1px] text-gray-600 ">July 4</p>
        </div>
      </div>
    </div>
  );
};
