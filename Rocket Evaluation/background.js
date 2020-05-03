// Copyright (c) 2018 by Steve Kozakoff. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

import { CRD } from "./lib/models";
import { setCRDTask } from "./lib/taskUtils";
import * as menuUtils from "./lib/menuUtils";

let thisTask = "";
let gradeTexts = [];
let thisCRD = "";

function init() {
  // Create one test item for each context type.
  let aspect;
  let contexts = ["editable"];

  gradeTexts = [];
  thisCRD = "";

  if (thisTask != "") {
    let task = setCRDTask(thisTask, CRD);

    if (task != null) {
      if (task.crd != null) {
        menuUtils.createMenuForTask(task);
        thisCRD = task.crd;
      }
    }

    const n2 = menuUtils.createParentMenu(
      task.name + " Aspects",
      contexts,
      "n2"
    );

    for (let i = 0; i < task.aspects.length; i++) {
      aspect = task.aspects[i];
      if (aspect.grades.length > 0) {
        let id = "m_" + i;
        const menuItem = chrome.contextMenus.create({
          title: aspect.name,
          parentId: n2,
          contexts: contexts,
          id: id,
        });
        menuUtils.createSubMenu(aspect, id, gradeTexts, contexts);
      }
    }
  }
  task = CRD.find((model) => model.name == "Sources");
  const n3 = menuUtils.createParentMenu(task.name, contexts, "n3");
  aspect = task.aspects[0];
  menuUtils.createSubMenu(aspect, n3, gradeTexts, contexts);

  task = CRD.find((model) => model.name == "CI Referral");
  const n5 = menuUtils.createParentMenu(task.name, contexts, "n5");
  aspect = task.aspects[0];
  menuUtils.createSubMenu(aspect, n5, gradeTexts, contexts);

  let cc = chrome.contextMenus.create({
    title: "Clear Cache and Reload",
    contexts: ["all"],
    id: "cc",
  });
}

chrome.runtime.onMessage.addListener((req, sender, res) => {
  console.log("background_script heard: " + req.text);

  if (thisTask != req.text) {
    thisTask = req.text;
    chrome.contextMenus.removeAll(init);
  }
  return true;
});

// Get the date formatted like "MM/DD/YYYY:"
function dateToDDMMYYYY(date) {
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  return (m <= 9 ? "0" + m : m) + "/" + (d <= 9 ? "0" + d : d) + "/" + y + ": ";
}

// A onclick callback function.
function onClick(info, tab) {
  console.log("info: " + JSON.stringify(info));
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    //console.log('tabs: ' + JSON.stringify(tabs));
    if (info.menuItemId == "n1") {
      chrome.tabs.sendMessage(tabs[0].id, { text: dateToDDMMYYYY(new Date()) });
    } else if (info.menuItemId == "crd" && thisCRD != "") {
      chrome.windows.create({
        url: thisCRD,
        type: "normal",
        width: screen.availWidth * 0.5,
        height: screen.availHeight,
        top: 0,
        left: 0,
      });
    } else if (info.menuItemId == "cc") {
      //Clear the browser cache
      chrome.tabs.sendMessage(tabs[0].id, { cc: true }); //, function(response) {}
      chrome.browsingData.remove(
        {
          since: 0,
          originTypes: { unprotectedWeb: true },
          origins: ["https://ema.wgu.edu"],
        },
        {
          appcache: true,
          cache: true,
          cacheStorage: false,
          cookies: false,
          downloads: false,
          fileSystems: false,
          formData: false,
          history: false,
          indexedDB: false,
          localStorage: false,
          pluginData: false,
          passwords: false,
          serviceWorkers: false,
          webSQL: false,
        },
        () => {
          chrome.tabs.reload({ bypassCache: true });
          console.log("Finished clearing cache!");
        }
      );
    } else {
      for (let x = 0; x < gradeTexts.length; x++) {
        if (info.menuItemId == gradeTexts[x].id) {
          chrome.tabs.sendMessage(tabs[0].id, { text: gradeTexts[x].title }); //No more dates as of 07/19/2019
          break;
        }
      }
    }

    if (chrome.runtime.lastError) {
      // Something went wrong
      console.log("Whoops.. " + chrome.runtime.lastError.message);
    }
  });
}

chrome.contextMenus.onClicked.addListener(onClick);
