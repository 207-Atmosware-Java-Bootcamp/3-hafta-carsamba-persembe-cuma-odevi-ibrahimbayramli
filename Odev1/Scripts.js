//*? Denklem y=3x1+4x2
//** Kullanicidan dizi uzunlugunun alinmasi
var x1=Number(prompt("x1 degerini giriniz: "))
var x2=Number(prompt("x2 degerini giriniz: "))


function result(num1,num2){
   var retVal=x1*3+x2*4

    document.write("<br><br>"+"x1="+x1+" x2="+x2+" oldugu durumda")
    document.write("<br><br>"+"y=3x1+4x2 denkleminin cozümü y="+retVal)
}

result(x1,x2)