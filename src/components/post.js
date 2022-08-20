import React from 'react';

const Post = () => {
    return (
        <div>
            <a href="/" class="inline-block text-black ml-4 mb-4"
            ><i class="fa-solid fa-arrow-left"></i> Back
            </a>
            <div class="mx-4">
                <div class="bg-green-50 border border-gray-200 rounded p-6 p-10">
                    <div
                        class="flex flex-col items-center justify-center text-center"
                    >
                        <img
                            class="w-48 mr-6 mb-6"
                            src="{{ asset('images/no-image.png')}}"
                            alt=""
                        />


                        <h3 class="text-2xl mb-2">{ }</h3>
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
                        <div class="border border-gray-200 w-full mb-6"></div>
                        <div>
                            <h3 class="text-3xl font-bold mb-4">
                                Problem Description
                            </h3>
                            <div class="text-lg space-y-6 w-13">
                                {'title'}

                            </div>
                            {/* <a href="{{'storage/'.$problem->p_file}}" class="underline text-green-500 hover:text-black">{{ $problem-> p_file ? 'Attatched File' : ''}}</a> */}
                            {/* @if ($problem->email != auth()->user()->email)
                        <a
                            href="mailto:{{$problem->email}}"
                            class="block bg-laravel text-white mt-6 py-2 rounded-xl hover:opacity-80"
                        ><i class="fa-solid fa-envelope"></i>
                            Contact</a
                        >
                        @endif */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;