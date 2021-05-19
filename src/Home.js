import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // let name = 'Mario';
    // const [name, setName] = useState('Mario'); 
    // const [age, setAge] = useState(5);
    

    // const [name, setName] = useState('mario'); 
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs') 

    

    return (
        <div className="Home">
            {error && <div>error</div>}
            {isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {/* <button onClick= {()=> setName('luigi')}>change name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;