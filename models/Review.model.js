const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const reviewSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    coment: {
      type: String,
      required: true,

    },
    

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Review = model("review", reviewSchema);

module.exports = site;
