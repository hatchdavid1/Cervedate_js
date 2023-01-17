const router = require ("express").Router()





router.get("/addNew",(req,res,next)=>{
    res.render("review/new")

})

router.get("/list",(req,res,next)=>{
    res.render("review/index")
})



module.exports = router