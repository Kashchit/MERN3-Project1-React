import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateBlog from './pages/CreateBlog'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create' element={<CreateBlog/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
