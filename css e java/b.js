alert("digite valor de sua compra  para saber se e possivel realizar -la")
const saldo =prompt("digite seu saldo")
const valor = prompt("digite o valor de sua compra ")
 const dinheirofinal  = saldo - valor;
const compra = valor- saldo;
if(compra <= 0)
    {
        alert( " A compra foi realizada com sucesso , seu saldo agora é de "  
         +    dinheirofinal  +   " reais ");
    }
    else
    {
        alert("Você não tem dinheiro para realizar a compra esta faltando "  +  compra  + "reais" );
    }
