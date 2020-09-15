const boxStyle = document.getElementById("style")


przegladarka = "niezidentyfikowano";
 
if (navigator.appVersion=="5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; SLCC2; Media Center PC 6.0; Creative AutoUpdate v1.41.07; Zoom 3.6.0; rv:11.0) like Gecko") 
{
    document.getElementById("boxMain").src = "scripts/main2.js"

} 
else {
        document.getElementById("boxMain").src = "scripts/main.js"
}

