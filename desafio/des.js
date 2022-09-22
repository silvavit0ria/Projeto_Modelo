nome= prompt("qual seu nome ? ")
n1= prompt("qual a sua primeira nota :")
n2= prompt("qual a sua segunda nota : ")
soma= parseInt(n1) + parseInt (n2)
media=(soma)/2

if(media>9){
    console.log("OTIMO")

}
else if(media>7){
     console.log("BOM")

}

else if(media>=5){

    console.log("REGULAR")

}
else{ 
    console.log("insuficiente")

}

      console.log(nome,"você sua média foi",media)







