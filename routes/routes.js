const express = require('express')
const router = express.Router()
const RouterController = require('../controllers/RouterController')



router.get('/ads',(req,res)=>{
    res.render('../ads')
})

router.get('/',RouterController.Home)
router.get('/ads.txt',RouterController.ads)
router.get('/validadereceita',RouterController.ValidadeReceita)







module.exports = router;