import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

function Home(){
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async()=>{
        const response = await axios.get("http://localhost:3000/blog")
        setBlogs(response.data.data)
    }
    useEffect(()=>{
        fetchBlogs()
    },[])
    console.log(blogs)

    return(
        <>
    <Navbar />
      <div className='flex flex-wrap'>
        {
            blogs.map(function(blog){       //mapping the array
                return(
                    <Card blog = {blog}/>
                )
            })
        }
      
      
      </div>
        <h1>Home page</h1>
        </>
    )
}

export default Home 