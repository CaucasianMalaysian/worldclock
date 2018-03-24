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
    tz.time = m.tz(tz.timezone).format('h:mm:ss a');
    tz.when = m.format('dddd');  content.append(Mustache.render(template, tz));
  }
}

display();
setInterval(display, 100);

// cornify

/*var d=document,j=d.getElementById('__cornify_nodes'),k=null;var files=['https://cornify.com/js/cornify.js','https://cornify.com/js/cornify_run.js'];if(j){cornify_add();}else{k=d.createElement('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(var l=0;l<files.length;l++){j=d.createElement('script');j.src=files[l];k.appendChild(j);}}

setInterval(function() { cornify_add()}, 2000);*/
