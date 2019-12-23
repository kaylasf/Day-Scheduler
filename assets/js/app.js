//time variables
var now = moment().format('YYYY MM DD')
var hour = moment().format('h')
var dateDisplay = moment(now).format('LL')
console.log(hour)

var time = $('.time')
console.log(time)

$('#currentDay').append(dateDisplay)