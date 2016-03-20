// $('form').on('submit', function(e){
// 	e.preventDefault();
// 	var request = gapi.client.youtube.search.list({
// 		part : ' snippet',
// 		type: 'video',
// 		q: encodeURIComponent($('#search').val()).replace(/%20/g, '+'),
// 		maxResults: 1,
// 		order: 'viewCount',
// 		publishedAfter: '2015-01-01T00:00:00Z'
// 	});
// 	request.execute(function(response){
// 		//console.log(response);
// 		var results = response.result;
// 		$.each(results.items, function(index,item){
// 			$('#results').append(item.id.videoId+' '+item.snippet.title+'<br>');
// 		})
// 	})
// })

$('#veggie').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('vegetarian recipe').replace(/%20/g, '+'),
		maxResults: 3,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		//console.log(response);
		var results = response.result;
		$.each(results.items, function(index,item){
			$('.main').append("<div class = 'row text-center'><div class = 'col-md-12'><h3 class = 'recipeName'></h3><iframe class = 'recipeLink'></iframe></div></div>");
			$('.recipeName').text('Recipe: ' + item.snippet.title);
			$('.recipeLink').attr('src', 'https://www.youtube.com/embed/'+item.id.videoId);
			//append(item.id.videoId+' '+item.snippet.title+'<br>');
		})
	})
})


function init(){
	gapi.client.setApiKey('AIzaSyDgCqI74Acb4UY7GPhZ3-Sz8jal_F2OwKE');
	gapi.client.load('youtube', 'v3', function(){
		//yt api is ready
	})
}