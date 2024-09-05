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
      <div className="tags fixed bg-white w-[250px] h-[80vh] p-2 pt-4 border-r-[1px] border-r-black ">
        <ul className="flex gap-3 flex-col items-center pt-9 transition-all delay-75">
          <li className="text-xl hover:text-blue-500 cursor-pointer hover:scale-110">
            Popular
          </li>
          <li className="text-xl hover:text-blue-500 cursor-pointer hover:scale-110">
            Explore
          </li>
          <li className="text-xl hover:text-blue-500 cursor-pointer hover:scale-110">
            Follows
          </li>
        </ul>
        <div className="h-[1px] w-full bg-black mt-4"></div>
      </div>

      <Post data={posts} />
      <Recent />
    </>
  );
};

export default Forum;
