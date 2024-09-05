import React from "react";
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

function KitchenSinkExample({ pfp, about, name, almaMater, phone, email }) {
  return (
    <div className="bg-red-600 p-5 grid-cols-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pfp} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{almaMater}</ListGroup.Item>
          <ListGroup.Item>{phone}</ListGroup.Item>
          <ListGroup.Item>{email}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KitchenSinkExample;
