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
	        	var link = info[3];
	        	        	 
	       		for(var i = 1; i < name.length; i++){
	       			for(var j = 1; j < description.length; j++){
	       				for(var k = 1; k < link.length; k++){
	       				if (i === j && i === k){
	       					$(".results").append("<a href=" + link[k] + " " + "target='_blank' rel='reopener'><div class='info'>" + name[i] + "</a><br> " + description[j] + "</div><br>");
	       					
	     	       		}
	     	       	}	
			
			}	}
	        },
	        	
	        error: function (errorMessage){
	        	console.log(ERROR);
	        }

		})
	})
})


//Display the results on the page.