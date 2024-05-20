import { useEffect, useState } from "react"
import axios from 'axios';

function App() {
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
              <p>{post.postTitle}</p>
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

export default App
