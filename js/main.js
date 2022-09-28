

/*
	WEB 303 Assignment_2 

	Samir Ashok Solanki
*/

$(document).ready(function() {
  console.log("ready!");

function makeHttpRequest(param) {
  //console.log(param);
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", `./${param}.html`);
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; 
    document.getElementById("content").innerHTML = req.responseText;
  }
}

// $("#prospect, #convert, #retain").click(function () {
//   $("#content").animate({top: '0px'}).empty();
//   var id = $(this).attr('id');
//   //console.log(id);
//   makeHttpRequest(id);
//   $("#content").animate({top: '100px'}).fadeIn(2500);
// });

$("#prospect").click(function () {
  $("#content").animate({top: '0px'}).empty();
  var id = $(this).attr('id');
  //console.log(id);
  makeHttpRequest(id);
  $("#content").animate({top: '100px'}).fadeIn(2500);
});

$("#convert").click(function () {
  $("#content").animate({top: '0px'}).empty();
  var id = $(this).attr('id');
  //console.log(id);
  makeHttpRequest(id);
  $("#content").animate({top: '100px'}).fadeIn(2500);
});
$("#retain").click(function () {
  $("#content").animate({top: '0px'}).empty();
  var id = $(this).attr('id');
  //console.log(id);
  makeHttpRequest(id);
  $("#content").animate({top: '100px'}).fadeIn(2500);
});

});