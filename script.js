//Grab the search query when the user submits the form.

$(function(){
	$("#search").click(function(){
		event.preventDefault(); //Prevents the page from refreshing
		var keyword = $(".keyword").val(); //stores the value entered into the search box

		$.ajax({ //pulling the api information
	        type: "GET",
	        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ keyword +"&format=json&callback=?",
	        contentType: "application/json; charset=utf-8",
	        async: false,
	        dataType: "json",
	        success: function (data, textStatus, jqXHR) {
	        	var obj = JSON.stringify(data); //turns object into a string
	        	var info = JSON.parse(obj);

	        	var name = info[1];
	        	var description = info[2]
	        	var link = info[3]

	        	$(".results").html("<div>" + name[i] + "</div><br>");
	        	$("<br>").after(".results");
	        	$(".results").append("<div>" + description[j] + "</div><br>");
	        	$("<br>").after(".results");
	        	        	 
	       		for(var i = 0; i < name.length; i++){
	       			for(var j = 0; j < description.length; j++){
	       				if(i === j){
	       					$(".results").html("<div>" + name[i] + " <br> " + description[j] + "</div>");
	       					console.log(name[i] + " " + description[j]);
	       				}
	       			}
				}
	        },
	        	
	        error: function (errorMessage){
	        	console.log(ERROR);
	        }

		})
	})
})


//Display the results on the page.