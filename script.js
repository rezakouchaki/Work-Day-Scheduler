// GIVEN I am using a daily planner to create a schedule
//step1:
// WHEN(user) I open the planner
// THEN(developer) the current day is displayed at the top of the calendar

    var currentDay = document.getElementById("currentDay");
    currentDay.textContent = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
    document.getElementById('currentDay').style = ('text-align: center;');

    //step2:
    // WHEN(user) I scroll down
    // THEN(developer) I am presented with time blocks for standard business hours







    //step3:
    // WHEN(user) I view the time blocks for that day
    // THEN(developer) each time block is color-coded to indicate whether it is in the past, present, or future
  /* var timeColorCode = document.querySelectorAll('.time-block');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    if (hours < 'dataset-number') {
        timeColorCode.addClass('past');*/

      
      
        var currentHour = dayjs().hour();
  var dayTime = document.querySelectAll(dataset.number);
  var colorCode = document.querySellectAll('.time-block');
    (setColor) => {
          if (currentHour < dayTime) {
              colorCode.setAttribute('.past');
          }
      }

      
      
      
      
      

    
    
    //step4:
    // WHEN (user)I click into a time block
    // THEN (developer)I can enter an event
   /* var toDo = document.querySelectorAll('.description').value;
    var saveButtonEl = document.querySelectorAll('.saveBtn');
    saveInput = function() {
        localStorage.setItem('.description', toDo);
        
      };
    saveButtonEl.addEventListener('click', saveInput)*/
      
      
      
      

    //step5:
    // WHEN (user)I click the save button for that time block
    // THEN (developer)the text for that event is saved in local storage

    //step6:
    // WHEN(user) I refresh the page
    // THEN (developer)the saved events persist
    