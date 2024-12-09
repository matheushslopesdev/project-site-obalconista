const express = require('express')
const router = express.Router()
const RouterController = require('../controllers/RouterController')





router.get('/',RouterController.Home)
router.get('/ads.txt',RouterController.ads)
router.get('/validadereceita',RouterController.ValidadeReceita)
router.get('/regrasreceita-a',RouterController.RegrasReceitaA)
router.get('/regrasreceita-b',RouterController.RegrasReceitaB)







module.exports = router;