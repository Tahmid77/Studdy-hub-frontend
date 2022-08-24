import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import Posts from './posts';

export default function Dashboard() {
    const { http } = AuthUser();
    const [posts, setPosts] = useState([]);
    const [listing, setListing] = useState([]);
    const [search1, setSearch1] = useState([]);


    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        http.get('/posts/all').then((res) => {
            console.log(res.data);
            setPosts(res.data);
            setSearch1(res.data);
        }, (err) => {
            console.log(err);
        });
    }
    const search = (e) => {
        let temp = [...search1];

        let kw = e.target.value;
        if (kw != '') {
            let temp1 = posts.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(kw)));
            setPosts(temp1);
        } else {
            setPosts(temp);
        }
    }

    function renderElement() {

        if (posts) {
            return <div class="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0 mx-4">

                {posts.map(post => <Posts key={post.id} post={post} />)}
            </div>
        } else {
            return <h1>Loading.....</h1>
        }

    }

    return (
        <div>
            <input onChange={(e) => search(e)} className="w-100 h-100 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1" placeholder="Search" />
            <h1 className='mb-4 mt-4'>Dashboard page</h1>
            {renderElement()}
        </div>
    )
}