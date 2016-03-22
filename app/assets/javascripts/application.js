// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

//alert("Page is not available at this time.")

function alertUser() {
  alert("Page is not available at this time. Please check back later.");
}

window.onload=function(){
  var notready = document.getElementsByClassName('incomplete');
  for (var i = 0; i < notready.length; i++) {
    notready[i].addEventListener('click', alertUser, false);
  }
};
