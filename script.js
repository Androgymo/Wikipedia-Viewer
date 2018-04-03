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
	        	var info = JSON.parse(obj); // removes brackets and quotation marks

	        	for(var i = 0; i < info.length; i++){
	        		for(var j = 0; j < info[i].length; j++){
	        			console.log($(".results").html(info)); 
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