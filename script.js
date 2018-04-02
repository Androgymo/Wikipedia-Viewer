//Grab the search query when the user submits the form.

$(function(){
	$("#search").click(function(){
		//the value entered into the search box
		var keyword = $(".keyword").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ keyword +"&format=json&callback=?";

		$.ajax({
	        type: "GET",
	        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ keyword +"&format=json&callback=?",
	        contentType: "application/json; charset=utf-8",
	        async: false,
	        dataType: "jsonp",
	        success: function (data, textStatus, jqXHR) {
	            return $("#results").html(data);
	        },
	        error: function (errorMessage) {
	        	console.log(ERROR);
	        }

		})
	})
})


//Send this query to Wikipedia.
//Display the results on the page.