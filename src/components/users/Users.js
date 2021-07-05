import {useEffect, useState} from "react";
import {getUsers} from '../../services/API';
import User from '../user/User';
import {Route, Switch} from 'react-router-dom';
import UserDetails from '../userDetails/UserDetails';

export default function Users() {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        getUsers().then(val => setUsersList(val.data))
    }, []);

    return (
        <div>
            {
                usersList.map(value => <User key={value.id} item={value}/>)
            }
            <hr/>
            Details of user
            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>

        </div>
    )
}
