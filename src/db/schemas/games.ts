import { Schema, Document, model } from 'mongoose';

interface Game extends Document {
  name: string;
  box_art_url: string;
}

const schema = new Schema({
  name: { type: String, required: true },
  box_art_url: {type: String, required: true }
});

const games = model<Game>('game', schema);

export default games;
