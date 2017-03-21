import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const combustionSchema = new Schema({
  autoId: {
    type: Number,
    ref: 'auto'
  },
  milage: Number,
  totalMilage: Number,
  literAmount: Number,
  literPrice: Number,
  totalPrice: Number,
  combustion: Number,
  date: Date,
  notes: String
});

export const CombustionModel = mongoose
  .model('combustion', combustionSchema, 'combustion');
