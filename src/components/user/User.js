import { useState, useEffect } from 'react';
import Comments from '../comments/Comments'

export default function User({ item }) {

  let [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/' + item.id + '/comments')
        .then(value => value.json())
        .then(response => {
          setComments(response);
        })
  }, [])

  return (
      <div>
        -------------------{item.name}----------------------
        <Comments items={comments}/>
        <hr/>
      </div>
  )
}
