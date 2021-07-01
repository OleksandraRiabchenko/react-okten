import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';

export default function App() {
    return (
        <div>
            <Router>
                <div><Link to="/users">users page </Link></div>
                <div><Link to="/posts">posts page</Link></div>
                <div><Link to="/comments">comments page </Link></div>

                <Switch>
                    <Route path={'/users'}><Users/></Route>
                    <Route path={'/posts'} render={() => <Posts/>}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>
            </Router>

        </div>
    );
}


