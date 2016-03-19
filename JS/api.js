// function showResponse(response){
// 	var responseString = JSON.stringify(response, '',2);
// 	document.getElementById('response').innerHTML += responseString;
// }

// function onClientLoad(){
// 	gapi.client.load('youtube','v3', onYouTubeApiLoad);	
// }

// function onYouTubeApiLoad(){
// 	gapi.client.setApiKey('AIzaSyDgCqI74Acb4UY7GPhZ3-Sz8jal_F2OwKE');
// 	search();
// }

// function search(){
// 	var request = gapi.client.youtube.search.list({
//         part: 'snippet',
//         q: 'japanese shabu'
//     });
//     request.execute(onSearchResponse);
// }

// function onSearchResponse(response) {
//     showResponse(response);
// }

$('form').on('submit', function(e){
	e.preventDefault();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent($('#search').val()).replace(/%20/g, '+'),
		maxResults: 3,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		console.log(response);
	})
})


function init(){
	gapi.client.setApiKey('AIzaSyDgCqI74Acb4UY7GPhZ3-Sz8jal_F2OwKE');
	gapi.client.load('youtube', 'v3', function(){
		//yt api is ready
	})
}