import mongoose from 'mongoose';
import {TestModel} from '../model/TestModel';

export function save(test) {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/apka');
  let tester = new TestModel(test);

  tester.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Test saved.');
    }
    mongoose.disconnect();
  });
};
