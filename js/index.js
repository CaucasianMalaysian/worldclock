$(document).ready(function () {
  // Create two variable with the names of the months and days in an array
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"
  ];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  // Create a newDate() object
  var newDate = new Date();
  // Extract the current date from Date object
  newDate.setDate(newDate.getDate());
  // Output the day, date, month and year    
  $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] +
    ' ' + newDate.getFullYear());

  setInterval(function () {
    // Create a newDate() object and extract the seconds of the current time on the visitor's
    var seconds = new Date().getSeconds();
    // Add a leading zero to seconds value
    $("#sec").html((seconds < 10 ? "0" : "") + seconds);
  }, 1000);

  setInterval(function () {
    // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes value
    $("#min").html((minutes < 10 ? "0" : "") + minutes);
  }, 1000);

  setInterval(function () {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Add a leading zero to the hours value
    $("#hours").html((hours < 10 ? "0" : "") + hours);
  }, 1000);

});

var newYork = moment.tz("2018-03-11 17:40", "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");
var london = newYork.clone().tz("Europe/London");
newYork.format(); // 2014-06-01T12:00:00-04:00
losAngeles.format(); // 2014-06-01T09:00:00-07:00
london.format(); // 2014-06-01T17:00:00+01:00


var timezones = [
  {
    name: 'Knoxville',
    timezone: 'America/NewYork'
  },
  {
    name: 'Los Angeles',
    timezone: 'America/Los_Angeles'
  },
  {
    name: 'Hong Kong',
    timezone: 'Asia/Hong_Kong'
  },
  {
    name: 'Dublin',
    timezone: 'Europe/London'
  },
  {
    name: 'Singapore',
    timezone: 'Asia/Singapore'
  },
  {
    name: 'Dubai',
    timezone: 'Asia/Dubai'
  },
  {
    name: 'Bogata',
    timezone: 'America/Bogota'
  },
  {
    name: 'Sydney',
    timezone: 'Australia/Sydney'
  },
  {
    name: 'Kiev',
    timezone: 'Europe/Kiev'
  },
  {
    name: 'Moscow',
    timezone: 'Europe/Moscow'
  },
  {
    name: 'Brussels',
    timezone: 'Europe/Brussels'
  },
];

var template = $('#timezone').html();
Mustache.parse(template);

var display = function() {
  var content = $('#content');
  content.empty();
  for(var i = 0; i < timezones.length; i++) {
    var tz = timezones[i];
    var m = moment();
    tz.time = m.tz(tz.timezone).format('H:mm:ss');
    tz.when = m.format('dddd');  content.append(Mustache.render(template, tz));
    
  }
}
display();
setInterval(display, 1000000);





// cornify

/*var d=document,j=d.getElementById('__cornify_nodes'),k=null;var files=['https://cornify.com/js/cornify.js','https://cornify.com/js/cornify_run.js'];if(j){cornify_add();}else{k=d.createElement('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(var l=0;l<files.length;l++){j=d.createElement('script');j.src=files[l];k.appendChild(j);}}

setInterval(function() { cornify_add()}, 2000);*/
