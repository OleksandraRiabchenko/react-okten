import Post from '../post/Post';
import { useState, useEffect } from 'react';
import {getPosts} from '../../services/comment.service'

export default function Posts({items}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, [])

  return (
      <div>
          {items.map(value => <Post key={value.id} item={value}/>)}

          {posts.map(value => <Post key={value.id} item={value}/>)}
      </div>
  )
}
