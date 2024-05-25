/*
function component react
react function component
component react
*/

import ReactJSX from "./ReactJSX";
import Props from "./Props";
import State from "./State";
import Component from "./Component";
import HandleEvent from "./HandleEvent";
import SampleAppHeader from "./SampleAppHeader";
import ConditionalRendering from "./ConditionalRendering";
import NhatComposedComponent from "./sampleApp/nhat/NhatComposedComponent";
import HandleApp from "./sampleApp/nhat/HandleApp";
import HandleGenerateBox from "./sampleApp/nhat/HandleGenerateBox";
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
      <br />
      <HandleEvent />

      <br />
      
      <br />
      <SampleAppHeader devName="nhat" />
      <NhatComposedComponent />
      <NhatComposedComponent />
      <br />
      <ConditionalRendering />
      <br />
      <SampleAppHeader devName="nhat-week 2" />
      <HandleApp/>

      <br />
      <HandleGenerateBox/>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
