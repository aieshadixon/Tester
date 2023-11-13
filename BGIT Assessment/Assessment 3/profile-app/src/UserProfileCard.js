import React from "react";
import './UserProfileCard.css';

const UserProfileCard = () => {
    return (
      <div className="user">
        <h2 className="name">John Smith</h2>
        <p className="age">26</p>
        <p className="location">London</p>
        <button onClick>Follow</button>
      </div>
    );
}



export default UserProfileCard;