
const data = document.querySelector('#data')
const btn = document.querySelector('#btn-calc')
const btnSelect = document.querySelector('#tipo-receita')


btn.addEventListener('click', (e)=>{
    if(btnSelect.value === 'popular'){
        const dateNew = Date.now()
        
        console.log(dateNew)

    }
    if(btnSelect.value === 'antimicrobiando'){
        
    }
    if(btnSelect.value === 'receitacomum'){
        
    }
})