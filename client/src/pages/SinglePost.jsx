import { useEffect, useState } from "react"
import PostDetails from "./PostDetails"
import { useParams } from "react-router-dom"
import axios from "axios"


const SinglePost = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3001/api/posts/${id}`).then(
            (resp) => {
                console.log(resp.data)
                setData(resp.data)
            }
            
        ).catch((err) => console.log(err))
    }, [])

    return (
        <div className="app">
            <ul>
            {data &&(
              <PostDetails title={data.title} id={data.id} postTitle={data.postTitle} userName={data.userName}/>
            )}
            </ul>
        </div>
    )
}

export default SinglePost;