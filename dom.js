function rubahWarnaJudul() {
	document.getElementById("judul").style.color="red"
}

function rubahWarnaNama() {
	var elements = document.getElementsByClassName("nama")
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color="green"
	}
}