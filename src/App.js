import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import Ben from './Ben/Ben.js'

const App = () => {
  return (
    <Router>
      <Route path="/Accountability" component={Home} />
      <Route path="/Ben" component={Ben} />
    </Router>
  );
}

export default App;
