
const data = document.querySelector('#data')
const btn = document.querySelector('#btn-calc')
const btnSelect = document.querySelector('#tipo-receita')
const resultado = document.querySelector('#resultado')


btn.addEventListener('click', (e)=>{

    console.log(isNaN(data.value))
    if(!isNaN(data.value)){
        return resultado.innerHTML = `Data Invalida`
    }
    if(btnSelect.value === 'popular'){
        calcDate(181,data)
    }
    if(btnSelect.value === 'antimicrobiano'){
        calcDate(11,data)
    }
    if(btnSelect.value === 'receitacomum'){
        calcDate(31,data)
    }
})



function calcDate(dias,date){
    const dateNow = Date.now().toFixed(1)
        const dataInput = new Date(date.value).getTime()
        let calc = dateNow - dataInput 
        let dia = (calc / 3600000) / 24

        if(dia.toFixed(0) < dias){
    
            return resultado.innerHTML = `Receituario ainda tem Validade - ${dia.toFixed(0) -1} Dias`
        }
        return resultado.innerHTML = `Receituario Sem Validade - ${dia.toFixed(0) -1} Dias`
}