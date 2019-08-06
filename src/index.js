require('bootstrap/dist/css/bootstrap.min.css');
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { BrowserRouter } from 'react-router-dom'
import "./style.scss"


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))