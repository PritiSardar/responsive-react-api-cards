import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-green-600  font-mono text-white font-bold text-xl h-14 items-center p-3 sm:text-2xl flex justify-evenly sm:justify-between '>
    <nav >
      <ul className='flex gap-5 sm:gap-8'>
      <li className='hover: cursor-pointer hover:text-black hover:bg-green-700 hover:rounded-lg px-1 sm:px-3'>Home</li>
      <li className='hover: cursor-pointer hover:text-black hover:bg-green-700 hover:rounded-lg px-1 sm:px-3'>About</li>
      <li className='hover: cursor-pointer hover:text-black hover:bg-green-700 hover:rounded-lg px-1 sm:px-3'>Contact</li>
      </ul>
    </nav>
    <button className='bg-green-800 rounded-md text-sm sm:text-xl px-1 sm:px-3 py-1 hover: cursor-pointer hover:text-black hover:bg-green-700'>Sign In</button>
    </div>
  )
}

export default Navbar
