function Validate()
{
	var pw = document.getElementById("password").value;
	var pw2 = document.getElementById("password2").value;
	
	if (pw !== pw2)
	{
		alert ("the passwords entered don't match");
	}
	else if (pw.length < 8)
	{
		alert ("the passwords are not at least 8 characters long");
	}
	else
	{
		alert ("passwords validated");
	}
}
