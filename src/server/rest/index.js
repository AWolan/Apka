import express from 'express';
import testRest from './test';
import autoRest from './auto';

var router = express.Router();

router.use('/test', testRest);
router.use('/auto', autoRest);
router.get('/', function (req, res) {
  res.send('Hello You.')
});

export default router;
