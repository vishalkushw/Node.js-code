const myupload =((req,res,next)=>{
    console.log("uplode middleware");
    next();
} )

module.exports= myupload;