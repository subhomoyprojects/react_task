import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import UseStateComponent from "./UseStateComponent/UseStateComponent";
import UseReducerComponent from "./UseReducerComponent/UseReducerComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UseStateComponent />} />
          <Route path="/useReducer" element={<UseReducerComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
