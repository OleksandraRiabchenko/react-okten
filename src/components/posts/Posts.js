import { useState, useEffect } from 'react';
import {getPosts} from '../../services/API'
import Post from '../post/Post'

export default function Posts() {
const [posts, setPosts] = useState([]);

useEffect(() => {
    getPosts().then(value => setPosts(value.data))
})

  return (
      <div>
          {posts.map(value => <Post key={value.id} item={value}/> )}
      </div>
  )
}

