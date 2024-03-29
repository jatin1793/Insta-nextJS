const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/userModel.js');
const Post = require("./models/postModel.js")
const bcrypt = require("bcryptjs")
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const uploadImage = require("./cloudinary.js")

var salt = bcrypt.genSaltSync(10);
const secret = 'c7fd1a1aa907f71545de1e7c8c3b9eb8a101f0d4d2da217fa3f73547eb5e9866';

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/instanextJSapp')
.then(console.log("DB connected"))
.catch(err => console.log(err))

app.post('/auth/register', async (req, res) => {
    const { email, name, username, password } = req.body;
    try {
        const user = await User.create({
            token:"",
            email,
            name,
            username,
            password: bcrypt.hashSync(password, salt)
        })
        await user.save();
        res.status(201).json({ message: 'User registered successfully' })
    } 
    catch (error) {
        console.log(error);
    }
});

app.post('/auth/login', async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.json({ userExists: false , passCheck: false });
        }
        else {
            const passCheck = bcrypt.compareSync(password, user.password)
            if (passCheck) {
                const JWT_token = jwt.sign({ userId: user._id }, secret);
                User.findOneAndUpdate({email: user.email}, {token: JWT_token})
                .then(()=>{})
                .catch((err)=>{console.log(err)})
                res.json({ userExists: true, passCheck: true, token: JWT_token , username: user.username})
            } else {
                res.json({ userExists: true, passCheck: false });
            }
        }
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
})

app.post("/:username/create", async(req, res) => {
    try{
        const { postimg, postloc, postcap } = req.body;
        const user = await User.findOne({username: req.params.username})
        const postdata = await Post.create({
            postimg: req.body.postimg,
            postloc: req.body.postloc,
            postcap: req.body.postcap,
            postedby: user._id,
        })
        user.posts.push(postdata)
        await user.save()
        res.json({postdata})
    }
    catch(err){
        console.log(err)
    }
})

app.post("/:username/profile", async(req, res) => {
    try{
        const user = await User.findOne({username: req.params.username})
        res.json(user)
    }
    catch(err){
        console.log(err)
    }
})

app.get("/:username/profile/:id", async(req, res) => {
    try{
        const user = await User.findOne({_id: req.params.id})
        res.json(user)
    }
    catch(err){
        console.log(err)
    }
})

app.post("/:username/home", async(req, res) => {
    try{
        const user = await User.findOne({username: req.params.username})
        const allposts = await Post.find()
        
        res.json({allposts, user})
    }
    catch(err){
        console.log(err)
    }
})

app.post("/allposts", async(req, res) => {
    try{
        const allposts = await Post.find()
        res.json(allposts)
    }
    catch(err){
        console.log(err)
    }
})

app.post("/:username/people", async(req, res) => {
    try{
        const user = User.findOne({username: req.params.username})
        const allusers = await User.find()
        res.json(allusers)
    }
    catch(err){
        console.log(err)
    }
})

app.post("/allusers", async(req, res) => {
    try{
        const allusers = await User.find()
        res.json(allusers)
    }
    catch(err){
        console.log(err)
    }
})



app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

