const AuthModel= require("../models/autherModel");
const BookModel= require("../models/booksModel");



const dataSave=async(req, res)=>{
    const {authname, booktitle, bookprice}=req.body;
   
    
    const Auth=await AuthModel.create({
        authername:authname
    })

    const Book= await BookModel.create({

            booktitle:booktitle,
            price:bookprice,
            autherid:Auth._id
    })

    await AuthModel.findByIdAndUpdate(Auth._id, { $push: { books: Book._id } });

    res.send("OK Record Inserted!!!")
}

const dataDisplay=async(req, res)=>{
    const Data=await AuthModel.find().populate("books");
    res.send(Data);
}



module.exports={
    dataSave,
    dataDisplay
   
}