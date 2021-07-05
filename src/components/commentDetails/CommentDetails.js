import {useState, useEffect} from 'react';
import {getComment} from '../../services/API';

export default function CommentDetails(props) {
    const {location: {state}} = props;

    const [comment, setComments] = useState({});
    useEffect(() => {
        getComment(state.id).then(value => setComments({...value.data}))
    }, [state])


    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    )
}
