import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    
  }
},
  { timestamps: true }
)

export const UserModel = model( 'User', UserSchema )