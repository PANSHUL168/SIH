import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
const post = {
  author: "Alice",
  time: "2024-09-01 10:30 AM",
  title: "New Course Materials Available",
  attachments: "materials.pdf",
  description:
    "Please check the new materials uploaded for the upcoming course.",
  comments: [
    {
      commentTitle: "Thanks for sharing!",
      commentTime: "2024-09-01 11:00 AM",
      commentAuthor: "John",
      commentDescription: "This will be very helpful for the upcoming exams.",
    },
    {
      commentTitle: "Are there any additional readings?",
      commentTime: "2024-09-01 11:30 AM",
      commentAuthor: "Emma",
      commentDescription:
        "I want to make sure I don’t miss any important materials.",
    },
  ],
};
const Post = ({ data }) => {
  return (
    <div className="post-container mt-[95px] p-10 w-[55vw] h-auto bg-[#112D4e] rounded-xl mr-[800px] ml-[270px] ">
      <div className="post">
        <div className="top flex justify-between items-center h-auto">
          <div className="left text-white text-sm font-mono">
            <image src="" alt="pfp" />
            {post.author} | {post.time}
          </div>
          <div className="right">
            <button className="px-3 py-1 font-semibold text-sm bg-blue-500 text-black rounded-2xl font-mono">
              Follow
            </button>
          </div>
        </div>
        <h1 className="text-xl font-bold text-white my-2">
          Naman Arora is a palindrome
        </h1>
        <div className="post-image h-[200px] my-2 w-[200px]">
          <img
            className="object-cover h-full w-full"
            src="https://media.discordapp.net/attachments/1279028273677996090/1281305087322488842/image0.jpg?ex=66db3bda&is=66d9ea5a&hm=e2687738fb3ddcb8c97a48857a6fd2228f3e726f083b62b016ad081ad8d02aab&=&format=webp&width=687&height=350"
            alt=""
          />
        </div>
        <p className="text-white text-lg my-2">
          This is a very serious question in today's world where palindromic
          names are a rare sight. Naman Arora.This is a very serious question in
          today's world where palindromic names are a rare sight
        </p>
        <div className="tags flex items-center justify-between">
          <div className="feedback h-[40] items-center flex mt-3 justify-center bg-black p-2 w-[80px] rounded-xl">
            <AiOutlineLike className="text-white" /> 
            <div className="mx-2 w-[1px] bg-white"></div>
            <AiOutlineDislike className="text-white" />
          </div>
          <div className="comments flex mt-3 justify-center gap-2 items-center bg-black p-2 w-[150px] rounded-xl text-white"><MdMessage /> Comments</div>
        </div>
      </div>

      <div className="w-full h-[1.5px] my-4 bg-black"></div>

      <div className="post">
        <div className="top flex justify-between items-center h-auto">
          <div className="left text-white text-sm font-mono">
            <image src="" alt="pfp" />
            {post.author} | {post.time}
          </div>
          <div className="right">
            <button className="px-3 py-1 font-semibold text-sm bg-blue-500 text-black rounded-2xl font-mono">
              Follow
            </button>
          </div>
        </div>
        <h1 className="text-xl font-bold text-white my-2">
          Naman Arora is a palindrome
        </h1>
        <div className="post-image h-[200px] my-2 w-[200px]">
          <img
            className="object-cover h-full w-full"
            src="https://media.discordapp.net/attachments/1279028273677996090/1281305087322488842/image0.jpg?ex=66db3bda&is=66d9ea5a&hm=e2687738fb3ddcb8c97a48857a6fd2228f3e726f083b62b016ad081ad8d02aab&=&format=webp&width=687&height=350"
            alt=""
          />
        </div>
        <p className="text-white text-lg my-2">
          This is a very serious question in today's world where palindromic
          names are a rare sight. Naman Arora.This is a very serious question in
          today's world where palindromic names are a rare sight
        </p>
        <div className="tags flex items-center justify-between">
          <div className="feedback h-[40] items-center flex mt-3 justify-center bg-black p-2 w-[80px] rounded-xl">
            <AiOutlineLike className="text-white" /> 
            <div className="mx-2 w-[1px] bg-white"></div>
            <AiOutlineDislike className="text-white" />
          </div>
          <div className="comments flex mt-3 justify-center gap-2 items-center bg-black p-2 w-[150px] rounded-xl text-white"><MdMessage /> Comments</div>
        </div>
      </div>

      <div className="w-full h-[1.5px] my-4 bg-black"></div>


      <div className="post">
        <div className="top flex justify-between items-center h-auto">
          <div className="left text-white text-sm font-mono">
            <image src="" alt="pfp" />
            {post.author} | {post.time}
          </div>
          <div className="right">
            <button className="px-3 py-1 font-semibold text-sm bg-blue-500 text-black rounded-2xl font-mono">
              Follow
            </button>
          </div>
        </div>
        <h1 className="text-xl font-bold text-white my-2">
          Naman Arora is a palindrome
        </h1>
        <div className="post-image h-[200px] my-2 w-[200px]">
          <img
            className="object-cover h-full w-full"
            src="https://media.discordapp.net/attachments/1279028273677996090/1281305087322488842/image0.jpg?ex=66db3bda&is=66d9ea5a&hm=e2687738fb3ddcb8c97a48857a6fd2228f3e726f083b62b016ad081ad8d02aab&=&format=webp&width=687&height=350"
            alt=""
          />
        </div>
        <p className="text-white text-lg my-2">
          This is a very serious question in today's world where palindromic
          names are a rare sight. Naman Arora.This is a very serious question in
          today's world where palindromic names are a rare sight
        </p>
        <div className="tags flex items-center justify-between">
          <div className="feedback h-[40] items-center flex mt-3 justify-center bg-black p-2 w-[80px] rounded-xl">
            <AiOutlineLike className="text-white" /> 
            <div className="mx-2 w-[1px] bg-white"></div>
            <AiOutlineDislike className="text-white" />
          </div>
          <div className="comments flex mt-3 justify-center gap-2 items-center bg-black p-2 w-[150px] rounded-xl text-white"><MdMessage /> Comments</div>
        </div>
      </div>

      <div className="w-full h-[1.5px] my-4 bg-black"></div>

    </div>
  );
};

export default Post;
