var vegetarians = [
	{
		//index: 1,
		name: 'Veggie Meatballs',
		link: 'https://www.youtube.com/embed/kJrQvTzQpog',
	},
	{
		//index: 2,
		name: 'Veggie Burgers',
		link: 'https://www.youtube.com/embed/2b_LTaBbZw0',
	},
	{
		//index: 3,
		name: 'Veggie Spaghetti',
		link: 'https://www.youtube.com/embed/M6ol_t88T9Q',
	}
]


var meats = [
	{
		//index: 1,
		name: 'Chicken Fettuccine',
		link: 'https://www.youtube.com/embed/5p7avk-9IwE',
	},
	{
		//index: 2,
		name: 'Beef Stroganoff',
		link: 'https://www.youtube.com/embed/2J482y8WVdo',
	},
	{
		//index: 3,
		name: 'Fish and Chips',
		link: 'https://www.youtube.com/embed/I8ckIq2-j0k',
	}
]




var lottery = Math.floor(Math.random()*3 + 1);

//$('.recipeName').append(meats[lottery-1].name);
//$('.recipeLink').attr('src', meats[lottery-1].link);

function showMeat(){
	$('.main').append("<div class = 'row text-center'><div class = 'col-md-12'><h3 class = 'recipeName'></h3><iframe class = 'recipeLink'></iframe></div></div>");
	$('.recipeName').text('Recipe: ' + meats[lottery-1].name);
	$('.recipeLink').attr('src', meats[lottery-1].link);
}

function showVeggie(){
	$('.main').append("<div class = 'row text-center'><div class = 'col-md-12'><h3 class = 'recipeName'></h3><iframe class = 'recipeLink'></iframe></div></div>");
	$('.recipeName').text('Recipe: ' + vegetarians[lottery-1].name);
	$('.recipeLink').attr('src', vegetarians[lottery-1].link);
}

function showMain(){

}
$('#meat').on('click', showMeat());
$('#veggie').on('click', showVeggie());

$('button').on('click', function(){
	//event.preventDefault();
	var id = this.id;
	if(id === 'veggie'){
		//console.log('veggie');
		$('.main').empty();
		showVeggie();
	}else if(id === 'meat'){
		//console.log('meat');
		$('.main').empty();
		showMeat();
	}
}); 


