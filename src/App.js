import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import Ben from './Ben/Ben.js'
import New from './New/New.js'

const App = () => {
  return (
    <Router>
      <Route path="/Accountability" component={Home} />
      <Route path="/Ben" component={Ben} />
      <Route path='/New' component={New}/>
    </Router>
  );
}

export default App;
