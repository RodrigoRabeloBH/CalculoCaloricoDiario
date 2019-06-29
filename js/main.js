/*
    FORMULA CALCULO CONSUMO CALORICO DIARIO:
    HOMEM: 66,5 +(5 x ALTURA EM CM) + (13,8 x PESO KG ) - (6,8 IDADE)
    MULHERES: 655,1 + (1,8 x ALTURA EM CM) + (9,5 x PESO KG) - (4,7 x IDADE )
    SEDENTARIO:  1.2
    1-3 : 1.375
    3-5 : 1.550
    6-7 : 1.725
*/

class Pessoa{
    constructor(peso, altura, idade){
        this.peso = peso,
        this.altura = altura,
        this.idade = idade       
    }
  
    static clearField(){
        const peso = document.querySelector('#peso').value = ''
        const altura = document.querySelector('#altura').value = ''
        const idade = document.querySelector('#idade').value = ''
    }

    static calc(){
        // PEGANDO OS VALORES DOS INPUTS 
        const peso = document.querySelector('#peso').value
        const altura = document.querySelector('#altura').value
        const idade = document.querySelector('#idade').value   
    
        // VERIFICANDO SE OS CAMPOS ESTAO PREENCHIDOS CORRETAMENTE
        if(peso === '' || isNaN(peso)|| altura === ''|| isNaN(altura) || idade === '' || isNaN(idade)){  
            
            document.querySelector('.resultado').style.display ='none'
            document.querySelector('.loading').style.display = 'none'
           alert('Preencha corretamente todos os campos')
        }
        else{
    
            const pessoa = new Pessoa(peso, altura, idade)
            let check = document.querySelectorAll('.check')
            let sexo = document.querySelectorAll('.sexo')        
            let valcheck = ''
            let sex = ''
    
            check.forEach(c=>{if(c.checked === true){valcheck = c.value}})       
            
            sexo.forEach(x=>{if(x.checked === true){sex = x.value}})           
            
            // CALCULANDO O CONSUMO DIARIO DE CALORIAS 
    
            const calHomem = [66.5 + (5 * pessoa.altura) +(13.8 * pessoa.peso) - (6.8 * pessoa.idade)] *(valcheck)
            const calMulher = [665.1 + (1.8 * pessoa.altura) +(9.5 * pessoa.peso) - (4.7 * pessoa.idade)] *(valcheck)
    
            if(sex ==='homem'){
    
                document.querySelector('#result').textContent = calHomem.toFixed(2)
                document.querySelector('.resultado').style.display ='block'
                document.querySelector('.loading').style.display = 'none'
    
            }else{
    
                document.querySelector('#result').textContent = calMulher.toFixed(2)
                document.querySelector('.resultado').style.display ='block'
                document.querySelector('.loading').style.display = 'none'
            }       
            Pessoa.clearField()
        }         
    }

} // END CLASS PESSOA

const form = document.querySelector('#myform')
form.addEventListener('submit', (e)=>{
    document.querySelector('.resultado').style.display ='none'
    document.querySelector('.loading').style.display = 'block'
    setTimeout(Pessoa.calc,2000)
    e.preventDefault()
})



