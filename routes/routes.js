const express = require('express')
const router = express.Router()
const RouterController = require('../controllers/RouterController')


router.get('/', (req,res)=>{
    res.redirect('/home')
})

router.get('/home',RouterController.Home)
router.get('/validadereceita',RouterController.ValidadeReceita)
router.get('/dosepediatrica',RouterController.DosePedriatrica)







module.exports = router;