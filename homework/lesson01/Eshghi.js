	function StarWithFor(count) {
    	var string = '';

    	for (i = 0; i < count; i++) {
        	if (i < (count/2)) {
        		string += '*'.repeat( i + 1 ) + "\n" ;
        	}
        	else {
        		string += '*'.repeat(count - i) + "\n" ;
        	}
		}

		console.log('StarWithFor Started');
		console.log(string);
		console.log('StarWithFor Finished');
	}

	function StarWithWhile(count) {
	    var string = "";
	    var i = 0;

	    while (i < count) {
	        if (i < (count/2)) {
        		string += '*'.repeat( i + 1 ) + "\n" ;
        	}
        	else {
        		string += '*'.repeat(count - i) + "\n" ;
        	}
	        i++;
	    }

	    console.log('StarWithWhile Started');
		console.log(string);
		console.log('StarWithWhile Finished');
	}

	function StarWithDoWhile(count) {
	    var string = "";
	    var i = 0;
	    
	    do {
	        if (i < (count/2)) {
        		string += '*'.repeat( i + 1 ) + "\n" ;
        	}
        	else {
        		string += '*'.repeat(count - i) + "\n" ;
        	}
	        i++;
	    }
	    while (i < count)

	    console.log('StarWithDoWhile Started');
		console.log(string);
		console.log('StarWithDoWhile Finished');
	}

	StarWithFor(7);
	StarWithWhile(7);
	StarWithDoWhile(7);