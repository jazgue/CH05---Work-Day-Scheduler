// Display current date
var currentDate = moment().format('dddd, MMMM DD');
$("#currentDay").html(currentDate);
// Gets current hour
var cTime = moment().format("HH");

function timeTracker()
{
    // Compares hour to actual time
    $(".time-block").each(function(){
        var bTime = $(this).attr("id").split("hour")[1];

        if(cTime == bTime)
        {
            $(this).addClass("present");
        }
        else if (cTime > bTime)
        {
            $(this).removeClass("future");
            $(this).addClass("past")
        }
        else if (cTime < bTime)
        {
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
// Button to save data to local storage
$(document).ready(function ()
{
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Sets local storage
        localStorage.setItem(time, text);
    })
})

// Gets item from local storage
$("#9hour .description").val(localStorage.getItem("9"));
$("#10hour .description").val(localStorage.getItem("10"));
$("#11hour .description").val(localStorage.getItem("11"));
$("#12hour .description").val(localStorage.getItem("12"));
$("#13hour .description").val(localStorage.getItem("13"));
$("#14hour .description").val(localStorage.getItem("14"));
$("#15hour .description").val(localStorage.getItem("15"));
$("#16hour .description").val(localStorage.getItem("16"));
$("#17hour .description").val(localStorage.getItem("17"));

// Button to clear data and clear from local storage
$(".clearBtn").on("click", function(){
    $(".description").val("");
    window.localStorage.clear();
})

// Calls function
timeTracker();
