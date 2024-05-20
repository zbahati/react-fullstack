import axios from "axios"
import { useEffect, useState } from "react"

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
          <li key={post.id}>
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="body">
              <p>{post.postText}</p>
            </div>
            <div className="footer">
              <p>{post.userName}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;