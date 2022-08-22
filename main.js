var objeto = {
    dolaresCotacao: 0.19,
    euroCotacao: 0.19,
    ArgCotacao: 26.11,
    chileno: 175.44,
    reaisArg: 0.038,
    reaisEuros: 5.25,
    reaisChileno: 0.0057,
    reaisDolares: 5.19
}

  function converter(){
  
  var escolha = prompt("Qual o tipo de conversão você quer fazer?");
  
  switch (escolha){
    //Reais para dólares 
    case "1":
    var reais = prompt("digite o valor em reais que deseja converter em dólares!!");
    var total = reais * objeto.dolaresCotacao;
    var exibir = alert("O valor de R$" + reais + " reais convertidos em dólares é de: USD" + total);
    return converter();
    break;
    
    //Dolares para reais 
    case "2":
    var dolares = prompt("digite o valor em dólares que deseja converter para reais!!");
    var total = dolares * objeto.reaisDolares;
    var exibir = alert("O valor de USD" + dolares + " dólares convertidos em reais é de: R$" + total);
    return converter();
    break;
    
    //Reais para peso argentino
    case "3":
    var reais = prompt("digite o valor em reais que deseja converter para peso argentino!!");
    var total = reais * objeto.ArgCotacao;
    var exibir = alert("O valor de R$" + reais + " reais convertidos em peso argentino é de: R$" + total);
      return converter();
      break;
    
    //Argentino para reais
    case "4":
    var argentino = prompt("digite o valor em peso argentino que deseja converter para reais!!");
    var total = argentino * objeto.reaisArg;
    var exibir = alert("O valor de R$" + argentino + " pesos argentinos convertidos em reais é de: R$" + total);
     return converter();
      break;
     
    //Reais para chileno
    case "5":
    var reais = prompt("digite o valor em reais que deseja converter para peso chileno!!");
    var total = reais * objeto.chileno;
    var exibir = alert("O valor de R$" + reais + " reais convertidos em peso chileno é de: R$" + total);
     return converter();
      break;
      
    //Chileno para reais
    case "6":
    var chileno = prompt("digite o valor em peso chileno que deseja converter para reais!!");
    var total = chileno * objeto.reaisChileno;
    var exibir = alert("O valor de R$" + chileno + " pesos chilenos convertidos em reais é de: R$" + total);
    return converter();
    break;
    
    //Reais para euros
    case "7":
    var reais = prompt("digite o valor em reais que deseja converter para euros!!");
    var total = reais * objeto.euroCotacao;
    var exibir = alert("O valor de R$" + reais + "reais convertidos em euros é de: R$" + total);
    return converter();
    break;
    
    //Euros para reais
    case "8":
    var euros = prompt("digite o valor em euros que deseja converter para reais!!");
    var total = euros * objeto.reaisEuros;
    var exibir = alert("O valor de R$" + euros + "euros convertidos em reais é de: R$" + total);
    return converter();
    break;
    
    default: 
      return alert("Você saiu do programa!!");
      break;
  }
}
