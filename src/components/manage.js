import React from 'react';
import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import { Routes, Route, Link } from 'react-router-dom';


const Manage = () => {
    const { http } = AuthUser();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        http.get('/user/posts').then((res) => {
            console.log(res.data);
            setPosts(res.data);
        }, (err) => {
            console.log(err);
        });

    }


    const deleteListing = (id) => {
        http.delete('/user/posts/' + id).then(res => {
            fetchPosts();
        })
    }

    return (
        <div class="bg-green-50 border border-gray-200 rounded p-6 p-10">
            <header>
                <h1
                    class="text-3xl text-center font-bold my-6 uppercase"
                >
                    Manage Gigs
                </h1>
            </header>

            {posts === [] && <p>No Posts</p>}

            <table class="w-full table-auto rounded-sm">
                <tbody>
                    {posts ? (
                        posts.map(post => {
                            return (
                                <tr class="border-gray-300">
                                    <td
                                        class="px-4 py-8 border-t border-b border-gray-300 text-lg"
                                    >
                                        <p >
                                            {post.title}
                                        </p>
                                    </td>
                                    <td
                                        class="px-4 py-8 border-t border-b border-gray-300 text-lg"
                                    >
                                        <Link
                                            to={`/problem/edit/${post.id}`}
                                            class="text-blue-400 px-6 py-2 rounded-xl"
                                        ><i
                                            class="fa-solid fa-pen-to-square"
                                        ></i>
                                            Edit</Link>
                                    </td>
                                    <td
                                        class="px-4 py-8 border-t border-b border-gray-300 text-lg"
                                    >
                                        <button type="button" className="btn btn-danger"
                                            onClick={() => deleteListing(post.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : <p>No problems</p>}
                </tbody>
            </table>
        </div>
    );
};

export default Manage;