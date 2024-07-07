import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://priyansh:dhairya1234@cluster0.3zfx4sl.mongodb.net/grocery-project')
    .then(()=>console.log("DB connected"));
}
