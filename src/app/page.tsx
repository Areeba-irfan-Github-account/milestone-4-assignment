import Link from "next/link"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const page = () => {
  return (
    <>
    <Navbar/>
      <h1 className="bg-rose-600  m-8 text-4xl font-bold text-white p-9 flex justify-center items-center">Advanced Topic of the next.js</h1>
      <div className="flex justify-center m-24 p-3 " >
      <div className="m-6  inline-block px-8 py-4 text-white bg-blue-500 hover:bg-blue-700 rounded-lg">
        <Link href="/ssr">SSR </Link>
      </div>
      <div className="m-6 inline-block px-8 py-4 text-white bg-blue-500 hover:bg-blue-700 rounded-lg">
        <Link href="/ssg">SSG </Link>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default page