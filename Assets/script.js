// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs(); // reaches to dayJs to set today as a value
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A')); // changes & displays current day in visible text
    var dateUpdated = function() { // function to update the page as time changes
      document.getElementById('currentDay').innerHTML = dayjs().format('dddd, MMMM D, YYYY h:mm A'); // day js time format display in html ID
    }
    setInterval(dateUpdated, 1000); // update interval

    $(".saveBtn").on("click", function () { // pm click from save button class
        console.log(this); // logs the data in console
        var text = $(this).siblings(".description").val(); // gets input from description class and saves it as "value"
        var time = $(this).parent().attr("id"); // gets the time and saves ID as a "key"

        localStorage.setItem(time, text); // puts input from description and text into local storage and sorts it with key and value
    })
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));   // 9am
  $("#hour-10 .description").val(localStorage.getItem("hour-10")); // 10am
  $("#hour-11 .description").val(localStorage.getItem("hour-11")); // 11am
  $("#hour-12 .description").val(localStorage.getItem("hour-12")); // 12pm
  $("#hour-13 .description").val(localStorage.getItem("hour-13")); // 1pm
  $("#hour-14 .description").val(localStorage.getItem("hour-14")); // 2pm
  $("#hour-15 .description").val(localStorage.getItem("hour-15")); // 3pm
  $("#hour-16 .description").val(localStorage.getItem("hour-16")); // 4pm
  $("#hour-17 .description").val(localStorage.getItem("hour-17")); // 5pm

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

   function timeChecker() { // function to compare time current time to time on table
    var currentHour = dayjs().hour(); // getting the current hour and making it a value to compare against
    // console.log(currentHour); 

    $('.time-block').each(function() { // gets the class in timeblock and ->
      var blockHour = parseInt($(this).attr('id').split('-')[1]); // sets the hour id and splits off the number, saves it as a variable value
      // console.log(blockHour); 

      if (blockHour===currentHour) { // present
      $(this).removeClass('past'); // removes past css class if present
      $(this).removeClass('future'); // removes future css class if present
      $(this).addClass('present'); // adds present css class
      } else if (blockHour<currentHour) { // past
      $(this).removeClass('future'); // removes future css class if present
      $(this).removeClass('present'); // removes present css class if present
      $(this).addClass('past');  // adds past css class
      } else { // future
      $(this).removeClass('present'); // removes present css class if present
      $(this).removeClass('past'); // removes past css class if present
      $(this).addClass('future'); // adds future css class
      }
    })
  }
  timeChecker(); // executes function
});
