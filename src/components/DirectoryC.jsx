import React from "react";
import KitchenSinkExample from "./Card";

const accounts = [
  {
    id: 1,
    name: "Alice",
    about:
      "I am a passionate and results-driven DevOps Engineer with over 5 years of experience in automating, optimizing, and maintaining high-availability, scalable systems. My expertise lies in bridging the gap between development and operations by implementing continuous integration and continuous delivery (CI/CD) pipelines, infrastructure as code (IaC), and cloud-based solutions.",
    almaMater: "Delhi Technological University (2020-24)",
    email: "alice@example.com",
    tags: ["DevOps", "Cricket", "Travel", "Research"],
    pfp: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Bob",
    about:
      "I am an experienced Project Manager with over 10 years of expertise in the core industry, specializing in large-scale infrastructure projects. My background includes managing cross-functional teams, overseeing multi-million-dollar budgets, and ensuring projects are completed on time and within scope. My approach is hands-on, detail-oriented, and focused on delivering exceptional results that align with the strategic goals of the organization.",
    almaMater: "Delhi Technological University (2017-2021)",
    email: "bob@example.com",
    tags: ["Project Management", "Leadership", "Construction", "Strategy"],
    pfp: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Toby",
    about:
      "I am a passionate Software Developer with a strong foundation in full-stack development and over 5 years of hands-on experience in building and deploying scalable web applications. I excel in creating clean, efficient code and have a deep understanding of both front-end and back-end technologies, including JavaScript, React, Node.js, and Python. My work is driven by a love for problem-solving and a commitment to delivering high-quality, user-centric solutions.",
    almaMater: "Stanford University (2015-2019)",
    email: "toby@example.com",
    tags: ["JavaScript", "React", "Node.js", "Python"],
    pfp: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Harry",
    about:
      "I am a Data Scientist with a knack for turning raw data into actionable insights. With a background in machine learning and big data, I specialize in predictive modeling, data visualization, and statistical analysis to help businesses make data-driven decisions.",
    almaMater: "University of California, Berkeley (2016-2020)",
    email: "harry@example.com",
    tags: ["Data Science", "Machine Learning", "Python", "Big Data"],
    pfp: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 5,
    name: "Sophia",
    about:
      "I am a UI/UX Designer dedicated to crafting user-centered designs that improve digital experiences. With expertise in user research, wireframing, and prototyping, I aim to create intuitive interfaces that are both functional and aesthetically pleasing.",
    almaMater: "Rhode Island School of Design (2014-2018)",
    email: "sophia@example.com",
    tags: ["UI/UX Design", "Adobe XD", "Figma", "Prototyping"],
    pfp: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "Ethan",
    about:
      "As a Cybersecurity Specialist, I focus on protecting organizations from evolving threats by implementing robust security protocols and conducting regular vulnerability assessments. My goal is to safeguard critical data and ensure compliance with industry standards.",
    almaMater: "Georgia Institute of Technology (2013-2017)",
    email: "ethan@example.com",
    tags: ["Cybersecurity", "Ethical Hacking", "Network Security", "Compliance"],
    pfp: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];


const DirectoryC = () => {
  return (
    <div className="p-10 container">
      <h1 className="text-center font-bold text-3xl">Directory</h1>
      <br />
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search by name/phone/email..."
          className="border border-solid border-black w-[50%] p-2 rounded-lg"
        />
      </div>

      {/* <h2>Sort</h2>
    <button>Sort by Name</button>
    <button>Sort by Email</button> */}

      <div className="p-[1rem] grid grid-cols-3">
        {accounts.map((account) => (
          <KitchenSinkExample
            key={account.id}
            pfp={account.pfp}
            about={account.about}
            name={account.name}
            almaMater={account.almaMater}
            tags={account.tags}
            email={account.email}
          />
        ))}
      </div>
    </div>
  );
};

export default DirectoryC;
