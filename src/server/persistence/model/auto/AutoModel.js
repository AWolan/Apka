import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const autoSchema = new Schema({
  mark: String,
  model: String,
  alias: String
});

export const AutoModel = mongoose
  .model('auto', combustionSchema, 'auto');
