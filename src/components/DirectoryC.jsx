import React from "react";
import KitchenSinkExample from "./Card";

const accounts = [
  {
    id: 1,
    name: "Alice",
    about: "my name is alice",
    almaMater: "btech",
    email: "alice@example.com",
    phone: "1234567890",
    pfp:"https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp"
  },
  {
    id: 2,
    name: "Bob",
    about: "my name is bob",
    almaMater: "bsc",
    email: "alice@example.com",
    phone: "1234567890",
    pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  },
  {
    id: 3,
    name: "Alice",
    about: "hi my name is ",
    almaMater: "btech",
    email: "alice@example.com",
    phone: "1234567890",
    pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  },
  {
    id: 4,
    name: "Alice",
    about: "hi my name is ",
    almaMater: "btech",
    email: "alice@example.com",
    phone: "1234567890",
    pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  },
  {
    id: 5,
    name: "Alice",
    about: "hi my name is ",
    almaMater: "btech",
    email: "alice@example.com",
    phone: "1234567890",
    pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  },
  {
    id: 6,
    name: "Alice",
    about: "hi my name is ",
    almaMater: "btech",
    email: "alice@example.com",
    phone: "1234567890",
    pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  },
  
];

const DirectoryC = () => {
  return <div className="p-10 container">
    <h1 className="text-center font-bold text-3xl">Directory</h1>
    <br />
    <div className="flex justify-center items-center space-x-4">
    <input type="text" placeholder="Search by name..." className="border border-solid border-black"/>
    <input type="text" placeholder="Search by email..." className="border border-solid border-black"/>
    <input type="text" placeholder="Search by phone..." className="border border-solid border-black"/>
    </div>

    {/* <h2>Sort</h2>
    <button>Sort by Name</button>
    <button>Sort by Email</button> */}

    <div className="p-[1rem] grid grid-cols-3">
      {accounts.map((account) => (
        <KitchenSinkExample key={account.id} pfp={account.pfp} about={account.about} name={account.name} almaMater={account.almaMater} phone={account.phone} email={account.email} />
      ))}
    </div>
  </div>;
};

export default DirectoryC;
