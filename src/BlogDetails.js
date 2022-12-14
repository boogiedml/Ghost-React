import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch("http://localhost:5500/blogs/" + id)
    const navigate = useNavigate()

    const handleDelete = (e) => {
        fetch(`http://localhost:5500/blogs/${id}`, {
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Please wait...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;