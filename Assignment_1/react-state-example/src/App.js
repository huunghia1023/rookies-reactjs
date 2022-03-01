import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Home} from "./components/home/Home";
import {Navbar} from "./components/menu/Navbar";

function App() {
  const [bootcamp, setBootcamp] = useState("Rookies");
  const [username, setUsername] = useState("");
  function getUsername(e){
    setUsername(e);
  }
  return (
    <React.Fragment>
      {/* get name from child */}
      <Navbar getUsername={(e)=>getUsername(e)}/>
      <p>Username from child: {username}</p>
      <Home bootcamp={bootcamp}/>
      
    </React.Fragment>
  );
}

export default App;
