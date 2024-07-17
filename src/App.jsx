import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <div className="app">
        <div className="container">
            <Routes>
                <Route path="/" exact element={<Home/>} />
            </Routes>
        </div>
    </div>
  )
}

export default App
