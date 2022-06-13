//** Kullanicidan dizi uzunlugunun alinmasi
var password=prompt("Sifrenizi giriniz: ")
var rePassword=prompt("Sifrenizi tekrar giriniz: ")

function passwordControl(password,rePassword){
    var counter=3
    if(password===rePassword){
        document.write("<br><br>"+"Girisiniz basarili.")
    }else{
        while(counter>0){
            document.alert("Hatali giris yapriniz tekrar giriniz")
            password=prompt("Sifrenizi giriniz: ")
            rePassword=prompt("Sifrenizi tekrar giriniz: ")
            if(counter==1){
                document.alert("Giris hakkiniz doldu.")
                
            }
            counter--
        }
    }
    document.write("<br><br>"+"Password: "+password)
    document.write("<br><br>"+"RePassword: "+rePassword)
}

passwordControl(password,rePassword)

