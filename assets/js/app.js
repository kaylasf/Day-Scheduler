
 
$(document).ready(function() {


//time variables
var now = moment().format('YYYY MM DD')
var hour = moment().format('h')
var dateDisplay = moment(now).format('LL')
console.log(hour)

var time = $('.time')



for( var i = 0 ; i <= time.length -1; i++){
console.log(time[i].innerHTML)

    if(time[i].innerHTML === hour){
        console.log('yellow!')
        var current = time[i].innerHTML
        $(`.${current}`).addClass('present')
    }

    //  if(time[i].innerHTML < hour){
    //     console.log(time[i])
    //     $(`.${time[i].innerHTML}`).addClass('past')
    // }

    // if(time[i].innerHTML > hour) {
    //     console.log("hi")
    //     $(`.${time[i].innerHTML}`).addClass('past')
    // }

}




//document on load- display notes thatre saved in local storage

// on click , save notes to local storage 


$( ".save" ).click(function() {
// console.log($(this).parent().siblings("textarea").val())
// console.log($(this).attr("id"))
var userInput = $(this).parent().siblings("textarea").val()
var time = $(this).attr("id")
localStorage.setItem(time, userInput)

});


function init(){
    $('#currentDay').append(dateDisplay)
    $('.8').val(localStorage.getItem("8"))
    $('.9').val(localStorage.getItem("9"))
    $('.10').val(localStorage.getItem("10"))
    $('.11').val(localStorage.getItem("11"))
    $('.12').val(localStorage.getItem("12"))
    $('.1').val(localStorage.getItem("1"))
    $('.2').val(localStorage.getItem('2'))
    $('.3').val(localStorage.getItem("3"))
    $('.4').val(localStorage.getItem("4"))
    $('.5').val(localStorage.getItem("5"))
}
 init()

})