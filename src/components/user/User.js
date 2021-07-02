import { useState, useEffect } from 'react';
import {getPosts} from '../../services/user.service';
import Posts from '../posts/Posts'

export default function User({item}) {

   const [posts, setPosts] = useState([]);

  return (
      <div>
          {item.id} - {item.name}
          <button onClick={ ()=> {
              getPosts(item.id).then(value => setPosts(value.data))}
          }>show posts</button>

          {<Posts items={posts}/>}
      </div>
  )
}

