import {useEffect, useState} from "react";
import {getUsers} from '../../services/userServices';
import User from '../user/User'
import {Route, Switch} from 'react-router-dom';
import Posts from '../posts/Posts';

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <hr/>
            User post:
            <Switch>
                <Route path={'/users/:id/posts'} component={Posts}/>
            </Switch>
        </div>
    )
}
