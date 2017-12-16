$(function () {
	$("#add").on("click", function (e) {
		e.preventDefault();
		var val = $("input").val();
		if (val !== '') // Prevent from submit when input is empty 
		{
			var elem = $("<li></li>").text(val);
			$(elem).append("<button class='rem'>X</button>");
			$("#mylist").append(elem);
			$("input").val(""); // Clear the input
			$(".rem").on("click", function () {
				$(this).parent().remove();
			});
		}
	});
});
