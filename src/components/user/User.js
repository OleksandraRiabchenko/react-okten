import {useEffect, useState} from 'react'
import Posts from '../posts/Posts'

export default function User({item}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + item.id + '/posts')
            .then(value => value.json())
            .then(response => {
                setPosts(response);
            })
    }, [])

    return (
        <div>
            *******************{item.id} - {item.name}*********************
            <Posts items={posts}/>
            <hr/>
        </div>
    )
}