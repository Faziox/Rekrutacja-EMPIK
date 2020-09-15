// Scrypt odpowiedzialny za sprawdzenie, czy użytkownik używa IE. Następnie dodanie odpowiedniego skryptu

const boxMain = document.getElementById("boxMain")
const boxStyle = document.getElementsByTagName("style")

function chackWEB(){
if (navigator.appVersion == "5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; SLCC2; Media Center PC 6.0; Creative AutoUpdate v1.41.07; Zoom 3.6.0; rv:11.0) like Gecko") {
    boxMain.src = "scripts/main2.js"
    boxStyle[0].innerHTML = 'svg{ height: 70vh;  min-width: 43% ;transition: width 3s; transition: height 3s; }'

} 
else {
    boxMain.src = "scripts/main.js"
}
}

chackWEB()