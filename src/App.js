import './App.css'
import { useEffect, useState } from 'react';
import { getUsers, getUserPosts, getUser } from './services/Api';
import Users from './components/users/Users';
import Post from './components/post/Post';
import User from './components/user/User'

export default function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => {
      console.log(value.data)
      return setUsers(value.data)
    })
  }, [])

  let [user, setUser] = useState(null)
  let [posts, setPosts] = useState(null);
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
            user && <h3>{`${JSON.stringify(user.name)} posts:`}</h3>
          }
          {
            posts && <div>{posts.map(value => <Post key={value.id} item={value}/>)} </div>
          }
        </div>
      </div>

  );
}
