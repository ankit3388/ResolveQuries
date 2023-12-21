import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Question from "./components/Add-question/Question";
import StackOverflow from "./components/StackOverflow";
import ViewQuestion from "./components/ViewQuestion";
import Auth from"./components/Auth";
import { useDispatch,useSelector} from 'react-redux';
import {login,selectUser,logout} from "./features/userSlice";
import { auth } from './firebase';
import { useEffect } from 'react';
import Protected from './Protected';
import MainQuestion from './components/ViewQuestion/MainQuestion';
import { Stack } from '@mui/material';
function App() {
  const user= useSelector(selectUser);
  const dispatch =useDispatch();

  useEffect (()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          displayName:authUser.displayName,
          email:authUser.email
        }))
      }
      else
      {
        dispatch(logout())
      }
    })
  }
  , 
  [dispatch]
  )
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );


// Protected => check login hai ya nhi, uske baad aagey jaaney deta hai.


  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            {/* <Route path={'/'} element={<Protected Component = {StackOverflow} user={user} />}/>  */}
            <Route path={'/login'} ><Auth/></Route>
            <Route exact path ='/add-question' ><Protected Component={Question} user={user}/></Route>
            <Route exact path ='/'><Protected Component={StackOverflow} user={user}/></Route>
            <Route exact path="/question" element={<ViewQuestion/>}/>
          </Switch>
      </Router>
    </div>
  )
}
export default App;
