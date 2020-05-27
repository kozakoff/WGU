// Copyright (c) 2018 by Steve Kozakoff. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  //console.log("content_script heard: " + msg.text);

  if (msg.text != null) {
    const element = document.activeElement;
    if (element.value != "") {
      element.value = msg.text + "\n\n" + document.activeElement.value;
    } else {
      element.value = msg.text;
    }

    const event = new Event("compositionend", {
      bubbles: false,
      composed: false,
    });
    element.dispatchEvent(event);
  } else if (msg.cc != null) {
    const elem = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    elem.style.cssText =
      "position:fixed; text-align:center; padding-top:150px; padding-right:0px; padding-left:0px; padding-bottom:0px; margin:0; top:0; left:0; width: 100%; height: 100%; background:rgba(255,255,255,0.85); font-weight: 900;";
    elem.textContent = "Clearing browser cache and reloading site...";
    img.src = chrome.extension.getURL("images/spinner.gif");
    elem.appendChild(p);
    elem.appendChild(img);
    document.body.appendChild(elem);
  }
});

function processMutations(mutations) {
  loading = false;
  let s;

  //#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)

  if (
    document.querySelector(
      "body > app-root > main > app-evaluation-workspace > div > header > div > div > div:nth-child(1) > p:nth-child(3)"
    )
  ) {
    s = document.querySelector(
      "body > app-root > main > app-evaluation-workspace > div > header > div > div > div:nth-child(1) > p:nth-child(3)"
    ).innerText;
    chrome.runtime.sendMessage({ text: s });
    console.log("content_script says: " + s);
  } else if (
    document.querySelector(
      "#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)"
    )
  ) {
    s = document.querySelector(
      "#tbl_maindata > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > div:nth-child(2)"
    ).innerText;
    chrome.runtime.sendMessage({ text: s });
    console.log("content_script says: " + s);
  } else {
    s =
      "The loaded content in body doesn't look like an evaluation page: " +
      target.innerText;
    chrome.runtime.sendMessage({ text: s });
    console.log("content_script says: " + s);
  }
}

try {
  const target = document.querySelector("body");
  const observer = new window.MutationObserver(processMutations);
  observer.observe(target, { subtree: true, childList: true });
} catch (e) {
  console.log("target is not observable. " + e.message);
}

//init();
