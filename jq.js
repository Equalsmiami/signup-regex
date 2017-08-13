function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submitButton").click(function() {

  var errorMessage = "";
  var fieldsMissing = "";

  if ($("#email").val() == "") {
      fieldsMissing += "<br>Email";
  }

  if ($("#phone").val() == "") {
      fieldsMissing += "<br>Phone";
  }

  if ($("#password").val() == "") {
      fieldsMissing += "<br>Password";
  }

  if ($("#passwordConfirm").val() == "") {
      fieldsMissing += "<br>Password Confirm";
  }

  if (fieldsMissing != "") {
    errorMessage += "<p>The following field(s) are missing:" + fieldsMissing
  }

  if (isEmail($("#email").val()) == false) {

      errorMessage += "<p>invalid email</p>";

  }
  if ($.isNumeric($("#phone").val()) == false) {
      errorMessage += "<p>invalid phone number</p>"
  }
  if ($("#password").val() != $("#passwordConfirm").val()) {
    errorMessage += "<p>Passwords did not match, please try again.</p>";
  }

  if (errorMessage != "") {
    $("#errorMessage").html(errorMessage);
  } else {
    $("#successMessage").show("slow");
    $("#errorMessage").hide();
  }

});
