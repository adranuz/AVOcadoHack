import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/product'>Product</Link>
      </menu>
    </nav>
  )
}

export default Navbar