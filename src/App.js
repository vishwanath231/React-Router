import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';
import NotFount from './Components/NotFount';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Service' component={Service} />
                    <Route path='/Contact' component={Contact} />
                    <Route component={NotFount} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
