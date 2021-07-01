import './App.css'
import { useEffect, useState } from 'react';
import { getUsers, getUserPosts, getUser } from './services/Api';
import Users from './components/users/Users';
import Posts from './components/posts/Posts'
import Post from './components/post/Post';
import User from './components/user/User'

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => {
      console.log(value.data)
      return setUsers(value.data)
    })
  }, [])

  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(null);
  const showPost = (id) => {
    getUser(id).then(value => setUser(value.data))
    getUserPosts(id).then(value => setPosts(value.data))
  }

  return (
      <div className={'wrap'}>
        <Users className={'main'} items={users} showPost={showPost}/>
        <hr/>
        <div className={'posts'}>
          {
            user && <h3>{`${user.name} posts:`}</h3>
          }
          {
            posts && <div><Posts items={posts}/> </div>
          }
        </div>
      </div>

  );
}
