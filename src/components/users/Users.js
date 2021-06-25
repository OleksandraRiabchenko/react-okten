import { useState, useEffect } from 'react';
import User from '../user/User'

export default function Users() {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(response => {
          setUsers(response);
        })
  }, [])

  return (
      <div>
        {
          users.map(value => <User item={value}/>)
        }
      </div>
  )
}
