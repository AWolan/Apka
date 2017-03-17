import express from 'express';
import testRest from './test'

var router = express.Router();

router.use('/test', testRest);
router.get('/', function (req, res) {
  res.send('Hello You.')
});

export default router;
