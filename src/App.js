import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from './users/Users'
import Posts from './posts/Posts'
import Comments from './comments/Comments'


export default function App() {
    return (
        <Router>
            <div>

                <div><Link to="/">home page</Link></div>
                <div><Link to="/users">users page</Link></div>
                <div><Link to="/posts">posts page</Link></div>
                <div><Link to="/comments">comments page</Link></div>

                <Switch>
                    <Route path={'/'} exact render={() => {
                    return <div>home</div>
                }}/>
                    {/*exact=true для жорсткого порівляння шляху(повна відповідність), використовується в коротких шляхах*/}

                    <Route path={'/users'} render={(props) => {
                        console.log(props)
                        return <Users {...props}/>
                    }}/>
                    {/*props зберігає history, але за умови що props прописаний в render,
                а не в компоненті Юзерс, або якщо передати через {...props}*/}

                    <Route path={'/posts'} component={Posts}/>
                    {/*props зберігає history*/}


                    <Route path={'/comments'}> <Comments/> </Route>
                    {/*props не зберігає history*/}

                    <Route path={'/comments'}> <Comments/> </Route>
                {/* Switch дозволяє "відсікти" повторювані Route  */}
                </Switch>

            </div>
        </Router>
    );
}
