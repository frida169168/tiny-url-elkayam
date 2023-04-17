import mongoose from 'mongoose'

const uri=
"mongodb+srv://michal:mc21322132@cluster0.mkr8lqu.mongodb.net/TinyUrl?retryWrites=true&w=majority"

// "mongodb://localhost:27017/TinyUrl"


const connectDB = async ()=>{
    await mongoose.connect(uri);
};

mongoose.connection.on("connected",()=>{
    console.log("mongo is connected");
});

mongoose.set('toJSON',{
    virtuals: true,
    transform: (doc,converted)=>{
        delete converted._id;
    }
});

export default connectDB;
