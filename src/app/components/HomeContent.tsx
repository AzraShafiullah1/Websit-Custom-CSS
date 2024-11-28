import React from 'react'

const HomeContent = () => {
  return (
    <div>
      <section className='hero' style={{backgroundImage:"url(camera-background.jpg)"}}>
        <div>
           <h1 className='fade-in'>Find the Camera that Matches Your Vision</h1>
           <p>Explore our collection of high-performance cameras designed to capture every moment with unmatched clarity and precision</p> 
           <a href="http://localhost:3000/cameras"><button>View Products</button></a>
        </div>
      </section>
    </div>
  )
}

export default HomeContent
