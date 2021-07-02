import '../../App.css'
import { useState, useEffect } from 'react';
import {getUserPosts} from '../../services/user.service';
import UserPosts from '../userPosts/UserPosts'

export default function User({item}) {

   const [posts, setPosts] = useState([]);

  return (
      <div className={'userWrap'}>
          {item.id} - {item.name}
          <button className={'button'}  onClick={ ()=> {
              getUserPosts(item.id).then(value => setPosts(value.data))}
          }>show posts</button>

          {<UserPosts items={posts}/>}
      </div>
  )
}

