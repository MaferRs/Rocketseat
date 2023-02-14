// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

let family = {
   receitas: [2500,140,76,85,78],
   despesas: [864,69,35,47,233,]
}

function soma(array){
   let total = 0;
   for(let value of array){
      total += value
   }
   return total

}

function calculaTotal(){
   const calculaReceitas = soma(family.receitas)
   const calculaDespesas = soma(family.despesas)

   const total = calculaReceitas - calculaDespesas

   const ok = total >= 0

   let mensagem = "Negativo"

   if(ok){
      mensagem = "positivo"
   }
   console.log(`seu saldo é ${mensagem}: R$ ${total.toFixed(2)}`)
}
calculaTotal()