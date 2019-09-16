// Import stylesheets
import './style.css';

// external libraries
import $ from "jquery";
import Mustache from 'mustache';

// Write Javascript code!
var people = [];
var template = $('#people-template').html();

$('#peopleModule').find('button').on('click', function(){
  people.push($('#peopleModule').find('input').val());
  $('#peopleModule').find('input').val('');
  var data = {
    people = people
  };
  $('#peopleModule').find('ol').html(Mustache.render(template, data));
});

$('#peopleModule').find('ol').delegate('i.del', 'click', function(e){
  var $remove = $(e.target).closest('li');
  var i = $('#peopleModule').find('ol').find('li').index($remove);

  $remove.remove();
  people.splice(i, 1);
});