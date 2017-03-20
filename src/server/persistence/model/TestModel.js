import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const model = mongoose.model;

const testSchema = new Schema({
  id: Number,
  name: String,
  items: [{
    name: String,
    desc: String
  }],
  date: Date
});

export const TestModel = mongoose.model('test', testSchema);
