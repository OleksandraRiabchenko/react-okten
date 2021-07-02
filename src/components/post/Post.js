import { useState} from 'react';
import {getComments} from '../../services/comment.service'


export default function Post({item}) {
    const [comments, setComments] = useState([]);

  return (
      <div>
          {item.id}-{item.title}
          <button onClick={ () => {
              getComments(item.id).then(value => setComments(value.data))
          }}>show comments</button>

          {<Comments items={comments}/>}
      </div>
  )
}
