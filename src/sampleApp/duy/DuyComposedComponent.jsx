import BasicButton from "../../components/BasicButton";
import React from "react";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function DuyComposedComponent() {
  const [login, setLogin] = React.useState(false);

  function handleLogin() {
    setLogin(!login);
  }

  return (
    <>
      <div>

        <div />
        <br />
        {/* <h1>Sample App: Duy - Compose Component </h1>
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-title">No items!</h2>
          </div>
          <div className="card-content">
            <BasicButton
              text="Increment"
              className="btn-duy"
              onClick={() => {}}
              type="button"
            />
          </div>
        </div> */}
        <h1>Sample App: Duy - Compose Component </h1>

        {login ? (
          <UserGreeting
            text="Welcome to"
            name="Duy"
            handleLogin={handleLogin}
          />
        ) : (
          <GuestGreeting
            text="Please sign up"
            handleLogin={handleLogin}
          />
        )}
      </div>
    </>
  );
}

export default DuyComposedComponent;
