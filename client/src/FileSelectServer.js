import React from 'react';
import {InputFile} from 'semantic-ui-react-input-file'
import {Button} from "semantic-ui-react";
import axios from 'axios';

class FileSelectServer extends React.Component {
  fileUpload = {};

  constructor(props) {
    super(props);
    this.state = {selectedFileName: 'None'};
  }

  selectFile = (evt) => {
    console.log(evt)
    this.setState({selectedFileName: evt.target.files[0].name, selectedFile: evt.target.files[0]});
  };

  onFileUpload = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    let config = {
      "headers": {
        "Content-type": "multipart/form-data"
      }
    };
    axios.post('/api/v1/upload', data, config).then((res) => {
      console.log(res.statusText);

      const response = res.data;
      this.setState({response});
    });
  };

  render() {
    console.log(this.state)
    return (<>
      <InputFile
        button={{}}
        input={{
          id: 'input-control-id',
          onChange: this.selectFile
        }}
      />
      <p>Selected file: {this.state.selectedFileName}</p>
      <Button onClick={this.onFileUpload}>Submit</Button>
    </>)
  }
}

export default FileSelectServer