const router = require('express').Router()

router.get("/search",(req,res,next)=>{
    res.render("search/index")

})

module.exports = router