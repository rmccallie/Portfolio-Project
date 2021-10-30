// functions to display current date and time
var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY', true));
    setInterval(update, 1000);

function update() {
    $('#currentTime').html(moment().format('LTS'));
}
