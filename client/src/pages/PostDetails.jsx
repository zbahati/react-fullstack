import {Link} from 'react-router-dom'
const PostDetails = ({id, title, postTitle, userName }) => {
    return (
        <li key={id}>
            <Link to={`${id}`}>
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="body">
                    <p>{postTitle}</p>
                </div>
                <div className="footer">
                    <p>{userName}</p>
                </div>
            </Link>
        </li>
    )

}

export default PostDetails;