function rubahWarnaJudul() {
	document.getElementById("judul").style.color="red"
}

function rubahWarnaNama() {
	var elements = document.getElementsByClassName("nama")
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color="green"
	}
}

function cocokkanPassword() {
	var passBaru = document.getElementById("passBaru").value
	var passBaruConfirm = document.getElementById("passBaruConfirm").value

	if (passBaru !== passBaruConfirm) {
		console.log("password tidak cocok")
		document.getElementById("passBaruConfirm").style.border = "1px solid red"
	}else{
		console.log("password sudah cocok")
		document.getElementById("passBaruConfirm").style.border = "1px solid green"
	}
}