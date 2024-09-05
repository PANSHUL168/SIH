import React from "react";
import KitchenSinkExample from "./Card";

const accounts = [
  {
    id: 1,
    name: "Alice",
    about: "",
    almaMater: "",
    email: "alice@example.com",
    phone: "1234567890",
    pfp:"https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp"
  },
  {
    id: 2,
    name: "Bob",
    about: "",
    almaMater: "",
    email: "alice@example.com",
    phone: "1234567890",
    pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  },
  // {
  //   id: 3,
  //   name: "Alice",
  //   about: "",
  //   almaMater: "",
  //   email: "alice@example.com",
  //   phone: "1234567890",
  //   pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  // },
  // {
  //   id: 4,
  //   name: "Alice",
  //   about: "",
  //   almaMater: "",
  //   email: "alice@example.com",
  //   phone: "1234567890",
  //   pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  // },
  // {
  //   id: 5,
  //   name: "Alice",
  //   about: "",
  //   almaMater: "",
  //   email: "alice@example.com",
  //   phone: "1234567890",
  //   pfp: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
  // },
];

const DirectoryC = () => {
  return <div className="p-10">
    <h1 className="text-center font-bold text-3xl">Directory</h1>

    {/* <h2>Search</h2> */}
    {/* <input type="text" placeholder="Search by name..." />
    <input type="text" placeholder="Search by email..." />
    <input type="text" placeholder="Search by phone..." /> */}

    {/* <h2>Sort</h2>
    <button>Sort by Name</button>
    <button>Sort by Email</button> */}

    <div className="p-2">
      {accounts.map((account) => (
        <KitchenSinkExample key={account.id} pfp={account.pfp} about={account.about} name={account.name} almaMater={account.almaMater} phone={account.phone} email={account.email} />
      ))}
    </div>
  </div>;
};

export default DirectoryC;
