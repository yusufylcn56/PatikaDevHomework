let name = prompt("Lütfen adinizi giriniz :");
const days = ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];


setInterval(function() {
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let hourShow = hour.toString().length == 1 ? "0"+ hour.toString() : hour.toString();
let minuteShow = minute.toString().length == 1 ? "0"+minute.toString() : minute.toString();
let secondShow = second.toString().length == 1 ? "0"+second.toString() : second.toString();
let dayShow = days[date.getDay()];

let timeDay = `${hourShow}:${minuteShow}:${secondShow} ${dayShow}`;
clockDOM.innerText = `${timeDay}`;
}, 1000); 

const nameDOM = document.getElementById("myName");
const clockDOM = document.getElementById("myClock");

nameDOM.innerText =  `${name}`;