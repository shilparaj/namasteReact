import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { useOnlineStatus } from './utility/useOnlineStatus';
import {UserContext} from './utility/userContext';



//import Example from "./example";

const App = () => {
  const onlineStatus = useOnlineStatus();
  const userInfo = useContext(UserContext);
   
 return (
 <>
    {onlineStatus ?<><Home/>  <p>abc</p></>: <p>you are offline kindly check your internet connection</p>}
 </>
 )
}
export default App;