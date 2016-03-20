$('form').on('submit', function(e){
	e.preventDefault();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent($('#search').val()).replace(/%20/g, '+'),
		maxResults: 1,
		order: 'viewCount',
		publishedAfter: '2015-01-01T00:00:00Z'
	});
	request.execute(function(response){
		//console.log(response);
		var results = response.result;
		$.each(results.items, function(index,item){
			$('#results').append(item.id.videoId+' '+item.snippet.title+'<br>');
		})
	})
})



function init(){
	gapi.client.setApiKey('AIzaSyDgCqI74Acb4UY7GPhZ3-Sz8jal_F2OwKE');
	gapi.client.load('youtube', 'v3', function(){
		//yt api is ready
	})
}