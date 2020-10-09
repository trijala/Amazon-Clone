import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase"
import {useStateValue} from './StateProvider';
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders'


const promise = loadStripe(
  "pk_test_51HPzK2DxfYMrUwHIt1tU2DpKbq1QG3XtApDxNIxxN7fGpFANecuwczKOIHQZY1OCoqhNqwwynn6gTh6uU6LDiX3a00tUUK3NhN"
);

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>", authUser)

      if (authUser){
        //user was logged in/just logged
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
          {/* Header */}
          <Route path="/checkout"> {/*default route*/}
            <Header />
            <Checkout />
          
          </Route>
          <Route path="/payment">
            <Header />
            
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header /> {/*default route at bottom always*/}
            <Home />
          </Route>
          {/* Home */}
       </Switch>
      </div>
    </Router>
  );
}

export default App;
