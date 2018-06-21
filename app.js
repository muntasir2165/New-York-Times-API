
function queryAPI() {
	var baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var apiKey = "bd1fb3ec90734d719869c36b2a75df15";
	var queryKey = "trump";
	var beginDate = "1950";
	var endDate = "2018";
	var sortOrder = "newest";
	var page = "1";
	var url  = baseUrl + "?api-key=" + apiKey + "&q=" + queryKey + "?begin_date" 
			+ beginDate + "?end_date=" + endDate + "?sort=" + sortOrder + "?page=" + page;
	console.log(url);
	$.ajax({
		url: url,
		success: function(result) {
			console.log(result);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert("Sorry, invalid request.");
			console.log("textStatus: " + textStatus + " errorThrown: " + errorThrown);
			}
	});
}

queryAPI();