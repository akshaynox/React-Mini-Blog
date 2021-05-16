import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // let name = 'Mario';
    // const [name, setName] = useState('Mario');
    // const [age, setAge] = useState(5);
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // const [name, setName] = useState('mario');  

    useEffect(()=> {
        // console.log("useEffect ran");
        // console.log(blogs);
        // console.log(name)
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then((data)=>{
                setBlogs(data);
                setIsPending(false)
            })
    }, [isPending])

    return (
        <div className="Home"> 
            {isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {/* <button onClick= {()=> setName('luigi')}>change name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;