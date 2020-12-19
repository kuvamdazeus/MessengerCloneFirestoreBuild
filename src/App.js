import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Nav from './Nav';
import Room from './Room';
import Home from './Home';

function App() {

  return (
    <Router>

      <div className="app">
        <Nav />
        {/* Add a theme switch button */}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/room/:id" component={Room} />
          <Route exact path="/home" component={Home} />
        </Switch>

      </div>

    </Router>
  );
}

export default App;
