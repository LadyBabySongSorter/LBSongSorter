$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#E3016D");
	},function() {
		$(this).css("background-color", "#E3016D");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#E3016D");
	}, function() {
		$(this).css("background-color", "#E3016D");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
