import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white py-2'>
      <div className='logo'>
        <span className='text-bold text-xl mx-8' >iTask</span>
      </div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold translate-all '>Home</li>
        <li className='cursor-pointer hover:font-bold translate-all '>about</li>
      </ul>
    </nav>
  )
}

export default Navbar
