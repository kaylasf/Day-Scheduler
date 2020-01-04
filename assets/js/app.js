//time variables
var now = moment().format('YYYY MM DD')
var hour = moment().format('h')
var dateDisplay = moment(now).format('LL')
console.log(hour)

var time = $('.time')

for( var i = 0 ; i <= time.length -1; i++){

    if(time[i].innerHTML === hour){
        var current = time[i].innerHTML
        $(`.${current}`).addClass('present')
    }

     if(time[i].innerHTML < hour){
        console.log(time[i])
        $(`.${time[i].innerHTML}`).addClass('past')
    }
    if(time[i].innerHTML > hour) {
        console.log("hi")
        $(`.${time[i].innerHTML}`).addClass('past')
    }


}





$('#currentDay').append(dateDisplay)

//document on load- display notes thatre saved in local storage

// on click , save notes to local storage 


$( ".save" ).click(function() {
console.log("hi")


});

