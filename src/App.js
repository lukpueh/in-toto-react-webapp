import React, { Component } from 'react';
import Logo from './logo.js';
import LogoTable from './rotologo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Background">
        <div className="App">
          <div className="App-header">
            <Logo source="/logo.png"  />
            <LogoTable logos={["git", "eslint",  "react" ,"docker"]} />
            <h2>This web app is <i>in-toto</i> secured</h2>
          </div>
          <div className="Metadata">
            <img src="/metadata.png" />
          </div>

          <div className="Benefits">

            <ul>
              <li>Created by authorized developers only</li>
              <li>Followed the code guidelines</li>
              <li>Built and packaged as defined</li>
              <li>Guaranteed no tampering along the path</li>
            </ul>

          </div>
          <div className="seeMore">
            Learn more at https://in-toto.io
          </div>
          <div className="copyright">
            This project is managed by Prof. Justin Cappos and other members of the Secure Systems Lab at NYU and the NJIT Cybersecurity Research Center.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
