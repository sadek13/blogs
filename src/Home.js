import BlogList from "./BlogList";
import useFetch from './UseFetch'

const Home = () => {
  
const{data:blogs,isPending,Error}=useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
        {Error && <div>error fetching</div>}
        {isPending && <div>Loading...</div>}
     {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}

      {/* <button onClick={()=>setName('luigi')}>Change Name</button>
      <p>{name}</p> */}
    </div>
  );
}
 
export default Home;