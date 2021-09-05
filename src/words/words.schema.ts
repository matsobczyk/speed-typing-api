import * as mongoose from 'mongoose';

export const WordsSchema = new mongoose.Schema({
  id: Number,
  numbers: Number,
  words: String,
});
