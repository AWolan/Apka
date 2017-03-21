import express from 'express';
import rest from './rest/';

const app = express();

app.use('/', express.static('./dist/client'));
app.use('/rs', rest);

console.log('Apka server started on port: 8080');
app.listen(8080);
