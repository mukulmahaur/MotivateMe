document.addEventListener("DOMContentLoaded",function(){
	
	function isEmpty(obj) {
		for(var prop in obj) {
			if(obj.hasOwnProperty(prop))
				return false;
		}
		return true;
	}

	function doStuff(thisthing){
		document.getElementById("takedate").style.display = "none";
		document.getElementById("showdate").style.display = "block";
		var value = new Date(thisthing);
		setInterval(function(){
			let temp = Date.now();
			var n = ((temp - value.getTime())/31556952000).toFixed(9);
			var int = Math.floor(n);
			var baadka = "."+((n-int).toFixed(9).toString()).split(".")[1];
		    document.getElementById("kitnabefore").innerHTML = int;
		    document.getElementById("kitnaafter").innerHTML = baadka;
		},100);
		}

	chrome.storage.local.get('thedate', function(result) {
		if(!isEmpty(result.thedate)){
			doStuff(result.thedate);
		}
	});

	document.querySelector('button').addEventListener('click',onclick,false)
	function onclick() {
		var input = document.getElementById("left").value;
		if(input){
			doStuff(input);
			chrome.storage.local.set({'thedate': input}, function() {
			});
		}
	}
}, false)