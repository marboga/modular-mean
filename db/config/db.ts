import * as mongoose from 'mongoose';

const URI: string = "mongodb://localhost:27017/test"
export const db = mongoose.connect( URI ).connection

db.on( 'error', console.error.bind( console, 'connection error:' ) )
db.once( 'open', () => {
  console.log(`MongoDB connection instantiated`);
})
