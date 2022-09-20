// Display current date
var currentDate = moment().format('dddd, MMMM DD');
$("#currentDay").html(currentDate);

function timeTracker()
{
    var cTime = moment().format("HH");

    $(".time-block").each(function(){
        var bTime = $(this).attr("id").split("hour")[1];

        if(cTime < bTime)
        {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (cTime === bTime)
        {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present")
        }
        else
        {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
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
$("#hour_8 .description").val(localStorage.getItem("hour_8"));
$("#hour_9 .description").val(localStorage.getItem("hour_9"));
$("#hour_10 .description").val(localStorage.getItem("hour_10"));
$("#hour_11 .description").val(localStorage.getItem("hour_11"));
$("#hour_12 .description").val(localStorage.getItem("hour_12"));
$("#hour_13 .description").val(localStorage.getItem("hour_13"));
$("#hour_14 .description").val(localStorage.getItem("hour_14"));
$("#hour_15 .description").val(localStorage.getItem("hour_15"));
$("#hour_16 .description").val(localStorage.getItem("hour_16"));
$("#hour_17 .description").val(localStorage.getItem("hour_17"));


$(".clearBtn").on("click", function(){
    $(".description").val("");
    window.localStorage.clear();
})

// Calls function
timeTracker();
