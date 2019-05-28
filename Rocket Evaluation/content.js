// Copyright (c) 2018 by Steve Kozakoff. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) 
{
	console.log("Message recieved!");
	
	if(document.activeElement.value != "")
	{
		document.activeElement.value = msg.text + '\n\n' + document.activeElement.value;
	}
	else
	{
		document.activeElement.value = msg.text;
	}
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
		//chrome.windows.create({url: "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/_layouts/15/Doc.aspx?OR=teams&action=view&sourcedoc={9B19BDAD-29BF-4AED-8717-DC0866705CF5}", type: "popup", width: 800, height: 600});
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

