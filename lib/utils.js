const { default: mongoose } = require("mongoose");

const connection={}
export const connectToDb= async()=>{
    try {
        if(connection.isConnected){
            console.log("using existing connection")
            return;
        }
        else{
            const db=await mongoose.connect(process.env.MONGO_URI);
            connection.isConnected = db.connections[0].readyState;
        }
      } catch (error) {
        console.log(error);
        throw new Error("Couldn't connect to Mongo");
      }
      
}