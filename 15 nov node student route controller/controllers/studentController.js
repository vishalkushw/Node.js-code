const stuhomePage=(req, res)=>{
    res.send("<h1> Welcome to student info page </h1>")
}

const aboutStudent=(req,res)=>{
    res.send("<h1> About page of student </h1>")
}

const stuFees=(req, res)=>{
    res.send ("<h1>Student fees recorde</h1>")
}

module.exports={
    stuhomePage,
    aboutStudent,
    stuFees
}