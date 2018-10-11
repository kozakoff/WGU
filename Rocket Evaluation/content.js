// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) 
{
	console.log("Message recieved!");
	document.activeElement.value = msg.text + document.activeElement.value;
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
			//if(document.querySelector("body > app-root").innerText == 'Loading...')
			//{
			//	console.log('Loading...');
			//	await sleep(1000);	
			//}
			//else
			//{
			//	loading = false;
			//	if(document.querySelector("body > app-root > main > app-evaluation-workspace > div > header > div > div > div:nth-child(1) > p:nth-child(3)"))
			//	{
			//		var s = document.querySelector("body > app-root > main > app-evaluation-workspace > div > header > div > div > div:nth-child(1) > p:nth-child(3)").innerText;
			//		chrome.runtime.sendMessage({text: s}, function(response) { console.log("Response: ", response); });
			//		console.log("content_script says: " + s);
			//	}
			//	else
			//	{
			//		console.log("The loaded content in body > app-root doesn't look like an evaluation page.");
			//	}
			//}
			
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
		//else
		//{
		//	loading = false;
		//}
	}
}

function processMutations(mutations) 
{
	//mutations.forEach(
	//	function(mutation)
	//	{
	//		console.log(JSON.stringify(mutation.addedNodes));
			//if(target.innerText == 'Loading...')
			//{
				//console.log('Taking a break...');
				//chrome.runtime.sendMessage({text: 'Taking a break...'}, function(response) { console.log("Response: ", response); });
				//chrome.runtime.sendMessage({text: 'One second later'}, function(response) { console.log("Response: ", response); });
				//console.log('One second later');
			//}
			//else
			//{
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
					//chrome.runtime.sendMessage({text: s}, function(response) { console.log("Response: ", response); });
					console.log("content_script says: " + s);
				}	
			//}
	//	}
	//);
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

