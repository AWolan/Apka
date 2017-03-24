import mongoose from 'mongoose';

export function connect() {
  mongoose.Promise = global.Promise;
  mongoose.createConnection('localhost', 'apka', 27017, {});
};

export function disconnect() {
  mongoose.disconnect();
};
