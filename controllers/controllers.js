var fs = require('fs');
const parseLogs = require('../client/src/util/parse-logs');

onChangeHandler=event=>{
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })
}

const uploadLogs = (req, res) => {
  fs.readFile(req.file.path, 'utf8', function(err, data) {
    if (err) throw err;
    let parsedData = parseLogs(data);
    return res.status(200).json({body: parsedData})
  })
};

module.exports.uploadLogs = uploadLogs;