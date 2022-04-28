let userName = prompt("Adiniz Nedir?")
let myName = document.querySelector("#myName")

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var date = date.getDay();
    
    if (date == "1") {
        date = "Pazartesi";
    }
    if (date == "2") {
        date = "Sali";
    }
    if (date == "3") {
        date = "Carsamba";
    }
    if (date == "4") {
        date = "Persembe";
    }
    if (date == "5") {
        date = "Cuma";
    }
    if (date == "6") {
        date = "Cumartesi";
    }
    if (date == "7") {
        date = "Pazar";
    }
    var session = "AM";
    if(h == 0){
        h = 12;
    } 
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;  
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClock").innerText = time + " " + date;
    document.getElementById("myClock").textContent = time + " " + date;
    setTimeout(showTime, 1000);
}
showTime();

console.log(`userName.length>0 ${userName}`)

myName.innerHTML = `${userName}`

