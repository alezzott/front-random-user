import React from "react";

const Posts = ({ posts, loading }: any) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <ul>
                {posts.map((post: any) => (
                    <li
                        key={post.id}
                        className='text-gray-700 font-semibold text-xl mb-2 border p-2'
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;