import React from "react";

const Recent = () => {
  return (
    <div className="recent fixed top-[95px] right-5 w-[350px] h-[80vh] bg-[#112D4e]  py-4 px-3 rounded-xl">
      <div className="headings flex justify-between">
        <p className="text-lg font-semibold text-gray-300">Recents</p>
        <button className="bg-blue-500 rounded-2xl px-2">Clear</button>
      </div>

      <div className="viewed-posts mt-2 flex flex-col">
        <div className="viewed-post text-white">
          <div >
            <img src="profile" alt="" />
            <p className="font-bold text-sm ">Naman Arora</p>
          </div>
          <p className="font-semibold text-sm ">
            Naman is a palindrome i.e. Naman Arora reversed is also Naman Arora.
          </p>
          <p className="text-sm">6 hr ago | 32 comments</p>
          <div className="w-full h-[1px] bg-[#f9f7f7] mt-3 mb-1"></div>
        </div>
      </div>

      <div className="viewed-posts mt-2 flex flex-col">
        <div className="viewed-post text-white">
          <div>
            <img src="profile" alt="" />
            <p className="font-bold text-sm">Naman Arora</p>
          </div>
          <p className="font-semibold text-sm ">
            Naman is a palindrome i.e. Naman Arora reversed is also Naman Arora.
          </p>
          <p className="text-sm">6 hr ago | 32 comments</p>
          <div className="w-full h-[1px] bg-[#f9f7f7] mt-3 mb-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
