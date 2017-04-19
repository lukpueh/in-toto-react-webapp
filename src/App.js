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
            <LogoTable logos={["react", "eslint", "apache" ,"docker"]} />
            <h2>This webapp is secured using in-toto</h2>
          </div>
          <div className="Benefits">

            When integrating in-toto in this webapp, we made sure that:

            <ul> 

              <li> Only the right people coded this webapp, and
              followed the right coding guidelines
              </li>

              <li> No intruder tampered with the code before it was added to the debian image
              </li>
              
              <li> That the right person configured the apache server, to serve
              this webapp </li>

              <li> Only the right person packaged everything together in a
              docker container that you can trust </li> 
              
            </ul>

          </div>
          <div className="seeMore">
            Read more about in-toto at in-toto.io
          </div>
          <div className="copyright">
            All logos are trademarks of their respective owners. This work is made possible by grants XXXX of NSF and bleh and blah.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
