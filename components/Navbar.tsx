import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center bg-green-200  p-4 py-3'>
        <Link className=' font-bold text-2xl text-green-950 ' href={'/'}>Crud-App</Link>
        <Link className='  p-2 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500 ' href={'/addTopic'}>Add New Topic</Link>
    </nav>
  )
}

export default Navbar
  