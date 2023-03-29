import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
  type : {
    type: String,
    required: true,
  },

});

export default model('Category', CategorySchema);
