const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');
const multer = require('multer');
const upload = multer({ dest: 'tmp/csv/' });

router.post('/upload', upload.single('file'), controllers.uploadLogs);

module.exports = router;