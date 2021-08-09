import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import NotFound from './NotFound'
import NoteDetails from './NoteDetails'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create'  component={Create} />
          <Route path='/note/:id'  component={NoteDetails} />
          <Route path='*'  component={NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
