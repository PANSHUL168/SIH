import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// <div className='flex shadow-lg border-solid items-center mt-4 justify-between bg-red-500 p-5'>
//     <div className='w-[25%] p-5 bg-green-600'>
//         <img src={image} alt="" className='border-solid border-black border- rounded-full w-full'/>
//     </div>
//     <div className='flex flex-col justify-center items-center bg-violet-400'>
//         <h1 className='font-bold'>{name}</h1>
//         <p>About: {about}</p>
//         <p>Alma mater: {almaMater}</p>
//         <div className='mr-2 ml-2 bg-blue-500 '>
//             <h2>Phone: {phone}</h2>
//             <h2>Email : {email}</h2>
//         </div>
//     </div>
// </div>

function KitchenSinkExample({ pfp, about, name, almaMater, tags, email }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="p-5">
      <Card className="shadow-lg hover:scale-110 transition-all duration-500 cursor-pointer hover:z-[10px]" style={{ width: "17rem" }}>
        <Card.Img variant="top" src={pfp} />
        <Card.Body className="bg-[#DBE2EF]">
          <Card.Title className="font-bold font-serif text-3xl w-full">
            {name}
          </Card.Title>
          {isVisible && (
            <Card.Text className="w-full text-md">{about}</Card.Text>
          )}
          <h2
            onClick={() => setIsVisible(!isVisible)}
            className="cursor-pointer text-sm"
          >
            {isVisible ? "Close" : "Read More..."}
          </h2>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="font-medium text-nowrap">{almaMater}</ListGroup.Item>
          <ListGroup.Item>
            <div className="flex gap-2 overflow-x-scroll overflow-y-hidden scrollbar-none">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="text-xs rounded-3xl p-1.5 bg-slate-600 text-nowrap text-white px-1.5 flex justify-center items-center"
                >
                  {tag}
                </p>
              ))}
            </div>
          </ListGroup.Item>
          <ListGroup.Item>{email}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="bg-[#112D4e] text-white border rounded-md p-1.5">
            <Card.Link href="#" className="font-bold">
              Connect+
            </Card.Link>
          </button>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default KitchenSinkExample;

