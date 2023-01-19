const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    calle: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      lowercase: false,
      uppercase: true
    },
    colonia: {
      type: String,
      minLength:8,
      required: true,
      unique:false, 
      uppercase:true
    },
   cp:{
      type: Integer, 
      required:false, 
      minÑength: 6
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
