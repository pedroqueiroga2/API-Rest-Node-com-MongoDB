import mongoose from 'mongoose';
let db = mongoose.connection;
mongoose.connect(process.env.DB_CONNECTION_STRING);

export default db;