import mongoose from "mongoose";

let isConneted = false;

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);
    if(isConneted){
        console.log("Mongo DB is already Connected");
        return;
    }
    try {
        await mongoose.connect(
            process.env.MONGODB_URI,
            {
                dbName: "shared_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        isConneted = true;
        console.log("MongoDb is connected");
    } catch (error) {
        console.log(error);
    }
}