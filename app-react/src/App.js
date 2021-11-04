import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Student from './pages/Studen';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Student}></Route>
        <Route exact path="/add-student" component={AddStudent}></Route>
        <Route exact path="/edit-student/:id" component={EditStudent}></Route>
      </Switch>
    </Router>
  );
}

export default App;
