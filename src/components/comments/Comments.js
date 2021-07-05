import {useState, useEffect} from 'react';
import {getComments} from '../../services/API';
import Comment from '../comment/Comment';
import {Route, Switch} from 'react-router-dom';
import CommentDetails from '../commentDetails/CommentDetails';


export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value.data]))
    }, [])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}
            <hr/>
            <p>Comment information:</p>
            <Switch>
                <Route path={'/comments/:id'} component={CommentDetails}/>
            </Switch>

        </div>
    )
}
