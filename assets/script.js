//Day Time Scheduller
//setting real-time date and time with dayjs
var currentHour = dayjs().hour()
console.log(currentHour)

$(function () {
  $("#currentDay").text("It is currently:  " + dayjs().format("DD-MMM-YY  T-HH:mm"))
  //this function save notes we add in the text area into the local storage when we click the save button
  $(".saveBtn").on("click", function () {
    var userData = $(this).siblings(".description").val()
    var timeBlock = $(this).parent().attr("id").split("-")[1]
    console.log(userData, timeBlock)
    localStorage.setItem(timeBlock, userData)
  })
//we loop through the time slots to deside if they are past,present or future and color code them with css ids
  for (let i = 9; i <= 17; i++) {
    var storedValue = localStorage.getItem(i)
    $("#hour-" + i).children(".description").val(storedValue)
    if (i < currentHour) {
      $("#hour-" + i).children(".description").addClass("past")
    } else if (i == currentHour) {
      $("#hour-" + i).children(".description").addClass("present")
    } else {
      $("#hour-" + i).children(".description").addClass("future")
    }
  }
});

$(".saveBtn").on("click", function () {
  var userData = $(this).siblings(".description").val()
  var timeBlock = $(this).parent().attr("id").split("-")[1]
  console.log(userData, timeBlock)
  localStorage.setItem(timeBlock, userData)
});

