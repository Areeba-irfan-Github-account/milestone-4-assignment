import React from 'react'
import getData from '../../../services/getData'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StaticSiteGeneration = async () => {
    const data = getData();
    const users = await data;
  return (
    <>
    <Navbar/>

    <h1 className='bg-teal-600 m-4 text-3xl font-bold p-8 flex justify-center items-center'>Static Site Generation</h1>

    <div className='m-6 p-2 text-2xl justify-start text-white font-bold font-serif'>
    {
        users.map((user,i )=>(
            <h2 key={i}>
                <Link href={`/ssg/${user.id}`}>{user.id}  {user.username}</Link>
            </h2>
        ))
    }
    </div>
    <Footer/>
    </>
  )
}

export default StaticSiteGeneration