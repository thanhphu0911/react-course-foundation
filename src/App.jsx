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
import PhuComposedComponent from "./sampleApp/phusnyd/PhuComposedComponent";
import SampleAppHeader from "./SampleAppHeader";
import ConditionalRendering from "./ConditionalRendering";
import DuyComposedComponent from "./sampleApp/duy/DuyComposedComponent";
import NhatComposedComponent from "./sampleApp/nhat/NhatComposedComponent";
import NhatGuestGreeting from "./sampleApp/nhat/NhatGuestGreeting";
import NhatUserGreeting from "./sampleApp/nhat/NhatUserGreeting";
import HanndleApp from "./sampleApp/nhat/HandleApp";
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
      <SampleAppHeader devName="nhat" />
      <NhatComposedComponent />
      <NhatComposedComponent />
      <br />
      <ConditionalRendering />
      <br />
      <SampleAppHeader devName="nhat-week 2" />
      <HanndleApp/>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
