import React from 'react';
import Dashboard from './home/dashboard';
import { BrowserRouter, Route } from "react-router-dom"


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
