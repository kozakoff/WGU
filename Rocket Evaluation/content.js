// Copyright (c) 2018 by Steve Kozakoff. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) 
{
	console.log("Message recieved!");
	
	//document.activeElement.addEventListener('keyup', (event) => {
	//	  const keyName = event.key;
	//	  console.log('keypress event with ' + 'key: ' + keyName);
	//});
	
	document.activeElement.focus();
	
	if(document.activeElement.value != "")
	{
		document.activeElement.value = msg.text + '\n\n' + document.activeElement.value;
	}
	else
	{
		document.activeElement.value = msg.text;
	}
	
	var e = new Event("keyup");
	e.key = "a";
	e.keyCode = e.key.charCodeAt(0);
	e.which = e.keyCode;
	e.altKey = false;
	e.ctrlKey = false;
	e.shiftKey = false;
	e.metaKey = false;
	e.bubbles = true;
	document.activeElement.dispatchEvent(e);
	//document.activeElement.change();
	//let input = document.getElementById("name");let keyboard = Keysim.Keyboard.US_ENGLISH;let ctrl_shift_enter = new Keysim.Keystroke(  Keysim.Keystroke.CTRL | Keysim.Keystroke.SHIFT,  13);keyboard.dispatchEventsForKeystroke(ctrl_shift_enter, input);
	
	document.activeElement.blur();

});



function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() 
{
	//console.log(JSON.stringify(root));
	var loading = true;
	while(loading)
	{
		if(document.querySelector("body"))
		{
			console.log("found body");
	
			loading = false;
			
			try
			{
				var target = document.querySelector('body');
				var observer = new window.MutationObserver(processMutations);
				observer.observe(target, { childList: true });
			}
			catch(e)
			{
				console.log("target is not observable. "+e.message);
			}
		}
	}
}

function processMutations(mutations) 
{
	loading = false;
			
	//#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)
			
	if(document.querySelector("body > app-root > main > app-evaluation-workspace > div > header > div > div > div:nth-child(1) > p:nth-child(3)"))
	{
		var s = document.querySelector("body > app-root > main > app-evaluation-workspace > div > header > div > div > div:nth-child(1) > p:nth-child(3)").innerText;
		chrome.runtime.sendMessage({text: s}, function(response) { console.log("Response: ", response); });
		console.log("content_script says: " + s);
		//break;
	}
	else if(document.querySelector("#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)"))
	{
		var s = document.querySelector("#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)").innerText;
		chrome.runtime.sendMessage({text: s}, function(response) { console.log("Response: ", response); });
		console.log("content_script says: " + s);
	}
	else
	{
		var s = "The loaded content in body doesn't look like an evaluation page: "+target.innerText;
		chrome.runtime.sendMessage({text: s}, function(response) { console.log("Response: ", response); });
		console.log("content_script says: " + s);
	}	
}

try
{
	var target = document.querySelector('body');
	var observer = new window.MutationObserver(processMutations);
	observer.observe(target, { subtree: true, childList: true });
}
catch(e)
{
	console.log("target is not observable. "+e.message);
}

//init();

