const mongoose = require("mongoose"); //every file must include this  

const RecipeSchema = mongoose.Schema(
    {
        //define properties
        username: { type:String },
        food_name: { type:String },
        cuisine: { type:String },
        video_url: String,
        recipe: { type:String }
    },
    {
        collection: "recipe", //collection name
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        },
        toObject:{
            virtuals: true
        },
        toJSON: {
            virtuals:true
        }
    }
);
module.exports = mongoose.model("Recipe", RecipeSchema);