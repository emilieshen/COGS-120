$(document).ready(function() {

	var prev = 0;

	$('#spin').click(function() {

		var rand = Math.floor(Math.random() * 3);

		while (rand === prev) {
			rand = Math.floor(Math.random() * 3);
		}
		prev = rand;

		if (rand === 0) {

        	$('img').attr('src', 'http://lorempixel.com/400/200/food');
        	//prev = 0;
    	}
    	else if (rand === 1) {
    		$('img').attr('src', 'http://lorempixel.com/400/200/food');
    		//prev = 1;
    	}
    	else {
    		$('img').attr('src', 'http://lorempixel.com/400/200/food');
    		//prev = 2;
    	}
	});
})
