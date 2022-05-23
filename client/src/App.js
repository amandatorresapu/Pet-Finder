import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

import AllPets from './components/AllPets';
import Form from './components/Form';
import OnePet from './components/OnePet'
import EditPets from './components/EditPets';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Pets Shelter</h1>
      

      <Switch>
      <Route exact path ="/form">
            <Form></Form>
            </Route>
        <Route exact path="/">
          <Link to='/form'>Add new Pet</Link>
         <AllPets></AllPets> 
        </Route>
        <Route exact path="/redbelt/:_id">
         <OnePet></OnePet> 
        </Route>
        <Route exact path="/edit/:_id">
            <EditPets></EditPets>
           
           
          </Route>

      </Switch>
      
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
