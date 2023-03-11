// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs(); // reaches to dayJs to set today as a value
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A')); // changes & displays current day in visible text

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  $(".saveBtn").on("click", function () { // pm click from save button class
      console.log(this); // logs the data in console
      var text = $(this).siblings(".description").val(); // gets input from description class and saves it as "value"
      var time = $(this).parent().attr("id"); // gets the time and saves ID as a "key"

      localStorage.setItem(time, text); // puts input from description and text into local storage and sorts it with key and value
  })
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13")); // 1pm
  $("#hour14 .description").val(localStorage.getItem("hour14")); // 2pm
  $("#hour15 .description").val(localStorage.getItem("hour15")); // 3pm
  $("#hour16 .description").val(localStorage.getItem("hour16")); // 4pm
  $("#hour17 .description").val(localStorage.getItem("hour17")); // 5pm

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

});
