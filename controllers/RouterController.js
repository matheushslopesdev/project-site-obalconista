

module.exports = class RouterController {

    static Home(req,res){
        res.render('pages/main')
    }

    static ValidadeReceita(req,res){
        res.render('pages/validadeReceita')
    }

    static DosePedriatrica(req,res){
        res.render('pages/dosePediatrica')
    }

}