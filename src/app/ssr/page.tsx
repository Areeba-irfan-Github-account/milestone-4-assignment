import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

async function getPosts () {
    let postData = await fetch("https://jsonplaceholder.typicode.com/posts") 
    postData = await postData.json();
    return postData;
   }
   
   
   const Post = async() => {
     let posts = await getPosts();
     return (
       <>
       <Navbar/>
       <h2 className="bg-teal-600 text-3xl m-6  font-bold p-8 flex justify-center items-center">Fetch the data</h2>
       <div  className='m-6 p-2 text-xl justify-start text-white font-bold font-serif '>
       {
         posts.map((post) => <h4 key={post.id}>Post Title  {post.title} </h4> )
       }
       </div>
       <Footer/>
       </>
     )
   }
   
   export default Post