import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Header'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Order from './components/Orders'
import './App.css';
import Home from './components/Home'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {


  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unSubscrib = auth.onAuthStateChanged((user) => {
      if(user){
        dispatch({
          type : 'SET_USER',
          user : user,
        })
      }
      else{
        dispatch({
          type : 'SET_USER',
          user : null,
        })
      }
    })
    return () => {
      unSubscrib();
    }
  }, [])
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/checkout'>
         <Nav />
         <Checkout/>
        </Route>
        <Route path='/orders'>
         <Nav />
         <Order/>
        </Route>
        <Route path='/login'>
         <Login/>
        </Route>
        <Route path='/'>
          <Nav />
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
