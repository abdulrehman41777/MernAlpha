import { Schema, model } from 'mongoose';

const CarSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  cmodel: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  registration: {
    type: String,
    required: true,
  },
});

export default model('Car', CarSchema);
