import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {

    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const [ author, setAuthor ] = useState("Sherifdeen Ishola");
    const [ isPending, setIsPending ] = useState(false)
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true)

         fetch("http://localhost:5500/blogs", {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(blog)
         }).then(() => {
            setIsPending(false)
            // navigate.go(-1)
            navigate("/")
         })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                value={title} 
                required 
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <p>{author}</p>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Sherifdeen Ishola">Sherifdeen Ishola</option>
                    <option value="Mubarak Ishola">Mubarak Ishola</option>
                    <option value="Muhammad Ishola">Muhammad Ishola</option>
                    <option value="Ganiyu Ishola">Ganiyu Ishola</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button>Adding blog...</button> }
            </form>
        </div>
     );
}

export default Create;