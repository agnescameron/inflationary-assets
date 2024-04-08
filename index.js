function toggleAbout() {
	if($("#about").is(':visible')){
		$("#about").hide()
		$("#toggle-about").html('about +')
	}

	else {
		$("#about").show()
		$("#toggle-about").html('-')
	}
}

$( document ).ready(function() {
	$("#toggle-about").click(toggleAbout)
});