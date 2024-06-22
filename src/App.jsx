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
import DuyComposedComponent from "./sampleApp/duy/DuyComposedComponent";
import GuestGreeting from "./sampleApp/phusnyd/GuestGretting/GuestGreeting";
import ListKey from "./List-Key";
import Form from "./Form";
import TonyFormPersonal from "./sampleApp/tony/TonyFormPersonal";
import BoxGenerateApp from "./sampleApp/phusnyd/GenerateBox/BoxGenerateApp";
import NhatComposedComponent from "./sampleApp/nhat/NhatComposedComponent";
import HandleApp from "./sampleApp/nhat/HandleApp";
import HandleGenerateBox from "./sampleApp/nhat/HandleGenerateBox";
import StateHook from "./StateHook";
import EffectHook from "./EffectHook";
import PhuEffectHook from './PhuEffectHook';
import CriticalRendering from "./CriticalRendering";
import BookStore from "./BookStore";
import { BookProvider } from "./context/BookContext";
import TonyColorBox from "./challenge/TonyColorBox";
import TonyQuestionBoard from "./challenge/ TonyQuestionBoard";
import RefHook from './RefHook';
import PerformanceHook from './PerformanceHook';

function App() {
  // JSX
  return (
    <>
      <ReactJSX />
      <br />
      <Props />
      <br />
      <SampleAppHeader devName="nhat" />
      
      <br />
      <br />
      <br />

      <ConditionalRendering />
      <br />
      <br />
      <GuestGreeting />
      <br />
      <br />
      <ListKey />

      <br />
      <Form />

      <br />
      <TonyFormPersonal />

      <br />

      <BoxGenerateApp />
      <br />

      <br />
      <NhatComposedComponent />
      <br />
      <HandleGenerateBox/>
      <br />

      <StateHook />

      <br />
      <EffectHook />
      
      <br />
      {/* <PhuEffectHook />       */}

      <br />
      <CriticalRendering />

      <br />
      <BookProvider>
        <BookStore />
      </BookProvider>

      <br />
      <TonyColorBox />

      <br />
      <TonyQuestionBoard />

      <br />
      <RefHook />
      <br />

      <PerformanceHook />

      <br />
      <br />
    </>
  );
}

export default App;
