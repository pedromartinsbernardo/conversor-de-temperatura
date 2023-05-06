function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(num);
 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(num);
}
function calcular(){
    const C = parseFloat(document.querySelector('#celsius'))
console.log(c)

if(C != ''){
    const temperatura = (9*C/5) + 32; 

    resultado.innerHTML = 'temperatura; ${temperatura}'
}
}



 





