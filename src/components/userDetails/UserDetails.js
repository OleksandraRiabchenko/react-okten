import {useParams} from 'react-router-dom';
import {getUser} from '../../services/API';
import {useState, useEffect} from 'react';


export default function UserDetails(props) {
    const {id} = useParams()
    // const {match: {params: {id}}} = props; те саме

    const [user, setUser] = useState({});
    useEffect(() => {
        getUser(id).then(val => setUser({...val.data}))
    }, [id])

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}
