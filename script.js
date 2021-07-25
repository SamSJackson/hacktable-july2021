function searchBar() {
	var input = document.getElementById("searchbar").value;
	if (input !== '') {
		var link = "https://www.ecosia.org/search?q=" + input;
		window.open(link, '_blank').focus();
	}
}

function hide(Id) {
    document.getElementById(Id).style.display="none";
}
function show(Id) {
    document.getElementById(Id).style.display=show ? "inline" : "None";
}

function countryShow() {
	let current_location = window.location.href;
	var location = current_location.split("#");
	var country_to_show = location[1];
	show(country_to_show)
}
