const express = require("express")

const router = express.Router()

const bodyParser = require("body-parser")

const userModel = require("../models/user-model")

router.use(bodyParser.json())


const {signUp,getUsers,hashValitor,tokenGenerator,tokenValidator} = require("../controller/auth-controller")


router.post("/signup",signUp)
router.get("/get",getUsers)

router.post("/signin",async(req,res)=>{
    const existingUser = await userModel.findOne({email:req.body.email})

    if(!existingUser){
        return res.status(400).json({message:"User Not Found"})
    }else{
        const checkUser = await hashValitor(req.body.password,existingUser.password)

        if(!checkUser){
           return res.status(400).json({message:"Incorrect Password"})
        }else{
            // return res.status(200).json({message:"Login successfully"})
            const token = await tokenGenerator(existingUser.email)
            res.cookie("jwt",token)
            res.send(token)
        }
    }
})

const isLoggin = async (req,res,next)=>{
    const {jwt} = req.cookies;
    const valid = await tokenValidator(jwt)
    if(valid){
        next()
    }else{
        res.send("Access Denied")
    }
}

router.get("/protected",isLoggin,(req,res)=>{
    res.send("I am protected route")
})




module.exports = router