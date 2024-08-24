function insert(num){
let numero=document.getElementById("imput").innerHTML
document.getElementById("imput").innerHTML=numero+num
};

function zera(){
    document.getElementById("imput").innerHTML="";
}

function delet(){
    let deletar=document.getElementById("imput").innerHTML
document.getElementById("imput").innerHTML=deletar.substring(0,deletar.length -1);
}

function calcular(){
    let resultado=document.getElementById("imput").innerHTML;
    if(resultado){
        document.getElementById("imput").innerHTML=eval(resultado);
    }
    else{
        document.getElementById("imput").innerHTML='nada para calcular';
    }

};