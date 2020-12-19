import React, {Component} from 'react';
import './App.css';
import FileSelect from "./FileSelect";
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileSelect/>
      </div>
    );
  }
}

export default App;