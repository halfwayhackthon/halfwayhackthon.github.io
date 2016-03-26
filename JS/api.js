//Helper Function: 
//generate random index 
function randomIndex(){
	return Math.floor(Math.random()*30);
}

//Helper Function: 
//sorts API responses into an array objects : [{title: "title", src: "link"}]
function sortedResponse(arr){
	var results = [];
	arr.forEach(function(item){
		results.push({title: item.snippet.title, src: item.id.videoId});
	})
	return results;
}
//Helper Function:
//creates and append elements with randomly selected values of API response.
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

//Helper Function:
// inserts a back button that takes user back to main page.
function backButton(){
	var back = document.getElementById('contents');
	back.insertAdjacentHTML('beforeend', "<div class ='row text-center'><a class='btn btn-default' role = 'button' href='index.html'>BACK</a><div>");
}

// document.getElementById('test').addEventListener('click',function(e){
// 	e.preventDefault();
// 	$('.main').empty();
// 	var request = gapi.client.youtube.search.list({
// 		part : ' snippet',
// 		type: 'video',
// 		q: encodeURIComponent('BigBang Music Video').replace(/%20/g, '+'),
// 		maxResults: 20,
// 		order: 'viewCount',
// 		publishedAfter: '2015-01-01T00:00:00Z'
// 	});

// 	request.execute(function(response){
// 		var apiResponse = response.result.items;
// 		var titleAndSourceArray = sortedResponse(apiResponse);
// 		renderDOM(titleAndSourceArray);
// 		backButton();
// 	})
// })

//Click Handler for Salad button
document.getElementById('salad').addEventListener('click', function(e){
	e.preventDefault();
	$('.main').empty();

	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('salad recipe').replace(/%20/g, '+'),
		maxResults: 30,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		var apiResponse = response.result.items;
		var titleAndSourceArray = sortedResponse(apiResponse);
		console.log(titleAndSourceArray.length);
		renderDOM(titleAndSourceArray);	
		backButton();
	})
})

//Click Handler for soup Button
document.getElementById('soup').addEventListener('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('soup recipe').replace(/%20/g, '+'),
		maxResults: 30,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		var apiResponse = response.result.items;
		var titleAndSourceArray = sortedResponse(apiResponse);
		console.log(titleAndSourceArray.length);
		renderDOM(titleAndSourceArray);	
		backButton();	
	})
})

//Click handler for steak button
document.getElementById('steak').addEventListener('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('steak recipe').replace(/%20/g, '+'),
		maxResults: 30,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		var apiResponse = response.result.items;
		var titleAndSourceArray = sortedResponse(apiResponse);
		renderDOM(titleAndSourceArray);	
		backButton();
	})
})

//Click handler for chicken button
document.getElementById('chicken').addEventListener('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('chicken recipe').replace(/%20/g, '+'),
		maxResults: 30,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		var apiResponse = response.result.items;
		var titleAndSourceArray = sortedResponse(apiResponse);
		renderDOM(titleAndSourceArray);	
		backButton();	
	})
})

//Click handler for seafood button
document.getElementById('seafood').addEventListener('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('seafood recipe').replace(/%20/g, '+'),
		maxResults: 30,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		var apiResponse = response.result.items;
		var titleAndSourceArray = sortedResponse(apiResponse);
		renderDOM(titleAndSourceArray);	
		backButton();	
	})
})

//Click handler for dessert button
document.getElementById('dessert').addEventListener('click', function(e){
	e.preventDefault();
	$('.main').empty();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent('easy dessert recipe').replace(/%20/g, '+'),
		maxResults: 30,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		var apiResponse = response.result.items;
		var titleAndSourceArray = sortedResponse(apiResponse);
		renderDOM(titleAndSourceArray);	
		backButton();	
	})
})

function init(){
	gapi.client.setApiKey('AIzaSyDgCqI74Acb4UY7GPhZ3-Sz8jal_F2OwKE');
	gapi.client.load('youtube', 'v3', function(){
		//api is ready
	})
}
