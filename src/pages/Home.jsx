import axios from 'axios'
import { useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

function Home(){
    const fetchBlogs = async()=>{
        const response = await axios.get("http://localhost:3000/blog")
    }
    useEffect(()=>{
        fetchBlogs()
    },[])

    return(
        <>
    <Navbar />
      <div className='flex flex-wrap'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
        <h1>Home page</h1>
        </>
    )
}

export default Home 