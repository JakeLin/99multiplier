import { render } from "react-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import AdditionFewerThan10 from "./AdditionFewerThan10";
import Multiplication99 from "./Multiplication99";

render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="additionfewerthan10" element={<AdditionFewerThan10 />} />
      <Route path="multiplication99" element={<Multiplication99 />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
