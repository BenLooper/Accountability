import './App.css';
import { Route, Router } from 'react-router'
import history from './history'
import Home from './Home'
import Ben from './Ben/Ben.js'

const App = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route exact path="/Ben" component={Ben} />
    </Router>
  );
}

export default App;
