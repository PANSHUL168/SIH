import React from "react";
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
    <div className="post-container mt-[25px] p-10 w-[55vw] h-auto bg-[#112D4e] rounded-xl mr-[800px] ml-[270px] ">
      <div className="post">
        <div className="top flex justify-between items-center h-auto">
          <div className="left text-white text-sm">
            <image src="" alt="pfp" />
            {post.author} | {post.time}
          </div>
          <div className="right">
            <button className="px-3 py-1 font-semibold text-sm bg-blue-500 text-black rounded-2xl">
              Follow
            </button>
          </div>
        </div>
        <h1 className="text-xl font-bold text-white">
          Naman Arora is a palindrome
        </h1>
        <div className="post-image h-[200px] w-[200px]">
          <img
            className="object-cover h-full w-full"
            src="https://media.discordapp.net/attachments/1279028273677996090/1280955922612748380/R.png?ex=66d9f6aa&is=66d8a52a&hm=40fafa685328294c5160aa0276ec06c88971ae8beea3502fccbf18bfa87b5cac&=&format=webp&quality=lossless&width=1021&height=573"
            alt=""
          />
        </div>
        <p className="text-white">
          This is a very serious question in today's world where palindromic
          names are a rare sight. Naman Arora.This is a very serious question in
          today's world where palindromic names are a rare sight
        </p>
        <div className="tags">
          <div className="feedback">
            <i class="bi bi-hand-thumbs-up"></i>
          </div>
          <div className="comments"></div>
        </div>
      </div>

      <div className="w-full h-[1px] my-3 bg-black"></div>

      <div className="post">
        <div className="top flex justify-between items-center h-auto">
          <div className="left text-white text-sm">
            <image src="" alt="pfp" />
            {post.author} | {post.time}
          </div>
          <div className="right">
            <button className="px-3 py-1 font-semibold text-sm bg-blue-500 text-black rounded-2xl">
              Follow
            </button>
          </div>
        </div>
        <h1 className="text-xl font-bold text-white">
          Naman Arora is a palindrome
        </h1>
        <div className="post-image h-[200px] w-[200px]">
          <img
            className="object-cover h-full w-full"
            src="https://media.discordapp.net/attachments/1279028273677996090/1280955922612748380/R.png?ex=66d9f6aa&is=66d8a52a&hm=40fafa685328294c5160aa0276ec06c88971ae8beea3502fccbf18bfa87b5cac&=&format=webp&quality=lossless&width=1021&height=573"
            alt=""
          />
        </div>
        <p className="text-white">
          This is a very serious question in today's world where palindromic
          names are a rare sight. Naman Arora.This is a very serious question in
          today's world where palindromic names are a rare sight
        </p>
      </div>
      <div className="w-full h-[1px] my-3 bg-black"></div>
      <div className="post">
        <div className="top flex justify-between items-center h-auto">
          <div className="left text-white text-sm">
            <image src="" alt="pfp" />
            {post.author} | {post.time}
          </div>
          <div className="right">
            <button className="px-3 py-1 font-semibold text-sm bg-blue-500 text-black rounded-2xl">
              Follow
            </button>
          </div>
        </div>
        <h1 className="text-xl font-bold text-white">
          Naman Arora is a palindrome
        </h1>
        <div className="post-image h-[200px] w-[200px]">
          <img
            className="object-cover h-full w-full"
            src="https://media.discordapp.net/attachments/1279028273677996090/1280955922612748380/R.png?ex=66d9f6aa&is=66d8a52a&hm=40fafa685328294c5160aa0276ec06c88971ae8beea3502fccbf18bfa87b5cac&=&format=webp&quality=lossless&width=1021&height=573"
            alt=""
          />
        </div>
        <p className="text-white">
          This is a very serious question in today's world where palindromic
          names are a rare sight. Naman Arora.This is a very serious question in
          today's world where palindromic names are a rare sight
        </p>
      </div>
      <div className="w-full h-[1px] my-3 bg-black"></div>
    </div>
  );
};

export default Post;
