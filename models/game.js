const mongoose = require('../config/database')
const { Schema } = mongoose

const gameSchema = new Schema({
  tiles: [String],
  players: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  turn: { type: Number, default: 0 }, // player index
  started: { type: Boolean, default: false },
  winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('games', gameSchema)
