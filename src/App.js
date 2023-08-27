import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import UseStateComponent from "./UseStateComponent/UseStateComponent";
import UseReducerComponent from "./UseReducerComponent/UseReducerComponent";
import Accordion from "./UseStateComponent/Accordion";
import ToggleParentComponent from "./UseReducerComponent/ToggleParentComponent";
import AccordionReducer from "./UseReducerComponent/AccordionReducer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UseStateComponent />} />
          <Route path="/useReducer" element={<UseReducerComponent />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/toggleReducer" element={<ToggleParentComponent />} />
          <Route path="/accordionReducer" element={<AccordionReducer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
