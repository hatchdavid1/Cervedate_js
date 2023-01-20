const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const searchSchema = new Schema(
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
      type: String, 
      required:false, 
      minÑength: 6
    },
    comentario:{
      type:String,
      require:true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Search = model("Search", searchSchema);

module.exports = Search;
