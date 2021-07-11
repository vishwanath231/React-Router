import React from 'react';
import '../App.css';
import logo from '../logo.svg';

function Home() {
    return (
       <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Home</h2>
            </header>
        </div>
    )
}
export default Home;
