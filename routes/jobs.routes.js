
import express from 'express'
import {createJobPost,fetchJobs,deleteJob,updateJob} from '../controller/jobs.controllers.js'

const router = express.Router()

router.get("/",fetchJobs)
router.post("/",createJobPost)
router.patch("/:id",updateJob)
router.delete("/:id",deleteJob)
export default router