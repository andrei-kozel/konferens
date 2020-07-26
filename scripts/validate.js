/*
 *
 * validate fields
 * if field is empty => insert error message
 * if field is filled => remove error message (if it exists) and continue
 *
 */
function validate(evt) {
  // returns the element that has the ID attribute with the specified value
  var firstname = document.getElementById("field_firstname");
  if (isEmpty(firstname.value)) {
    // create error message
    createErrorMessage("Du måste ange  ett förnamn", firstname);
    // prevent a submit button from submitting a form
    evt.preventDefault();
  } else {
    // remove error message if it exists
    removeErrorMessage(firstname);
  }

  var lastname = document.getElementById("field_lastname");
  if (isEmpty(lastname.value)) {
    // create error message
    createErrorMessage("Du måste ange  ett efternamn", lastname);
    // prevent a submit button from submitting a form
    evt.preventDefault();
  } else {
    // remove error message if it exists
    removeErrorMessage(lastname);
  }

  var email = document.getElementById("field_email");
  if (isEmailValid(email.value)) {
    // create error message
    createErrorMessage("Du måste ange  en epostadress", email);
    // prevent a submit button from submitting a form
    evt.preventDefault();
  } else {
    // remove error message if it exists
    removeErrorMessage(email);
  }

  var organisation = document.getElementById("field_organisation");
  if (isEmpty(organisation.value)) {
    // create error message
    createErrorMessage("Du måste ange  ett organisation", organisation);
    // prevent a submit button from submitting a form
    evt.preventDefault();
  } else {
    // remove error message if it exists
    removeErrorMessage(organisation);
  }

  var optionLecture = document.getElementById("pres_type_1").checked;
  var optionSeminar = document.getElementById("pres_type_2").checked;
  var fieldPresTitle = document.getElementById("radio");
  if (optionLecture || optionSeminar) {
 	if(!isEmpty(fieldPresTitle.value)) {
		removeErrorMessage(fieldPresTitle)
 	} else {
 		// create error message
	    createErrorMessage("Du måste ange  en titel", fieldPresTitle);
	    // prevent a submit button from submitting a form
	    evt.preventDefault();
 	}
  } else {
    // remove error message if it exists
    removeErrorMessage(fieldPresTitle);
  }

  var message = document.getElementById("field_message");
  if (message.value.length > 200) {
    // create error message
    createErrorMessage("Högst 200 tecken", message);
    // prevent a submit button from submitting a form
    evt.preventDefault();
  } else {
    // remove error message if it exists
    removeErrorMessage(message);
  }
}

// return true if field value equals 0
function isEmpty(value) {
  if (value.length === 0) {
    return true;
  } else {
    return false;
  }
}

// return true if field value is not matching the pattern or is empty
function isEmailValid(email) {
  var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  var isValid = pattern.test(email);
  if (!isValid) {
    return true;
  } else {
    return false;
  }
}

// creating error message with class name and style
function createErrorMessage(message, element) {
  removeErrorMessage(element); // remove error message if it exists
  var errorElement = document.createElement("span"); // create span element
  errorElement.className = "pure-form-message error"; // with class names "pure-form-message" and "error"
  errorElement.innerText = message; // with passed text (message)
  errorElement.style.color = "red"; // text color red
  element.parentElement.appendChild(errorElement); // append element to parent
}

// remove error message if it exists
function removeErrorMessage(element) {
  var span = element.parentElement.getElementsByClassName("error"); // find element with class name "error"
  if (span.length > 0) {
    element.parentElement.removeChild(span[0]);
  }
}

var registration_form = document.getElementById("registration_form");
registration_form.addEventListener("submit", validate, false);
