import express from "express"

import {creatHotel, deleteHotel, getHotel, updateHotel} from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js"


const router = express.Router()

//CREATE
router.post("/",verifyAdmin, creatHotel)

//UPDATE
router.put("/:id",verifyAdmin, updateHotel)

//DELELTE
router.delete("/:id",verifyAdmin, deleteHotel)

//GET

router.get("/", getHotel)



export default router