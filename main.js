var objeto = {
    dolaresCotacao: 5.0761,
    euroCotacao: 5.0891,
    ArgCotacao: 0.0369,
    chileno: 0.005618,
    reaisArg: 0.038,
    reaisEuros: 5.11,
    reaisChileno: 0.0057,
    reaisDolares: 5.08
}

  function conversor(){
  
  var escolha = prompt("Qual o tipo de conversão você quer fazer?");
  
  switch (escolha){
    //Reais para dólares 
    case "1":
    var reais = prompt("digite o valor em reais que deseja converter em dólares!!");
    var converter = reais / objeto.dolaresCotacao;
    var total = Math.round(converter * 100) / 100;
    alert("O valor de R$" + reais + " reais convertidos em dólares é de: USD" + total);
    return conversor();
    
    //Dolares para reais 
    case "2":
    var dolares = prompt("digite o valor em dólares que deseja converter para reais!!");
    var converter = dolares * objeto.reaisDolares;
    var total = Math.round(converter * 100) / 100;
    alert("O valor de USD" + dolares + " dólares convertidos em reais é de: R$" + total);
    return conversor();
    
    //Reais para peso argentino
    case "3":
    var reais = prompt("digite o valor em reais que deseja converter para peso argentino!!");
    var converter = reais / objeto.ArgCotacao;
    var total = Math.round(converter * 100) / 100;
    alert("O valor de R$" + reais + " reais convertidos em peso argentino é de: ARGS" + total);
    return conversor();
    
    //Argentino para reais
    case "4":
    var argentino = prompt("digite o valor em peso argentino que deseja converter para reais!!");
    var total = argentino * objeto.reaisArg;
    alert("O valor de R$" + argentino + " pesos argentinos convertidos em reais é de: R$" + total);
    return conversor();
     
    //Reais para chileno
    case "5":
    var reais = prompt("digite o valor em reais que deseja converter para peso chileno!!");
    var converter = reais / objeto.chileno;
    var total = Math.round(converter * 100) / 100;
    alert("O valor de R$" + reais + " reais convertidos em peso chileno é de: CLP" + total);
    return converter();
      
    //Chileno para reais
    case "6":
    var chileno = prompt("digite o valor em peso chileno que deseja converter para reais!!");
    var total = chileno * objeto.reaisChileno;
    alert("O valor de R$" + chileno + " pesos chilenos convertidos em reais é de: R$" + total);
    return conversor();
    
    //Reais para euros
    case "7":
    var reais = prompt("digite o valor em reais que deseja converter para euros!!");
    var converter = reais / objeto.euroCotacao;
    var total = Math.round(converter * 100) / 100;
    alert("O valor de R$" + reais + "reais convertidos em euros é de: EUR" + total);
    return conversor();
    
    //Euros para reais
    case "8":
    var euros = prompt("digite o valor em euros que deseja converter para reais!!");
    var converter = euros * objeto.reaisEuros;
    var total = Math.round(converter * 100) / 100;
    alert("O valor de R$" + euros + "euros convertidos em reais é de: R$" + total);
    return conversor();
    
    default: 
      alert("Você saiu do programa!!");
  }
}
