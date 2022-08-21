import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';

const Post = () => {
    const { http } = AuthUser();

    let [post, setPost] = useState({});
    let [tags, setTags] = useState([]);
    let [pending, setPending] = useState(true);
    const [inputs, setInputs] = useState({});
    const [comment, setComment] = useState([]);
    const [text, setText] = useState();

    const { id } = useParams();



    const fetchPosts = () => {
        http.get('/posts/all').then((res) => {
            console.log(res.data);
            let post1 = res.data.find(post => post.id = id);
            setPost(post1);
            console.log(post);
            let tags1 = post1.tags.split(',');
            setTags(tags1);
            setPending(false);
        }, (err) => {
            console.log(err);
        });
    }

    const fetchComment = () => {
        http.get('/comment/' + id).then(res => {
            setComment(res.data);
        });
    }
    useEffect(() => {
        fetchPosts();
        fetchComment();
    }, [id]);
    const submitForm = () => {
        /* API CALL */
        let comment = document.querySelector('#comment');

        http.post('/addComment/' + post.id, { text: text, problem_id: post.id }).then((res) => {
            console.log(res);
        }, err => {
            console.log(err);
        })
        http.get('/comment/' + post.id).then(res => {
            setComment(res.data);
        });
        comment.value = '';

    }


    return (

        <div class="bg-green-50 border border-gray-200 rounded p-6 p-10">
            <Link to="/dashboard" class="inline-block text-black ml-4 mb-4"
            ><i class="fa-solid fa-arrow-left"></i> Back
            </Link>
            {pending && <h3 className='text-center'>Loading...</h3>}
            {post && (<>
                <div>
                    <div
                        class="flex flex-col items-center justify-center text-center"
                    >
                        <img
                            class="w-48 mr-6 mb-6"
                            src="http://localhost:8000/images/no-image.png"
                            alt=""
                        />


                        <h3 class="text-2xl mb-2">{post.id}</h3>
                        <ul className="flex p-0">
                            {tags.map(tag => {
                                return (
                                    <li
                                        className="flex items-center justify-center bg-black text-white rounded-xl pt-2 px-3 mr-2 text-xs mb-3 mt-3"
                                    >
                                        <p>{tag ? tag : 'loading'}</p>
                                    </li>
                                )
                            })}


                        </ul>
                        <div class="border border-gray-200 w-full mb-6"></div>
                        <div>
                            <h3 class="text-3xl font-bold mb-4">
                                Problem Description
                            </h3>
                            <div class="text-lg space-y-6 w-13">
                                {post ? post.description : 'loading'}

                            </div>

                        </div>
                    </div>
                </div>
            </>)}
            <div className="md:flex">
                <div className="w-100 p-2 mt-2">
                    <ul>
                        {comment.map((comment, index) => (
                            <tr key={comment.id}>
                                <li style={{ width: '1150px' }} className="mt-2 flex justify-between items-center bg-white hover:shadow-lg rounded cursor-pointer transition mb-10">
                                    <div className="flex ml-2">
                                        <img className="rounded-full" alt='error' width="85" height="40" src="/images/user.png" />

                                        <div className="flex flex-col ml-2">
                                            <span className="text-2xl text-green-700 mb-2"><i className="fa-regular fa-comments mr-2"></i>
                                                {comment.user.name}
                                            </span>
                                            <span className="font-serif text-2xl text-slate-900">
                                                {comment.text}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </tr>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-full bg-slate-200 shadow-md">
                <div className="mb-2 p-2">
                    <h4 for="comment" classname="text-lg text-gray-600">Add a comment</h4>
                    <textarea className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                        name="text" placeholder="" id="comment"
                        onChange={e => setText(e.target.value)}></textarea>
                </div>
                <button type="submit" onClick={submitForm} className="px-3 py-2 ml-2 text-sm text-blue-100 bg-success rounded">Comment</button>
            </div>
        </div>
    );
};

export default Post;