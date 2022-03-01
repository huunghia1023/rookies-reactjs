import React, { useState } from "react";
import "./Navbar.css";

export function Navbar(props) {
    const [username, setUsername] = useState("Nghia");
    return (
        <React.Fragment>
            <nav id='navbar'>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li>About</li></a>
                </ul>

                <div className="nav-details">
                    <p className="nav-username"> {username} </p>
                </div>
            </nav>
            <input type="text" id="usernameInput"></input>
            <button onClick={()=>setUsername(document.getElementById("usernameInput").value)}>Change Username</button>
            <button onClick={()=>{props.getUsername(username)}}>Send name to parent</button>
        </React.Fragment>
    );
}