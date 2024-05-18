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
import GuestGreeting from "./sampleApp/phusnyd/GuestGretting/GuestGreeting"

function App() {
 
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
      <GuestGreeting />

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
