import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import Posts from './posts';

export default function Dashboard() {
    const { http } = AuthUser();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        http.get('/posts/all').then((res) => {
            console.log(res.data);
            setPosts(res.data);
        }, (err) => {
            console.log(err);
        });
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
            <h1 className='mb-4 mt-4'>Dashboard page</h1>
            {renderElement()}
        </div>
    )
}