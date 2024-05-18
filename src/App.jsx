/*
function component react
react function component
component react
*/
import { useState } from "react";
import ReactJSX from "./ReactJSX";
import Props from "./Props";
import State from "./State";
import Component from "./Component";
import TonyComposeComponent from "./sampleApp/tony/TonyComposeComponent";
import HandleEvent from "./HandleEvent";
import PhuComposedComponent from "./sampleApp/phusnyd/PhuComposedComponent";
import SampleAppHeader from "./SampleAppHeader";
import ConditionalRendering from "./ConditionalRendering";
import DuyComposedComponent from "./sampleApp/duy/DuyComposedComponent";
import GuestGreeting from "./GuestGreetingApp/phusnyd/GuestGreeting";
import UserGreeting from "./GuestGreetingApp/phusnyd/UserGreeting";

function App() {
  const [logIn, setLogIn] = useState(false);

  function handleLogIn() {
    setLogIn(!logIn);
  }
  // JSX
  return (
    <>
      <ReactJSX />
      <br />
      <Props />

      <br />
      <State />

      <br />
      <Component />

      <br />
      <TonyComposeComponent />

      <br />
      <HandleEvent />

      <br />
      <SampleAppHeader devName="phusnyd" />
      <PhuComposedComponent />
      <PhuComposedComponent />
      <DuyComposedComponent />
      <br />

      <ConditionalRendering />

      <br />
      {logIn ? (
        <UserGreeting text="Welcome to" name="Phu" handleLogIn={handleLogIn} />
      ) : (
        <GuestGreeting text="Please sign in" handleLogIn={handleLogIn} />
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
