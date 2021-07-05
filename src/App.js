import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from './components/users/Users';

export default function App() {
    return (
        <Router>
            <div>

                <Link to={'/users'}>users page</Link>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                </Switch>
            </div>
        </Router>
    );
}

