$(document).ready(function() {
    //  GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
      $.get("/api/user_data").then(function(data) {
        $(".pdf-name").text(data.pdf);
    });
  });
  });