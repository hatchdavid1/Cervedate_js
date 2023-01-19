const router = require ("express").Router()





router.get("/addNew",(req,res,next)=>{
    res.render("site/new")

})

router.get("/list",(req,res,next)=>{
    res.render("site/index")
})



module.exports = router