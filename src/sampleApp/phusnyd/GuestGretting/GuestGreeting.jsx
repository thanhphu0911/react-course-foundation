import React from 'react';
import BasicButton from "../../../components/BasicButton";

import AdminGreeting from "./AdminGreeting";
import UserGreeting from "./UserGreeting";

function GuestGreeting() {
  const [isLogin, setIsLogin] = React.useState(false);

  function handleLogIn() {
    // setIsLogin(!isLogin);
    setIsLogin(prevState => !prevState); // updater function
  }

  return (
    <>
      <h1>Sample App: Phu GuestGreeting</h1>
      {isLogin ? (
        <AdminGreeting text="Welcome to" name="Phu" handleLogIn={handleLogIn} />
      ) : (
        <UserGreeting text="Please sign in" name="Phu" handleLogIn={handleLogIn} />

      )}
      <BasicButton text={`${isLogin ? 'Logout' : 'Login'}`} className="signInBtn" onClick={handleLogIn} />
    </>
  );
}

export default GuestGreeting;
