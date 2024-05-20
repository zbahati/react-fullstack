import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost.jsx'
import Navbar from './pages/Navbar.jsx'

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/create-post'  element={<CreatePost />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
