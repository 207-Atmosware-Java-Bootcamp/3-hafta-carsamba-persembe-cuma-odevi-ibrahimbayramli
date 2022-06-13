//** Kullanicidan dizi uzunlugunun alinmasi
var celcius=Number(prompt("Santigrad derece giriniz: "))

function result(){
    var retVal=celcius*1.8+32
    document.write("<br><br>"+celcius+"C = "+retVal+"F")
}

result()