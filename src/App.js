import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';



export default function App() {
    return (
        <Router>
            <div>

                <div><Link to={'/users'}>show users</Link></div>
                <div><Link to={'/posts'}>show posts</Link></div>

                <Switch>
                    <Route path={'/users'} render={() => {return <Users/>}}/>
                    <Route path={'/posts'}> <Posts/> </Route>
                </Switch>

            </div>
        </Router>

    );
}


