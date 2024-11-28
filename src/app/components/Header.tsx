import React from 'react'
import Link  from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>NSK Online Shopping</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link> 
            <Link href="/cameras">Cameras</Link>
            <Link href="/contact">Contact</Link>
            <AiOutlineShoppingCart style={{color:'white', fontSize:'20px'}}/>
        </nav>
    </header>
  )
}

export default Header