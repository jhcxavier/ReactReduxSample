import React from 'react';
import Dashboard from './home/dashboard';
import { BrowserRouter, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
