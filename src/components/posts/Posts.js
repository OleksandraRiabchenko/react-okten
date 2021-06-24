import { useEffect, useState } from 'react';
import './Posts.css'

export default function Posts() {

    let [postsList, setPostsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(response => {
                setPostsList(response)
            })
    }, [])

    return (
        <div>
            {
                postsList.map((post, index) =>
                    <div className={'wrap'}>
                        {post.userId} - {post.id} - {post.title}
                        <p>{post.body}</p>
                    </div>)
            }

        </div>
    )
}

