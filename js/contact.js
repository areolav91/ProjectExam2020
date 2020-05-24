const form = document.querySelector("#contactForm");

var errors = {
	firstname: "Enter your first name",
	lastname: "Enter your last name",
	email: "Enter your email address",
	emailvalid: "Enter a valid email",
	message: "Message too short",
};

var fields = {
	firstname: false,
	lastname: false,
	email: false,
	message: false,
};

form.addEventListener("submit", function (e) {
	e.preventDefault();
});

document.getElementById("firstName").addEventListener("keyup", function () {
	var val = this.value.trim();

	if (val) {
		this.style.outline = "2px solid green";
		document.getElementById("firstNameError").innerHTML = "";
		fields.firstname = true;
	} else {
		this.style.outline = "2px solid red";
		document.getElementById("firstNameError").innerHTML = errors.firstname;
		fields.firstname = false;
	}
});

document.getElementById("lastName").addEventListener("keyup", function () {
	var val = this.value.trim();

	if (val) {
		this.style.outline = "2px solid green";
		document.getElementById("lastNameError").innerHTML = "";
		fields.lastname = true;
	} else {
		this.style.outline = "2px solid red";
		document.getElementById("lastNameError").innerHTML = errors.lastname;
		fields.lasttname = false;
	}
});

document.getElementById("email").addEventListener("keyup", function () {
	var val = this.value.trim();

	if (val) {
		document.getElementById("emailError").innerHTML = "";
		var isValid = validateEmail(val);

		if (isValid) {
			this.style.outline = "2px solid green";
			fields.email = true;
			document.getElementById("invalidEmailError").innerHTML = "";
		} else {
			this.style.outline = "2px solid red";
			fields.email = false;
			document.getElementById("invalidEmailError").innerHTML =
				errors.emailvalid;
		}
	} else {
		this.style.outline = "2px solid red";
		document.getElementById("emailError").innerHTML = errors.email;
		fields.email = false;
	}
});

document.getElementById("message").addEventListener("keyup", function () {
	var val = this.value.trim();

	if (val.length >= 10) {
		this.style.outline = "2px solid green";
		document.getElementById("messageError").innerHTML = "";
		fields.email = true;
	} else {
		this.style.outline = "2px solid red";
		document.getElementById("messageError").innerHTML = errors.message;
		fields.email = false;
	}
});

function checkInputLength(value) {
	const trimmedValue = value.trim();

	if (trimmedValue.length > 0) {
		return true;
	} else {
		return false;
	}
}

function checkMessageLength(value) {
	const trimmedValue = value.trim();

	if (trimmedValue.length >= 10) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	console.log(regEx.test(email));
	return regEx.test(email);
}
