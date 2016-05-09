//Helper Function: 
//generate random index
var recipeSearched = 50; 
function randomIndex(){
	return Math.floor(Math.random()*recipeSearched);
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


renderAddButton();
addItemList();	
removeButton();


//insert add Button 
function renderAddButton(){
	var add = document.getElementById('itemList');
	add.insertAdjacentHTML('beforeend', "<div class ='row text-center'><div class='col-md-6 col-md-offset-3'><div class='input-group'><input type='text' class='form-control' placeholder='Enter Item...' id = 'listItem'><span class='input-group-btn'><button class='btn btn-default' type='button' id='add'>ADD</button></span></div></div></div>");
}

//insert empty unordered list
function addItemList(){
	var itemList = document.getElementById('itemList');
	itemList.insertAdjacentHTML('beforeend', "<div class = 'row text-left'><div class='col-md-6 col-md-offset-3'><ul id = 'list'></ul></div></div>")
}


//insert remove button
function removeButton(){
	var remove = document.getElementById('itemList');
	remove.insertAdjacentHTML('beforeend',"<div class = 'row text-center'><button class='btn btn-default' type='button' id='remove'>Remove Checked</button><button class='btn btn-default' type='button' id='removeAll'>Remove All</button></div>");
}

//Let user add to grocery list by pressing Enter
var count = 0;

var userText = document.getElementById('listItem');
	userText.focus();
	userText.onkeyup = function(event){
		if(event.which == 13){
			var text = userText.value;
			if(text.length === 0 || text === ' '){
				return false;
			}
			addToList(document.getElementById('list'),text);
			userText.focus();
			userText.select();
		}
	}

//Manipulate add button to take user input on click
var addButton = document.getElementById('add');
addButton.onclick = function(){

	var text = userText.value;

	if(text.length === 0 || text === ' '){
		return false;
	}

	addToList(document.getElementById('list'), text);
	userText.focus();
	userText.select();
}


//appends li to previous ul
//add checkbox and assign values to li

function addToList(list, text){
	count++;
	var eachItem = document.createElement('li');
	var checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.id = "box" + count;
	checkBox.onclick = strikethrough;

	var span = document.createElement('span');
	span.id = "item" + count;
	span.innerText = text;

	
	eachItem.appendChild(checkBox);
	eachItem.appendChild(span);
	
	list.appendChild(eachItem);	
};

//create strike through effect when checkbox is checked.
function strikethrough(){
	var idNum = this.id.replace("box","");
	var listItem = document.getElementById("item" + idNum);
	if(this.checked){
		listItem.style.textDecoration = "line-through";
	}else{
		listItem.style.textDecoration = "none";
	}
	
}

//manipulate remove button so it will remove selected checkbox on click.
var remove = document.getElementById('remove');
remove.onclick = function(){
	var list = document.getElementById('list'),
		items = Array.prototype.slice.call(list.childNodes),
		item;
		while(item = items.pop()){
			if(item.firstChild&&item.firstChild.checked){
				list.removeChild(item);
				userText.focus();
				userText.select();
			}
		}
}
//manipulate removeAll button to clear all lis.
var removeAll = document.getElementById('removeAll');
removeAll.onclick = function(){
	$('#list').empty();
	userText.focus();
	userText.select();
}

//Click Handler for Salad button
$(document).on('click', '#salad, #soup, #steak, #chicken, #seafood, #dessert', function(e){
	var searchTerms = ['salad recipe','soup recipe','steak recipe', 'chicken recipe', 'seafood recipe', 'dessert recipe'];
	var searchThis = '';
	if(this.id === 'salad'){
		searchThis = searchTerms[0];
	}else if(this.id === 'soup'){
		searchThis = searchTerms[1];
	}else if(this.id === 'steak'){
		searchThis = searchTerms[2];
	}else if(this.id === 'chicken'){
		searchThis = searchTerms[3];
	}else if(this.id === 'seafood'){
		searchThis = searchTerms[4];
	}else if(this.id === 'dessert'){
		searchThis = searchTerms[5];
	}
	e.preventDefault();
	var request = gapi.client.youtube.search.list({
		part : ' snippet',
		type: 'video',
		q: encodeURIComponent(searchThis).replace(/%20/g, '+'),
		maxResults: recipeSearched,
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

// document.getElementById('salad').addEventListener('click', function(e){
// 	e.preventDefault();
// 	$('.main').empty();

// 	var request = gapi.client.youtube.search.list({
// 		part : ' snippet',
// 		type: 'video',
// 		q: encodeURIComponent('salad recipe').replace(/%20/g, '+'),
// 		maxResults: recipeSearched,
// 		order: 'viewCount',
// 		publishedAfter: '2015-01-01T00:00:00Z'
// 	});
// 	request.execute(function(response){
// 		var apiResponse = response.result.items;
// 		var titleAndSourceArray = sortedResponse(apiResponse);
// 		console.log(titleAndSourceArray.length);
// 		renderDOM(titleAndSourceArray);	
// 		backButton();
// 	})
// })

// //Click Handler for soup Button
// document.getElementById('soup').addEventListener('click', function(e){
// 	e.preventDefault();
// 	$('.main').empty();
// 	var request = gapi.client.youtube.search.list({
// 		part : ' snippet',
// 		type: 'video',
// 		q: encodeURIComponent('soup recipe').replace(/%20/g, '+'),
// 		maxResults: recipeSearched,
// 		order: 'viewCount',
// 		publishedAfter: '2015-01-01T00:00:00Z'
// 	});
// 	request.execute(function(response){
// 		var apiResponse = response.result.items;
// 		var titleAndSourceArray = sortedResponse(apiResponse);
// 		console.log(titleAndSourceArray.length);
// 		renderDOM(titleAndSourceArray);	
// 		backButton();	
// 	})
// })

//Click handler for steak button
// document.getElementById('steak').addEventListener('click', function(e){
// 	e.preventDefault();
// 	$('.main').empty();
// 	var request = gapi.client.youtube.search.list({
// 		part : ' snippet',
// 		type: 'video',
// 		q: encodeURIComponent('steak recipe').replace(/%20/g, '+'),
// 		maxResults: recipeSearched,
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

// //Click handler for chicken button
// document.getElementById('chicken').addEventListener('click', function(e){
// 	e.preventDefault();
// 	$('.main').empty();
// 	var request = gapi.client.youtube.search.list({
// 		part : ' snippet',
// 		type: 'video',
// 		q: encodeURIComponent('chicken recipe').replace(/%20/g, '+'),
// 		maxResults: recipeSearched,
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

// //Click handler for seafood button
// document.getElementById('seafood').addEventListener('click', function(e){
// 	e.preventDefault();
// 	$('.main').empty();
// 	var request = gapi.client.youtube.search.list({
// 		part : ' snippet',
// 		type: 'video',
// 		q: encodeURIComponent('seafood recipe').replace(/%20/g, '+'),
// 		maxResults: recipeSearched,
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

// //Click handler for dessert button
// document.getElementById('dessert').addEventListener('click', function(e){
// 	e.preventDefault();
// 	$('.main').empty();
// 	var request = gapi.client.youtube.search.list({
// 		part : ' snippet',
// 		type: 'video',
// 		q: encodeURIComponent('easy dessert recipe').replace(/%20/g, '+'),
// 		maxResults: recipeSearched,
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

function init(){
	gapi.client.setApiKey('AIzaSyDgCqI74Acb4UY7GPhZ3-Sz8jal_F2OwKE');
	gapi.client.load('youtube', 'v3', function(){
		//api is ready
	})
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
