import express from 'express';
// import subAuto from './sub-auto';
import * as autoService from '../../service/auto';

var router = express.Router();

// router.use('/sub-auto', subAuto);
router.get('/', function (req, res) {
  res.send('Auto rest.')
});
router.post('/tank', (req, res) => {
  let data = req.data;
  autoService.saveCombustion(data)
    .then(result => res.send(result));
});

export default router;
