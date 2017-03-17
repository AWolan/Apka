import express from 'express';

var router = express.Router();

router.get('/', function (req, res) {
  res.send('This is test get.')
});

export default router;
