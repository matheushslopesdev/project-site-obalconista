const fs = require('fs')

module.exports = class RouterController {

    static Home(req,res){
        res.render('pages/main')
    }

    static ValidadeReceita(req,res){
        res.render('pages/validadeReceita')
    }

    static RegrasReceitaA(req,res){
        res.render('pages/regrasReceitaA')
    }

    static RegrasReceitaB(req,res){
        res.render('pages/regrasReceitaB')
    }

    static ads(req,res){
        res.send('google.com, pub-2763977508114521, DIRECT, f08c47fec0942fa0')
        
    }

}