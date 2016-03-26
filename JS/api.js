//Helper Function: generate random index 
function randomIndex(){
	return Math.floor(Math.random()*20);
}

function sortedResponse(arr){
	var results = [];
	arr.forEach(function(item){
		results.push({title: item.snippet.title, src: item.id.videoId});
	})
	return results;
}

function renderDOM(arr){
	var index = randomIndex();
	var element = document.getElementById('main');
	element.innerHTML = "<div class = 'row text-center'><div class = 'col-md-12' id='contents'></div></div>";
	var titleTag  = document.createElement('h3');
	var titleName = document.createTextNode(arr[index].title);
	titleTag.appendChild(titleName);

	var videoTag = document.createElement('iframe');
	videoTag.setAttribute("src", "https://www.youtube.com/embed/"+arr[index].src);

	var content = document.getElementById('contents');
	content.appendChild(titleTag);
	content.appendChild(videoTag);
}

$('#test').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('BigBang Music Video').replace(/%20/g, '+'),
		maxResults: 20,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});

	request.execute(function(response){
		var apiResponse = response.result.items;
		var titleAndSourceArray = sortedResponse(apiResponse);
		console.log(titleAndSourceArray.length);
		renderDOM(titleAndSourceArray);
		// var result = response.result.items;
		// var index = randomIndex();
	
		// var element = document.getElementById('main');
		// element.innerHTML = "<div class = 'row text-center'><div class = 'col-md-12' id='contents'></div></div>";
		// var titleTag  = document.createElement('h3');
		// var titleName = document.createTextNode(result[index].snippet.title);
		// titleTag.appendChild(titleName);

		// var videoTag = document.createElement('iframe');
		// videoTag.setAttribute("src", "https://www.youtube.com/embed/"+result[index].id.videoId);

		// var content = document.getElementById('contents');
		// content.appendChild(titleTag);
		// content.appendChild(videoTag);
		
	})
})




//render 'back' button on the DOM:
//Click Handler for Salad button
$('#salad').on('click', function(e){
	e.preventDefault();
	$('.main').empty();

	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('salad recipe').replace(/%20/g, '+'),
		maxResults: 20,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		console.log(response);
		var results = response.result;
		var index = randomIndex();
		
		$('.main').append("<div class = 'row text-center'><div class = 'col-md-12'><h3 class = 'recipeName'></h3><iframe class = 'recipeLink'></iframe></div></div>");
		$('.recipeName').text('Recipe: ' + results.items[index].snippet.title);
		$('.recipeLink').attr('src', 'https://www.youtube.com/embed/'+ results.items[index].id.videoId);	
	})
})

//Click Handler for soup Button
$('#soup').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('soup recipe').replace(/%20/g, '+'),
		maxResults: 20,
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

//Click handler for steak button
$('#steak').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('steak recipe').replace(/%20/g, '+'),
		maxResults: 20,
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

//Click handler for chicken button
$('#chicken').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('chicken recipe').replace(/%20/g, '+'),
		maxResults: 20,
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

//Click handler for seafood button
$('#seafood').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('seafood recipe').replace(/%20/g, '+'),
		maxResults: 20,
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

//Click handler for dessert button
$('#dessert').on('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('easy dessert recipe').replace(/%20/g, '+'),
		maxResults: 20,
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
		//api is ready
	})
}
