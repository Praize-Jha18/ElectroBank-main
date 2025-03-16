import User from '../../database/model'
import {Request, Response } from 'express'

const transac = (req : Request, res: Response)=>{
    res.send("hi")
}

export default {transac}