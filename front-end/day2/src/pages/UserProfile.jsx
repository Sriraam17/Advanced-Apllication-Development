import { useState } from "react";
// import { Link } from "react-router-dom";
import '../assets/css/profile.css'
import girl from '..//assets/images/girl like.jpg'
import Navbar from "./NavBar";
// import '../css/profile.css'
const UserProfile = () => {
    
    const [userData] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        // Add more user data fields as needed
    });

    //   const handleUserDataChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserData(prevUserData => ({
    //       ...prevUserData,
    //       [name]: value
    //     }));
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('User data submitted:', userData);
    //     // Add logic to submit user data to backend or perform other actions
    //   };
    
    return(
      <div>

          <Navbar/>
        <div className="badass">
        
      <h1 className="user-tittle">User Profile</h1>
      <div className="profile-container">
        {/* <br></br> */}
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        {/* <p><strong>Bio:</strong> {userData.bio}</p> */}
        {/* Add more fields as needed */}
      </div>
      <div className="profile-background">
        <img src={girl} alt="caroline"></img>
      </div>
      <div className="edit-button">
        <a href="/edituser">edit</a>
      </div>
    </div>
      </div>
    )
}
export default UserProfile;