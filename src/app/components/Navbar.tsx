import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-lime-600 p-2s flex justify-between '>
            <h2 className='text-3xl p-4 font-bold font-serif'>Topic Rendering</h2>
            <div className='flex space-x-5 p-5 '>
                <Link className='hover:bg-lime-700 ' href='/'>Home</Link>
                <Link className='hover:bg-lime-700 ' href='/ssr'>SSR</Link>
                <Link className='hover:bg-lime-700 ' href='/ssg'>SSG</Link>
            </div>
        </div>
    )
}

export default Navbar