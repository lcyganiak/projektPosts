import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';
import EditPost from './router/EditPost/EditPost';
import Home from './router/Home/Home';
import ListPosts from './router/ListPosts/ListPosts';


function App() {

  return (
    <Router>
      <div className="App">
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
          <img src={logo} className="App-logo" alt="logo" />
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
