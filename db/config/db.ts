const mongoose = require( 'mongoose' )
mongoose.Promise = global.Promise

export class MongoDBConfig {
  private _URI: string = "mongodb://localhost:27017/test"
  private db;

  constructor() {
    this.db = mongoose.connect( this._URI ).connection
    this.dbConnect()
  }

  private dbConnect() {
    this.db.on( 'error', console.error.bind( console, 'Connection error:' ) )
    this.db.once( 'open', () => {
      console.log( `MongoDB connection instantiated` );
    })
  }
}