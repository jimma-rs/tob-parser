const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
const api = require('./routes/routes');
app.use('/api/v1/', api);


if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  const root = require('path').join(__dirname, 'client', 'build')
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
  })
};

app.get('*', (req, res) => {
  res.status(200).json({
    msg: 'Catch All'
  });
});

app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));