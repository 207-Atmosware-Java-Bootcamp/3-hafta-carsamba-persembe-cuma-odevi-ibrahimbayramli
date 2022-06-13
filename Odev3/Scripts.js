//** Kullanicidan dizi uzunlugunun alinmasi
var myNum=Number(prompt("Bir sayi giriniz: "))

// var myNum=10

function signControl(num){
    if(num>0) {
        document.write("<br><br>"+num+" sayisi pozitiftir.")
    }
    else if(num==0){ 
        document.write("<br><br>"+num+" sayisi sifirdir.")
    }
    else {
        document.write("<br><br>"+num+" sayisi negatiftir.")
    }
}

signControl(myNum)