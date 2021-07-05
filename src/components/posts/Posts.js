import {useState, useEffect} from 'react';
import {getPosts} from '../../services/API';
import Post from '../post/Post';
import {Route, Switch} from 'react-router-dom';
import PostDetails from '../postDetails/PostDetails';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(val => setPosts([...val.data]))
    }, [])

    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
            <hr/>
            Details of the post
            <Switch>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Switch>


        </div>
    )
}
