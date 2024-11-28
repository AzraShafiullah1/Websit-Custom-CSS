import React from 'react'
import Image from 'next/image'
const Cameras = () => {
  const cameraData = [
    {
      id: 1,
      name: "Canon Eos M50 kit Mark",
      price: 215000,
      image: '/canon.png'
},
    {
      id: 2,
      name: "Sony Alpha A7",
      price: 570000,
      image: '/sony.png'
  },  
    {
      id: 3,
      name: "GoPro Hero 11",
      price: 122000,
      image: '/GoPro.png'
  },
    {
      id: 4,
      name: "Dji Mini 3 Pro",
      price: 154999,
      image: '/Dji Mini.png'
    },
    {
      id: 5,
      name: "Nikon D5600 Kit",
      price: 179999,
      image:'/Nikon.png'
    },
    {
      id:6,
      name: "Fujifilm X-S10",
      price: 257000,
      image:'/Fujifilm.png',
    }
  ]

  return (
    <div>
      <div className='camera'>
        {cameraData.map((Camera) => (
          <div key={Camera.id} className='cameras-card'>
            <Image
             src={Camera.image} 
              alt={Camera.name} 
              width={300}  // Set the width of the image
              height={200} // Set the height of the image
              layout="intrinsic"   // This ensures responsive behavior
            />
            <h3>{Camera.name}</h3>
            <div className='price'>Rs {Camera.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cameras


