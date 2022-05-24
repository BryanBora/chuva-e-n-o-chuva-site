function chuva() {

   let estado = document.querySelector("input#estadotxt").value;
   let cidade = document.querySelector("input#cidadetxt").value;
   let datainput = document.querySelector("input#datatxt").value;


   data = new Date(datainput);
   dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
   
   let resultado = document.querySelector("div#resultado");


   if(estado.length <= 2 ){
     
        var estadoMaiusculo = estado.toUpperCase()
        resultado.innerHTML = `Parabéns ja estamos providenciando sua chuva para ${dataFormatada} em ${cidade} no ${estadoMaiusculo}.`

   } else{
       resultado.innerHTML = `Parabéns ja estamos providenciando sua chuva para ${dataFormatada} em ${cidade} no ${estado}.`
   }
}
   function naochuva() {

    let estado = document.querySelector("input#estadotxt").value;
    let cidade = document.querySelector("input#cidadetxt").value;
    let data = document.querySelector("input#datatxt").value;
 
 
 
    
    let resultado = document.querySelector("div#resultado");
 
 
    if(estado.length <= 2 ){
      
         var estadoMaiusculo = estado.toUpperCase()
         resultado.innerHTML = `Parabéns ja estamos providenciando sua não chuva para ${dataFormatada} em ${cidade} no ${estadoMaiusculo}.`
 
    } else{
        resultado.innerHTML = `Parabénsja estamos providenciando sua não chuva para ${dataFormatada} em ${cidade} no ${estado}.`
    }

   


   

}