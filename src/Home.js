import Bloglist from './Bloglist';
import useFetch from "./useFetch"

const Home = () => {

    const { data, isPending, error } = useFetch("http://localhost:5500/blogs")

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div className='loading.'>Please wait...</div> }
            { data && <Bloglist blogs={data} title="All Blogs"/> }
        </div>
        
     );
}
 
export default Home;