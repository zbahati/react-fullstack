import axios from "axios"
import { useEffect, useState } from "react"
import PostDetails from "./PostDetails"

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/api/posts").then(
      (response) => setData(response.data)
    )
  }, [])
  return (
    <div className="app">

      <ul>
        {data && data.map((post) => (
          <PostDetails key={post.id} title={post.title} id={post.id} postTitle={post.postTitle} userName={post.userName}/>
        ))}
      </ul>
    </div>
  )
}

export default Home;