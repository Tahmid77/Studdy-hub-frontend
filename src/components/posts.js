import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ post }) => {
    let tags = post.tags.split(',');
    return (
        <div className="flex bg-green-50 border border-gray-200 rounded p-6">
            <img
                className="hidden w-48 mr-6 md:block"
                src="no-image.png"
                alt=""
            />
            <div>
                <h3 className="text-2xl">
                    <Link to={`/problem/details/${post.id}`}>{post.title}</Link>
                </h3>
                <ul className="flex p-0">
                    {tags.map(tag => {
                        return (
                            <li
                                className="flex items-center justify-center bg-black text-white rounded-xl pt-2 px-3 mr-2 text-xs mb-3 mt-3"
                            >
                                <p>{tag}</p>
                            </li>
                        )
                    })}


                </ul>
            </div>
        </div>
    );
};

export default Posts;