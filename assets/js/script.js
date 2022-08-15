/** @format */
//global variables
var table = document.querySelector("#table");
var row9 = document.querySelector("#row9");
var row10 = document.querySelector("#row10");
var row11 = document.querySelector("#row11");
var row12 = document.querySelector("#row12");
var row1 = document.querySelector("#row1");
var row2 = document.querySelector("#row2");
var row3 = document.querySelector("#row3");
var row4 = document.querySelector("#row4");
var row5 = document.querySelector("#row5");
var td9 = document.querySelector("#event9");
var td10 = document.querySelector("#event10");
var td11 = document.querySelector("#event11");
var td12 = document.querySelector("#event12");
var td1 = document.querySelector("#event1");
var td2 = document.querySelector("#event2");
var td3 = document.querySelector("#event3");
var td4 = document.querySelector("#event4");
var td5 = document.querySelector("#event5");
var btn = document.querySelectorAll(".btn");

//event listener for buttons!

btn.forEach((element) => {
    element.addEventListener("click", (e) => {
        var td9 = document.querySelector("#event9").value;
      window.localStorage.setItem("9", JSON.stringify(td9));
    var retrievetd9 = localStorage.getItem("9");
    console.log(retrievetd9);
    alert("Event has been saved!");
    });
  });

  //saves the data
  window.onload = () => {
    td9.value = JSON.parse(localStorage.getItem("9"));
  }

  //real time clock
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm a"));
var stringHour = today.format("H");
floor = Math.floor;
hour = floor(stringHour);
console.log(typeof hour);
console.log(hour);


//redefines the value of the hours into military time to make it easier for the color system
row9 = 9;
row10 = 10;
row11 = 11;
row12 = 12;
row1 = 13;
row2 = 14;
row3 = 15;
row4 = 16;
row5 = 17;

//formulate if statement, if it is past current hour, then show up red, if the event will be in the future, green, if it is right now, grey
//9 am
if (hour > row9) {
    td9.classList.add("bg-danger");
}
if (hour < row9) {
    td9.classList.add("bg-success");
}
//10 am
if (hour > row10) {
    td10.classList.add("bg-danger");
}
if (hour < row10) {
    td10.classList.add("bg-success");
}
//11 am
if (hour > row11) {
    td11.classList.add("bg-danger");
} 
if (hour < row11) {
    td11.classList.add("bg-success");
}
//12pm
if (hour > row12) {
    td12.classList.add("bg-danger");
} 
if (hour < row12) {
    td12.classList.add("bg-success");
}
//1 pm
if (hour > row1) {
    td1.classList.add("bg-danger");
}
if (hour < row1) {
    td1.classList.add("bg-success");
}
//2 pm
if (hour > row2) {
    td2.classList.add("bg-danger");
}
if (hour < row2) {
    td2.classList.add("bg-success");
}
//3 pm
if (hour > row3) {
    td3.classList.add("bg-danger");
} 
if (hour < row3) {
    td3.classList.add("bg-success");
}
//4 pm
if (hour > row4) {
    td4.classList.add("bg-danger");
} 
if (hour < row4) {
    td4.classList.add("bg-success");
}
//5pm
if (hour > row5) {
    td5.classList.add("bg-danger");
}
if (hour < row5) {
    td5.classList.add("bg-success");
}
