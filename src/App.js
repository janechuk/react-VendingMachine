import React from 'react';
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Cookies from "./Cookies";
import Chocolate from "./Chocolate";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <NavBar />
                    <Route exact path="/Chips">
                        <Chips />
                    </Route>
                    <Route exact path="/Cookies">
                        <Cookies />
                    </Route>
                    <Route exact path="/Chocolate">
                        <Chocolate />
                    </Route>
                    <Route exact path="/VendingMachine">
                        <VendingMachine />
                    </Route>
                    <Route exact path="/">
                        <VendingMachine />
                    </Route>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
