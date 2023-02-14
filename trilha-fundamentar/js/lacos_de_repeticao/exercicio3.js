// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32


function tranformarTemperatura(temperatura){
   const celcius = temperatura.toUpperCase().includes("C")
   const fahrenheit = temperatura.toUpperCase().includes("F")

   //fluxo de Error
   if(!celcius && !fahrenheit){
      throw new Error("Grau não identificado")
   }
 //fluxo ideal , F -> C 

   let atualizaTemperatura = Number(temperatura.toUpperCase().replace("F", ""));
   let formula = (fahrenheit) => (fahrenheit - 32) * 5/9 
   let temperaturaSing = "C"


   //fluxo alternativo C- >
   if(celcius){
      
   atualizaTemperatura = Number(temperatura.toUpperCase().replace("C", ""));
   let formula = celcius => celcius * 9/5 + 32
   temperaturaSing = "F"
   }

   return formula(atualizaTemperatura) + temperaturaSing
}
   try {
      console.log(tranformarTemperatura('10C'))
      console.log(tranformarTemperatura('50F'))
      tranformarTemperatura('50Z')
   } catch (Error) {
      console.log(Error.message)
      
   }


