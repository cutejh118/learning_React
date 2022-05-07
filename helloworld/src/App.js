import "./App.css";
import Mycomponent from "./Mycomponent";
import Say from "./Say";
import EventPractice from "./EventPractice";
import IterationSample from "./IterationSample";
function App() {
  return(
    <div>
        안녕 <Mycomponent name="여정희" ></Mycomponent>
        <Say></Say>
        <EventPractice></EventPractice>
        <IterationSample></IterationSample>
    </div>

  ); 

};
export default App;
