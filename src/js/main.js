$(document).ready(function(){


	var domain = $(location).attr('hostname');

	if(domain === 'localhost'){
		$('.serving').each(function(){
			var newLink = $(this).attr('href').slice(18);
			$(this).attr('href', newLink);
		});

	}


});
