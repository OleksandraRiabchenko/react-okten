import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/users'}>user page</Link></div>
                <div><Link to={'/posts'}>post page</Link></div>
                <div><Link to={'/comments'}>comment page</Link></div>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>
            </div>
        </Router>
    );
}

