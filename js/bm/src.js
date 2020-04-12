$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#B2226A");
	},function() {
		$(this).css("background-color", "#E3016D");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#B2226A");
	}, function() {
		$(this).css("background-color", "#000");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
