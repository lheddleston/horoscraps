import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Welcome to Horoscraps!</h1>
      </header>
      <form name="userInfo">
      <ul>
      <li>
      Your name:
      <input type="text" name="firstname"/>
      </li>
      <li>
      Birth month:
      <input type="text" name="birthmonth"/>
      </li>
      <li>
      Birth date:
      <input type="text" name="birthdate"/>
      </li >
      <input type="submit" value="Send into the universe"/>
      </ul>
      </form>
      </div>
    );
  }
}
// Responses
//    Ares, you’ll be fired from Forever 21 because Brian ratted you out.
//    Don’t wear flip flops on Tuesdays, a pile of shit is headed your way…literally.


export default App;
