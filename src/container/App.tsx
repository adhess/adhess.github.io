import React from 'react';
import './App.css';
import Home from '../components/Home/Home'
import About from "../components/About/About";

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-hash-link").NavHashLink;

function App() {
    return (
        <BrowserRouter>
            <Route path='/' exact render={
                () => (<div>
                    <div className='nav-bar'>
                        <a>Home</a>
                        <Link to={{path: '/', hash: "#about"}}
                              scroll={(el: any) =>
                                  el.scrollIntoView({
                                      behavior: 'smooth',
                                      block: 'start'
                                  })}>About</Link>
                        <a>Experience</a>
                        <a>work</a>
                        <a>Resume</a>
                    </div>
                    <Home/>
                    <div id='about' style={{color: 'white', zIndex: 5, position: "absolute", top: '100%'}}>lhljfasldjf
                    </div>
                    <About/>
                </div>)
            }>
            </Route>
        </BrowserRouter>
    );
}

export default App;
