import mongoose from 'mongoose';

export function connect() {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/apka');
};

export function disconnect() {
  mongoose.disconnect();
};
