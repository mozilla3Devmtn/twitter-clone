// $(document).ready(function(){
	// $('.page-container #tweet-content').on('click' ,function(){
(function(){
// console.log("working JQuery")
	var tweetComposeTextAreas = $('.tweet-compose');
	
	tweetComposeTextAreas.on('focus', function(e){
		$(e.target).css('height', '5em');
		$('.show-on-focus').css('visibility', 'visible');
	});

	// tweetComposeTextAreas.on('blur', function(e){
	// 	$(e.target).css('height', '2.5em');
	// });

	tweetComposeTextAreas.on('keyup', function(e){
		var characterCount = $(e.target).val().length;
			remaining = 140 - characterCount;
			charCount = $('#char-count');
			tweetSubmit = $('#tweet-submit');

		charCount.text(remaining);
		if (remaining < 10) {
			charCount.css('color', 'red');
		} else {
			charCount.removeAttr('style');
		}
		// $('#char-count').text(140 - characterCount);

		if (remaining < 0){
			tweetSubmit.attr('disabled', true);
		} else {
			tweetSubmit.removeAttr('disabled');
		}

	});
	
	var tweetSubmit = $('#tweet-compose .tweet-submit');
	tweetSubmit.on('click', function(e){
		var tweetText = $('tweet-content .tweet-compose');
		tweetClone = $('stream .tweet').first().clone();

		tweetClone.find('.avatar').attr('src', '/img/alagoon.jpg');
		tweetClone.find('.tweet-text').text('tweetText');
		tweetClone.find('.num-retweets').text(0);
		tweetClone.find('.num-likes').text(0);
		tweetClone.find('.users-interact div').empty();


		$('#stream').prepend(tweetClone);
	})

})();