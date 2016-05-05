getWordList();

function getWordList() {
		var index = list;
		var random = Math.round(Math.random()*index.length) + 1;
		var randomWord = index[random];
		getWordFromUD(randomWord);
}

	function getWordFromUD(word) {
		var link = "http://www.urbandictionary.com/define.php?term=" + word;
		$.getJSON("http://api.urbandictionary.com/v0/define?term=" + word)
  		.done(function( response ) {
  			var getword = window.word = response.list[0].word,
		        word = getword.charAt(0).toUpperCase() + getword.substring(1),
		        definition = response.list[0].definition;
		    $("#js-term").html(word);
		    $("#js-definition").html(definition);
		    $('#js-link').attr("href", link);
  		})
  		.fail(function( error ) {
  			console.log(error);
  			getWordList();
  		})
	}

	$('.js-redo').click(function(e){
		getWordList();
	})

//var random = Math.round(Math.random()*9066201) + 1;
//$.getJSON("http://api.urbandictionary.com/v0/define?defid=" + random