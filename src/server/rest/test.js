import express from 'express';
import * as testService from '../service/test/testService';

var router = express.Router();

router.get('/', function (req, res) {
  console.log('test rest');
  testService.saveTest();
  res.send('This is test get.');
});

export default router;
