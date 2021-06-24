import {useState, useEffect} from 'react';

export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(response => {
                setComments(response);
            })
    }, [])


    return (
        <div>
            {
                comments.map(comment =>
                    <div>
                        {comment.id} - {comment.name} from {comment.email}
                        <p>comment.body</p>
                    </div>)
            }
        </div>
    )
}