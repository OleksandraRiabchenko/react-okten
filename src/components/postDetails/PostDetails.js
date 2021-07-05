// import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getPost} from '../../services/API';

export default function PostDetails(props) {
    const {match: {params: {id}}} = props;
    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then(val => setPost({...val.data}))
    }, [id])

    return (
        <div>
            {JSON.stringify(post)}
        </div>
    )
}
