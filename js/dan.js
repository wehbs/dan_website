(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".parallax").parallax();

    // Prevents form from submitting on enter and instead brings you down to the next input field
    $("form input").keydown(function(e) {
      if (e.keyCode == 13) {
        var inputs = $(this)
          .parents("form")
          .eq(0)
          .find(":input");
        if (inputs[inputs.index(this) + 1] != null) {
          inputs[inputs.index(this) + 1].focus();
        }
        e.preventDefault();
        return false;
      }
    });

    // Contact Form
    $("#contactForm").submit(function(event) {
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/k4kkp9uc",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#contactForm").serialize(),
        success: function() {
          console.log("Your form was successfully received!");
        },
        error: function() {
          console.log("Failure. Try again.");
        }
      });
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
