import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Home = () => {

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {

    try {
      await logout();
      navigate('/')
      console.log('logggggout')
    }
    catch (e){
      console.log(e.message);
    }
  }
  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       navigate("/");
  //       console.log("Signed out successfully");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //       // ...
  //       console.log("uid", uid);
  //     } else {
  //       // User is signed out
  //       // ...
  //       console.log("user is logged out");
  //     }
  //   });
  // }, []);

  return (
    <section>
      HEEEEEEEEEEE{" "}
      <p> User Email: {user && user.email }</p>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </section>
  );
};

export default Home;
