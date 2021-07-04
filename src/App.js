import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from './components/users/Users';
// import UserDetails from './components/userDetails/UserDetails';

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>
                <Switch>
                    <Route  path={'/users'} component={Users}/>
                    {/*щоб правильно працювало потрібен exact, або поміняти роути місцями,
                    щоб короткий запит був нижче довгого */}
                    {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
                </Switch>
            </div>
        </Router>
    );
}


