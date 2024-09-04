import React from 'react'

const Card = ({image,name,about,almaMater,phone,email}) => {
  return (
    <div className='flex justify-center shadow-lg border-solid items-center mt-4'>
        <div className=''>
            <img src={image} alt="" className='scale-50 border-solid border-black border- rounded-full'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold'>{name}</h1>
            <p>About: {about}</p>
            <p>Alma mater: {almaMater}</p>
            <div className='mr-2 ml-2'>
                Phone: {phone}
                <br />
                Email: {email}
            </div>
        </div>
    </div>
  )
}

export default Card