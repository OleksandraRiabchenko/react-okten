import './App.css';
import { useEffect, useState } from 'react';
import { getUsers, getUser, getPosts, getComments } from './services/API'
import Users from './components/users/Users';
import Comments from './components/comments/Comments';
import Posts from './components/posts/Posts'

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => {
      return setUsers(value.data);
    })
  }, [])

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null)
  const [comments, setComments] = useState(null);

  const showPosts = (id) => {
    getUser(id).then(value => setUser(value.data))
    getPosts(id).then(value => setPosts(value.data))
  }
  const showComments = (id) => {
    getComments(id).then(value => setComments(value.data))
  }

  return (
      <div className={'wrap'}>
        <Users items={users} showPosts={showPosts}/>

        <hr/>

        <div className={'posts'}>
          {
            user && <h3>{`${user.name} posts:`}</h3>
          }
          {
            posts && <div><Posts items={posts} showComments={showComments}/></div>
          }
          <hr/>
          {
            comments && <div><Comments items={comments}/></div>
          }
        </div>
      </div>
  );
}


