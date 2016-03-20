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

function randomIndex(){
	return Math.floor(Math.random()*10);
}

$('#veggie').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('vegetarian recipe').replace(/%20/g, '+'),
		maxResults: 10,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		//console.log(response);
		var results = response.result;
		var index = randomIndex();
		console.log(index);
		$('.main').append("<div class = 'row text-center'><div class = 'col-md-12'><h3 class = 'recipeName'></h3><iframe class = 'recipeLink'></iframe></div></div>");
		$('.recipeName').text('Recipe: ' + results.items[index].snippet.title);
		$('.recipeLink').attr('src', 'https://www.youtube.com/embed/'+ results.items[index].id.videoId);	
	})
})

$('#meat').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('dinner recipe').replace(/%20/g, '+'),
		maxResults: 10,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		//console.log(response);
		var results = response.result;
		var index = randomIndex();
		$('.main').append("<div class = 'row text-center'><div class = 'col-md-12'><h3 class = 'recipeName'></h3><iframe class = 'recipeLink'></iframe></div></div>");
		$('.recipeName').text('Recipe: ' + results.items[index].snippet.title);
		$('.recipeLink').attr('src', 'https://www.youtube.com/embed/'+ results.items[index].id.videoId);	
	})
})


function init(){
	gapi.client.setApiKey('AIzaSyDgCqI74Acb4UY7GPhZ3-Sz8jal_F2OwKE');
	gapi.client.load('youtube', 'v3', function(){
		//yt api is ready
	})
}