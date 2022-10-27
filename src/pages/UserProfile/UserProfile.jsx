import React from "react";
import "./UserProfile.css";

const XMLHttpRequest = require("xhr2");
const xhttp = new XMLHttpRequest();

const Profile = () => {
    const query = new URLSearchParams(window.location.search);
    const name = query.get("name");
    const picture =  query.get("picture") ;
    return(
        <div className="overall">
        <div className="user">
        <p className="username">{name}</p>
        <img src={picture} alt="profile"/>
        </div>
        <div className="options">
            <div className="item">
                <p>Details</p>
                <p> {">"} </p>
            </div>
            <div className="item">
                <p>Account Details</p>
                <p> {">"} </p>
            </div>
            <div className="item">
                <p>Your Bookings</p>
                <p> {">"} </p>
            </div>
        </div>
        </div>
    )
}

export default Profile;