
const dataInicial = document.querySelector('#inicial')
const dataFinal = document.querySelector('#final')
const btn = document.querySelector('#btn-calc')
const btnSelect = document.querySelector('#tipo-receita')
const resultado = document.querySelector('#resultado')


btn.addEventListener('click', (e)=>{

    if(!isNaN(dataInicial.value)){
        return resultado.innerHTML = `<b style="color:red">Data Inválida</b>`
    }
    if(btnSelect.value === 'popular'){
        calcDate(180,dataInicial, dataFinal)
    }
    if(btnSelect.value === 'antimicrobiano'){
        calcDate(10,dataInicial, dataFinal)
    }
    if(btnSelect.value === 'receitacomum'){
        calcDate(30,dataInicial, dataFinal)
    }
})



function calcDate(dias,inicial,final){

    const dInicial = new Date(inicial.value).getTime()
    const dFinal = new Date(final.value).getTime()

    let calc = dFinal - dInicial
    let dia = (calc / 3600000) / 24

    if(dia < dias){
        return resultado.innerHTML = `<b style="color:green">Receita ainda tem validade</b> - ${dia}`
    }

    return resultado.innerHTML = `<b style="color:red">Receita não tem mais validade</b> - ${dia}`

    
}