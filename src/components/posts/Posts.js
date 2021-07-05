import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getUserPosts} from '../../services/userServices';
import Post from '../post/Post';

export default function Posts(props) {
    const {id} = useParams();

    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        getUserPosts(id).then(val => setPosts(val.data))
    }, [id])

  return (
      <div>
          {posts.map(value => <Post key={value.id} item={value}/>)}
      </div>
  )
}
