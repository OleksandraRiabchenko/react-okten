import { useEffect, useState } from "react";
import User from '../user/User';
import { Route, Switch} from 'react-router-dom';
import UserDetails from '../userDetails/UserDetails';
import UserDetails2 from '../userDetails2/UserDetails2';

export default function Users() {
    let [usersList, setUsersList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                setUsersList([...response]);
            });
    }, []);

    return(
            <div>
                {
                    usersList.map(value => <User key={value.id} item={value}/>)
                }
                <Switch>
                    {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
                {/* :id дає змогу динамічно відхоплювати змінну (:дві крапки обов'язкові)
                 /users/:1, /users/:2, /users/:7 і т.д. */}

                    <Route path={'/users/:id'} component={UserDetails2}/>
                </Switch>

            </div>



    )
}
