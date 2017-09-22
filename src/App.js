import React, {Component} from 'react';
import Logo from './logo.js';
import LogoTable from './rotologo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Background">
        <div className="App">
          <div className="App-header">
            <Logo source="/logo.png"/>
            <LogoTable logos={["git", "eslint", "react", "docker"]} />
            <h2>This web app has been compromised!</h2>
          </div>

          <div className="seeMore">
            Learn more at https://in-toto.io
          </div>
          <div className="copyright">
            This project is managed by Prof. Justin Cappos and other members of
        the Secure Systems Lab at NYU and the NJIT Cybersecurity Research
        Center.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
