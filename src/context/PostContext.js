import React from 'react';
import { useEffect, useState } from 'react';
import AuthUser from '../components/AuthUser';


export const PostContext = React.createContext({});

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const { http } = AuthUser();
    useEffect(() => {
        http.get('/posts/all').then((res) => {
            console.log(res.data);
            setPosts(res.data);

        }, (err) => {
            console.log(err);
        });
    }, []
    );

    return (
        <PostContext.Provider value={[posts]}>
            {props.children}
        </PostContext.Provider>
    );


};