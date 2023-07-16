import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { authu } from './firebase';
import { StateContext } from './StateProvider';
import Payment from './Payment';

function App(){
  const { setUser } = useContext(StateContext);

  useEffect(() => {
    authu.onAuthStateChanged(authUser => {
      console.log("The user is -> ", authUser);

      if(authUser){
        setUser(authUser)
      } 
      else {
        setUser(null);
      }

    })
  }, [])

  return(
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/checkout' element={<Checkout/>}>
            Checkout
          </Route>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route path='/payment' element={<Payment />}/>
          <Route path='*' element={<NotFound /> }>
            Page Not Found
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function NotFound(){
  return(
    <h1>Not Found</h1>
  );
}

export default App;
