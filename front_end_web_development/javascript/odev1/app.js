let userName = prompt("İsminiz: ");
let greeting = document.querySelector("#greeting") 
if(userName == null || userName=='')
greeting.innerHTML=`"?"`

else
greeting.innerHTML=`${userName}`

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var s = date.getSeconds();  

    switch (new Date().getDay()) {
        case 0:
          day = "Pazar";
          break;
        case 1:
          day = "Pazartesi";
          break;
        case 2:
           day = "Salı";
          break;
        case 3:
          day = "Çarşamba";
          break;
        case 4:
          day = "Perşembe";
          break;
        case 5:
          day = "Cuma";
          break;
        case 6:
          day = "Cumartesi";
      }
    
    var time = h + ":" + m + ":" + s + " " +day;
    document.getElementById("clockDisplay").innerText = time;

    
}

showTime();