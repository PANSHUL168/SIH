import React from "react";
import Post from "../components/forum/post/Post";
import Recent from "../components/forum/recent/Recent";

const posts = [
  {
    author: "",
    time: "",
    title: "",
    attachments: "",
    description: "",
    comments: [
      {
        commentTitle: "",
        commentTime: "",
      },
    ],
  },
];

const Forum = () => {
  return (
    <>
      <div className="tags fixed  bg-[#112D4e] w-[250px] h-[95vh] p-2 pt-4 border-r-[1px] border-r-white ">
        <ul className="flex gap-3 flex-col items-center pt-9 transition-all delay-75 text-white">
          <li className="text-xl hover:border-b-white hover:border-b-2 cursor-pointer hover:scale-110">
            Popular
          </li>
          <li className="text-xl hover:border-b-white hover:border-b-2 cursor-pointer hover:scale-110">
            Explore
          </li>
          <li className="text-xl hover:border-b-white hover:border-b-2 cursor-pointer hover:scale-110">
            Follows
          </li>
        </ul>
        <div className="h-[1px] w-full bg-white mt-4"></div>
      </div>

      <Post data={posts} />
      <Recent />
    </>
  );
};

export default Forum;
