import {useEffect, useState} from 'react';
import {getUsers, getUserPosts} from './services/Api';
import Users from './components/users/Users';
import Post from './components/post/Post'

export default function App() {
    // let [userPosts, setUserPosts] = useState(null)
    // const showPosts = (id) => {
    //     console.log(id);
    //     getUserPosts(id).then(value => setUserPosts([...value.data]))
    //     getUserPosts(id).then(value => console.log(value.data))
    // }

    let [users, setUsers] = useState([]);
    useEffect (() => {
        getUsers().then(value =>
             setUsers([...value.data]))
    }, [])


    return (
        <div>
            <Users items={users} showPosts={showPosts}/>
            {
                // <Post/> && <Post/>
            }
            <Post/>
        </div>
    );
}


