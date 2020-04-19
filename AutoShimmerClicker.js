var autoModsState =  true,
	autoCookieMonsterState = false,
	autoAgronomiconState = false,
	autoGoldenCookieState = true,
	autoWrathCookieState = true,
	autoReindeerState = true,
	autoWrinklerState = 12;

function loadCookieMonster() {
	if (!autoCookieMonsterState) {
		if (Game.ready == 1) {
				Game.LoadMod('https://aktanusa.github.io/CookieMonster/CookieMonster.js');
				autoCookieMonsterState = true;
		} else {
			setTimeout(loadCookieMonster(), 500);
		}
	}
}

function loadAgronomicon() {
	if (!autoAgronomiconState) {
		if (Game.ready == 1) {
				Game.LoadMod('https://bitbucket.org/Acharvak/cookie-clicker-agronomicon/downloads/Agronomicon.js');
				autoAgronomiconState = true;
		} else {
			setTimeout(loadAgronomicon(), 500);
		}
	}
}

var autoGoldenCookie = setInterval(function() {
	if (autoGoldenCookieState) {
		Game.shimmers.forEach(function(shimmer) {
				if (shimmer.type == "golden" && !shimmer.wrath)
					shimmer.pop();
		});
	}
}, 500);

var autoWrathCookie = setInterval(function() {
	if (autoWrathCookieState) {
		Game.shimmers.forEach(function(shimmer) {
				if (shimmer.type == "golden" && shimmer.wrath)
					shimmer.pop();
		});
	}
}, 500);

var autoReindeer = setInterval(function() {
	if (autoReindeerState) {
		Game.shimmers.forEach(function(shimmer) {
				if (shimmer.type == "reindeer")
					shimmer.pop();
		});
	}
}, 1000);

var autoWrinkler = setInterval(function() {
	if (autoWrinklerState == 0) {
		Game.wrinklers.forEach(function(wrinkler) {
			if (wrinkler.type == 0 && wrinkler.sucked > 0)
				wrinkler.hp = 0;
		});
	}
	if (autoWrinklerState > 0) {
		var wrinklerCounter = 0,
			wrinklerMax = undefined;
			
		wrinklers.forEach(function(wrinkler) {
			if (wrinkler.sucked > 0) {
				wrinklerCounter += 1;
			}
			if (wrinkler.type == 0 && (wrinklerMax == undefined || wrinkler.sucked > wrinklerMax.sucked)) {
				wrinklerMax = wrinkler;
			}
		});
		if (wrinklerCounter >= autoWrinklerState && wrinklerMax != undefined) {
			wrinklerMax.hp = 0;
		}
	}
}, 1000);

function switchAutoWrinklerState() {
	switch(autoWrinklerState) {
	  case 12:
		autoWrinklerState = 6;
		break;
	  case 6:
		autoWrinklerState = 0;
		break;
	  case 0:
		autoWrinklerState = -1;
		break;
	  default:
		autoWrinklerState = 12;
	}
}

function displayStates() {
	var text = ""
	text += "Auto Golden Cookie Clicker: " + ((autoGoldenCookieState) ? "on" : "off") + "\n";
	text += "Auto Wrath Cookie Clicker: " + ((autoWrathCookieState) ? "on" : "off") + "\n"; 
	text += "Auto Reindeer Clicker: " + ((autoReindeerState) ? "on" : "off") + "\n"; 
	text += "Auto Wrinkler Clicker: " + autoWrinklerkieState + " wrinklers"
	alert(text);
}
