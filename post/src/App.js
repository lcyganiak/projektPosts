import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import classes from './App.module.scss'
import EditPost from './router/EditPost/EditPost';
import Home from './router/Home/Home';
import ListPosts from './router/ListPosts/ListPosts';


function App() {

  return (
    <Router>
      <div className={classes.App}>
        <ul>
          <li>
            <Link to='/'>
            <span>Home</span>
            </Link>
          </li>
          <li>
          <Link to='/listPosts'>
            <span>listPosts</span>
          </Link>
          </li>
        </ul>
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path='/post/:id' component={EditPost}>
          </Route>

          <Route exact path='/listPosts' component={ListPosts}>
          </Route>
          <Route  exact path='/' component={Home}>
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
