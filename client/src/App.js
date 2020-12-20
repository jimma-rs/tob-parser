import React, {Component} from 'react';
import './App.css';
import RaidDataDisplay from "./RaidDataDisplay";
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <div className="App">
        <RaidDataDisplay/>
      </div>
    );
  }
}

export default App;