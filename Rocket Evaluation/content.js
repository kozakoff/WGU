// Copyright (c) 2018 by Steve Kozakoff. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) 
{
	console.log("content_script heard: " + msg.text);
	
	if(msg.text != null)
	{
		if(document.activeElement.value != "")
		{
			document.activeElement.value = msg.text + '\n\n' + document.activeElement.value;
		}
		else
		{
			document.activeElement.value = msg.text;
		}
	}
	else if(msg.cc != null)
	{
		var elem = document.createElement('div');
		elem.style.cssText = 'position:fixed; text-align:center; padding-top:150px; padding-right:0px; padding-left:0px; padding-bottom:0px; margin:0; top:0; left:0; width: 100%; height: 100%; background:rgba(255,255,255,0.7);';
		elem.textContent = 'Clearing browser cache...';
		document.body.appendChild(elem);
	}
	return true;
});

//function sleep(ms) 
//{
//  return new Promise(resolve => setTimeout(resolve, ms));
//}

/*
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
*/

function processMutations(mutations) 
{
	loading = false;
			
	//#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)
			
	if(document.querySelector("body > app-root > main > app-evaluation-workspace > div > header > div > div > div:nth-child(1) > p:nth-child(3)"))
	{
		var s = document.querySelector("body > app-root > main > app-evaluation-workspace > div > header > div > div > div:nth-child(1) > p:nth-child(3)").innerText;
		chrome.runtime.sendMessage({text: s});
		console.log("content_script says: " + s);
	}
	else if(document.querySelector("#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)"))
	{
		var s = document.querySelector("#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)").innerText;
		chrome.runtime.sendMessage({text: s});
		console.log("content_script says: " + s);
	}
	else
	{
		var s = "The loaded content in body doesn't look like an evaluation page: "+target.innerText;
		chrome.runtime.sendMessage({text: s});
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

