import './App.css';
import { Route, Router } from 'react-router'
import history from './history'
import Home from './Home'
import Ben from './Ben/Ben.js'

const App = () => {
  return (
    <Router history={history}>
      <Route exact path="process.env.PUBLIC_URL + '/'" component={Home} />
      <Route exact path='process.env.PUBLIC_URL + "/Ben"' component={Ben} />
    </Router>
  );
}

export default App;
