const express = require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const multer = require("multer");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },

    filename: (req, file, cb) => {
      cb(null, file.originalname); 
    }
  });
 
  const upload = multer({ storage: storage });

  app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ filename: req.file.originalname });
  });

app.listen(8000, ()=>{
    console.log("server run on 8000 Port!");
})