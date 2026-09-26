import mongoose from 'mongoose'

async function dbConnect() {
    try{
            await mongoose.connect(process.env.MONGODB_URL);
            console.log("connected")
    }catch(e){
        console.log("error while connection",e)
    }
  

}

export default dbConnect

