
import mongoose from "mongoose"

const jobPost = mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    status:{
        
        type:String,
        enum:["applied","interview","offer","rejected"],
        required:true
    },
    date:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        
    }
})


const Jobs = mongoose.model("Jobs",jobPost)
export default Jobs

