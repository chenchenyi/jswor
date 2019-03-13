import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/Home'
import A from './components/A'
class App extends Component {
  render() {
    return (
      <div className="App">
       
       <Router>
         <div>
         <Route path='/Home' component={Home}>
         
         </Route>
         <Route path='/A' component={A}>
         
         </Route>
         </div>
         
         </Router>
         </div>
    );
  }
}

export default App;
