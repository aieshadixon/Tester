import React from "react";
import './UserProfileCard.css';


function UserProfileCard(props) {
    const name = props.name;
    const age = props.age;
    const location = props.location;
    return (
    <div className="user">
            
            <h2 className="name">{name}</h2>
            <p className="age">{age}</p>
            <p className="location">{location}</p>
            <button>Follow</button>
        </div>
    );
  
}
export default UserProfileCard;