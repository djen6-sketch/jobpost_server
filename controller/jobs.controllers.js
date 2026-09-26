import Jobs from "../model/jobpost.model.js"




export const createJobPost = async(req,res)=>{

    try{
    const {company,role,status,date,link,notes} = req.body
    const job = await Jobs.create({
        company,role,status,date,link,notes
    })
    res.status(201).json({
        message:"successful creating jobs post",
        job

    })
}catch(e){
    res.status(500).json({
        message:"something wrong"
    })
    console.log("error creating job post",e)
}
    

}

export const fetchJobs = async(req,res)=>{


    try{
    
        const jobs = await Jobs.find()
   //doesnt work if user is just fetching and theres no data
   /* if(!data.length){
        res.status(500).json({
            message:"user not found"
        })
        return
    } */
    res.status(200).json({
        message:"found",
        jobs
    })
    }catch(e){
        console.log("error fetching",e)
        res.status(500).json({
            message:"something wrong"
        })
    }
  
}

export const deleteJob = async(req,res)=>{

    try{
        
        const {id} = req.params
     
         const data = await Jobs.findByIdAndDelete(id)
         //check if data exist 
         if(!data){
            res.status(404).json({
                message:"job not found"
            })
            return
         }
         res.status(200).json({
            message:"deleted",
            data
         })

    }catch(e){
        res.status(500).json({
            message:"network problem",

        })
    }

}

//edit 

export const updateJob = async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await Jobs.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updated) {
            return res.status(404).json({ message: "job not found" });
        }

        res.status(200).json({
            message: "job updated successfully",
            updated
        });

    } catch (e) {
        console.log("update error", e);
        res.status(500).json({ message: "something wrong" });
    }
};
