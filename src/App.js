import './App.css';
import { useEffect, useState } from 'react';
import { getUsers, getUser, getPosts, getComments } from './services/API'
import Users from './components/users/Users';
import Comments from './components/comments/Comments';
import Post from './components/posts/Post'

export default function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => {
      return setUsers(value.data);
    })
  }, [])

  let [user, setUser] = useState(null);
  let [posts, setPosts] = useState(null)
  let [comments, setComments] = useState(null);

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
            posts &&
            <div>
              {posts.map(value => <Post key={value.id} item={value} showComments={showComments}/>)}
            </div>
          }
          <hr/>
          {
            comments &&
            <div>
              <h4>{'Comment on this post:'}</h4>
              {comments.map(value => <Comments key={value.id} items={value}/>)}
            </div>
          }
        </div>
      </div>
  );
}


