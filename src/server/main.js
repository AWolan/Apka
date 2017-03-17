import express from 'express';
import baseRest from './rest/base';

const app = express();

app.use('/', express.static('./dist/client'));
app.use('/rs', baseRest);

console.log('Apka server started on port: 8080');
app.listen(8080);
