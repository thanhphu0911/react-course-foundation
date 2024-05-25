/*
function component react
react function component
component react
*/

import ReactJSX from "./ReactJSX";
import Props from "./Props";
import State from "./State";
import Component from "./Component";
import TonyComposeComponent from "./sampleApp/tony/TonyComposeComponent";
import HandleEvent from "./HandleEvent";
import SampleAppHeader from "./SampleAppHeader";
import ConditionalRendering from "./ConditionalRendering";
import LiftingStateUp from "./sampleApp/nhat/LiftingStateUp";

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
      <SampleAppHeader devName="nhat" />
      <LiftingStateUp/>
      <br />

      <ConditionalRendering />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
