$(document).ready(function(){
	// //alert("JQuery is loaded!");
	
	// var newH1 = $('h1').text('Added this using JQuery');
	// var body = $('body')

	// newH1.appendTo(body);

	// $('.interests').click(function(e){
	// 	console.log();
	// });

	var addToDom = function(photo){
		//create an empty div to place photo in
		var photoPost = $('<div></div>');
		var myImage = $('<img src="' + photo['media']['m']+'"/>')
		var description = $(photo['description']);
		photoPost.append(myImage);
		photoPost.append(description);
		$('body').append(photoPost);
	}

	$.ajax({
		url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
		dataType: 'jsonp',
		success: function(result){
			var photos = result['items'];
			console.log(result);
			for(var i = 0; i < photos.length; i++){
				addToDom(photos[i]);
			}
		}
	});

});