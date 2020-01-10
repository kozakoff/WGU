// Copyright (c) 2018 by Steve Kozakoff. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var thisTask = "";
var gradeTexts = [];
var thisCRD = "";

function init()
{
	// Create one test item for each context type.
	//console.log("background_script chrome.runtime.onStartup happened");
	
	var contexts = ["editable"];
	var n1 = chrome.contextMenus.create({"title": "Insert Date", "contexts": contexts, "id": "n1"});
	
	gradeTexts = [];
	thisCRD = "";
	
	if(thisTask != "")
	{
		var n2,t = null,crd = null;
		
		for(var i = 0; i < CRD.length; i++) 
		{
			if((thisTask.indexOf(CRD[i].name) > -1) || (thisTask.indexOf(CRD[i].tsname) > -1))
			{
				t = CRD[i];
				break;
			}
		}
		
		if(t != null)
		{
			
			if(t.crd != null) 
			{
				chrome.contextMenus.create({"title": "Open CRD folder for "+t.name, "contexts": ["all"], "id": "crd"});
				thisCRD = t.crd;
			}
			
			n2 = chrome.contextMenus.create({"title": t.name + " Aspects", "contexts": contexts, "id": "n2"});
			
			for(var i = 0; i < t.aspects.length; i++) 
			{
				var aspect = t.aspects[i];
			
				if(aspect.grades.length > 0)
				{
					var id = "m_"+i;
					var menuItem = chrome.contextMenus.create({"title": aspect.name, "parentId": n2, "contexts": contexts, "id": id});
				
					for(var g = 0; g < aspect.grades.length; g++)
					{
						var grade = aspect.grades[g];
						var gid = "g"+id+g;
					
						if(grade.text.length == 1)
						{
							var txt = grade.text[0];
							chrome.contextMenus.create({"title": grade.name+": "+txt, "parentId": id, "contexts": contexts, "id": gid});
							gradeTexts.push({"title": txt, "id": gid});
						}
						else
						{		
							chrome.contextMenus.create({"title": grade.name, "parentId": id, "contexts": contexts, "id": gid});
							for(var e = 0; e < grade.text.length; e++)
							{
								var txt = grade.text[e];
								var	eid = "t"+gid+e;
								chrome.contextMenus.create({"title": txt, "parentId": gid, "contexts": contexts, "id": eid});
								gradeTexts.push({"title": txt, "id": eid});
							}
						}							
					}
				}
			}
		}
		
		t = sourcesAspectEMA;
		var n3 = chrome.contextMenus.create({"title": t.name, "contexts": contexts, "id": "n3"});
		var aspect = t.aspects[0];
		var id = n3;
			
		for(var g = 0; g < aspect.grades.length; g++)
		{
			var grade = aspect.grades[g];
			var gid = "g"+id+g;
		
			if(grade.text.length == 1)
			{
				var txt = grade.text[0];
				chrome.contextMenus.create({"title": grade.name+": "+txt, "parentId": id, "contexts": contexts, "id": gid});
				gradeTexts.push({"title": txt, "id": gid});
			}
			else
			{		
				chrome.contextMenus.create({"title": grade.name, "parentId": id, "contexts": contexts, "id": gid});
				for(var e = 0; e < grade.text.length; e++)
				{
					var txt = grade.text[e];
					var	eid = "t"+gid+e;
					chrome.contextMenus.create({"title": txt, "parentId": gid, "contexts": contexts, "id": eid});
					gradeTexts.push({"title": txt, "id": eid});
				}
			}							
		}
		
		t = sourcesAspectTS;
		var n4 = chrome.contextMenus.create({"title": t.name, "contexts": contexts, "id": "n4"});
		var aspect = t.aspects[0];
		var id = n4;
			
		for(var g = 0; g < aspect.grades.length; g++)
		{
			var grade = aspect.grades[g];
			var gid = "g"+id+g;
		
			if(grade.text.length == 1)
			{
				var txt = grade.text[0];
				chrome.contextMenus.create({"title": grade.name+": "+txt, "parentId": id, "contexts": contexts, "id": gid});
				gradeTexts.push({"title": txt, "id": gid});
			}
			else
			{		
				chrome.contextMenus.create({"title": grade.name, "parentId": id, "contexts": contexts, "id": gid});
				for(var e = 0; e < grade.text.length; e++)
				{
					var txt = grade.text[e];
					var	eid = "t"+gid+e;
					chrome.contextMenus.create({"title": txt, "parentId": gid, "contexts": contexts, "id": eid});
					gradeTexts.push({"title": txt, "id": eid});
				}
			}							
		}
		
		t = cIReferral;
		var n5 = chrome.contextMenus.create({"title": t.name, "contexts": contexts, "id": "n5"});
		var aspect = t.aspects[0];
		var id = n5;
			
		for(var g = 0; g < aspect.grades.length; g++)
		{
			var grade = aspect.grades[g];
			var gid = "g"+id+g;
		
			if(grade.text.length == 1)
			{
				var txt = grade.text[0];
				chrome.contextMenus.create({"title": grade.name+": "+txt, "parentId": id, "contexts": contexts, "id": gid});
				gradeTexts.push({"title": txt, "id": gid});
			}
			else
			{		
				chrome.contextMenus.create({"title": grade.name, "parentId": id, "contexts": contexts, "id": gid});
				for(var e = 0; e < grade.text.length; e++)
				{
					var txt = grade.text[e];
					var	eid = "t"+gid+e;
					chrome.contextMenus.create({"title": txt, "parentId": gid, "contexts": contexts, "id": eid});
					gradeTexts.push({"title": txt, "id": eid});
				}
			}							
		}
		
		t = pcAspect;
		var n6 = chrome.contextMenus.create({"title": t.name, "contexts": contexts, "id": "n6"});
		var aspect = t.aspects[0];
		var id = n6;
			
		for(var g = 0; g < aspect.grades.length; g++)
		{
			var grade = aspect.grades[g];
			var gid = "g"+id+g;
		
			if(grade.text.length == 1)
			{
				var txt = grade.text[0];
				chrome.contextMenus.create({"title": grade.name+": "+txt, "parentId": id, "contexts": contexts, "id": gid});
				gradeTexts.push({"title": txt, "id": gid});
			}
			else
			{		
				chrome.contextMenus.create({"title": grade.name, "parentId": id, "contexts": contexts, "id": gid});
				for(var e = 0; e < grade.text.length; e++)
				{
					var txt = grade.text[e];
					var	eid = "t"+gid+e;
					chrome.contextMenus.create({"title": txt, "parentId": gid, "contexts": contexts, "id": eid});
					gradeTexts.push({"title": txt, "id": eid});
				}
			}
		}		
	}
	
	var cc = chrome.contextMenus.create({"title": "Clear Cache and Reload", "contexts": ["all"], "id": "cc"});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) 
{
	console.log("background_script heard: " + request.text);
	
	if(thisTask != request.text)
	{
		thisTask = request.text;
		chrome.contextMenus.removeAll(init);
	}
    //sendResponse({"response":"Thanks! "+request.text});
    return true;
});

// Get the date formatted like "MM/DD/YYYY:"
function dateToDDMMYYYY(date) 
{
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return (m<=9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d) + '/' + y + ': ';
}

// A onclick callback function.
function onClick(info, tab) {
	console.log('info: ' + JSON.stringify(info));
	chrome.tabs.query({currentWindow: true, active: true}, 
		function(tabs){ 
			//console.log('tabs: ' + JSON.stringify(tabs));
			if(info.menuItemId == "n1")
			{
				chrome.tabs.sendMessage(tabs[0].id, {text: dateToDDMMYYYY(new Date())});
			}
			else if(info.menuItemId == "crd" && thisCRD != "")
			{
				//chrome.windows.create({url: thisCRD, type: "popup", width: (screen.availWidth*.4), height: screen.availHeight, top: 0, left: screen.availWidth-(screen.availWidth*.4)});
				chrome.windows.create({url: thisCRD, type: "normal", width: (screen.availWidth*.5), height: screen.availHeight, top: 0, left: 0});
			}
			else if(info.menuItemId == "cc") //Clear the browser cache
			{
				chrome.tabs.sendMessage(tabs[0].id, {cc: true});//, function(response) {}
				chrome.browsingData.remove( {
                    "since": 0,
                    "originTypes": { "unprotectedWeb": true },
                    "origins": ["https://ema.wgu.edu"] 
                },
                {
                    "appcache": true,
                    "cache": true,
                    "cacheStorage": false,
                    "cookies": false,
                    "downloads": false,
                    "fileSystems": false,
                    "formData": false,
                    "history": false,
                    "indexedDB": false,
                    "localStorage": false,
                    "pluginData": false,
                    "passwords": false,
                    "serviceWorkers": false,
                    "webSQL": false
                  },
                  function () {
                	  chrome.tabs.reload({ "bypassCache": true })
                	  console.log("Finished clearing cache!"); } );
			}
			else
			{
				for(var x = 0; x < gradeTexts.length; x++)
				{
					if(info.menuItemId == gradeTexts[x].id)
					{
						//console.log(dateToDDMMYYYY(new Date()) + gradeTexts[x].title);
						//chrome.tabs.sendMessage(tabs[0].id, {text: dateToDDMMYYYY(new Date()) + gradeTexts[x].title}, function(response) {}); 
						chrome.tabs.sendMessage(tabs[0].id, {text: gradeTexts[x].title}); //No more dates as of 07/19/2019
						//chrome.tabs.executeScript({code:'document.activeElement.value = "' + gradeTexts[x].title + '"; var event = new Event(\'compositionend\', { \'bubbles\': false, \'composed\': false }); document.activeElement.dispatchEvent(event);'});
						break;
					}
				}
			}
			
			if(chrome.runtime.lastError) 
			{
				// Something went wrong
				console.log("Whoops.. " + chrome.runtime.lastError.message);
			} 
		});
}

chrome.contextMenus.onClicked.addListener(onClick);

var sourcesAspectTS = 
{
	"name": "Sources (TS)",
	"tsname": "Sources (TS)",
	"aspects": [
		{
			"name":"Sources (TS)", 
			"grades": [
				{"name":"Missing Some References","text":["Sources have been directly quoted or paraphrased in this submission. Quotations, citations, and references are not detected for all quoted or paraphrased content. For instruction on in-text and reference list citations, please refer to the APA web link in Taskstream or visit WGU’s Writing Center by following this link: <a href=\"https://lrps.wgu.edu/provision/71484321\" target=\"_blank\">https://lrps.wgu.edu/provision/71484321</a>."]},
				{"name":"Missing In-text Citations","text":["Sources have been directly quoted or paraphrased in this submission, and a reference list is present. In-text citations could not be found for portions of the task that have been quoted or paraphrased. For instruction on in-text and reference list citations, please refer to the APA web link in Taskstream or visit WGU’s Writing Center by following this link: <a href=\"https://lrps.wgu.edu/provision/71484321\" target=\"_blank\">https://lrps.wgu.edu/provision/71484321</a>."]},
				{"name":"Missing Ref List for Citations","text":["Sources have been directly quoted or paraphrased in this submission, and in-text citations are present. A reference list could not be found. For instruction on in-text and reference list citations, please refer to the APA web link in Taskstream or visit WGU’s Writing Center by following this link: <a href=\"https://lrps.wgu.edu/provision/71484321\" target=\"_blank\">https://lrps.wgu.edu/provision/71484321</a>."]},
				{"name":"Missing APA Formatting","text":["Sources have been directly quoted or paraphrased in this submission, and a reference list is present. Citations in the text are also included. Major deviations from formatting are present, which make retrieval difficult. For instruction on in-text and reference list citations, please refer to the APA web link in Taskstream or visit WGU’s Writing Center by following this link: <a href=\"https://lrps.wgu.edu/provision/71484321\" target=\"_blank\">https://lrps.wgu.edu/provision/71484321</a>."]},
				{"name":"Competent","text":["XX outside sources that support the work are listed in the References section of the proposal and are referred to in-text without observable departures from the APA style conventions."]}
			]
		}
	]
};

var sourcesAspectEMA = 
{
	"name": "Sources (EMA)",
	"tsname": "Sources (EMA)",
	"aspects": [
		{
			"name":"Sources (EMA)", 
			"grades": [
				{"name":"Missing Some References","text":["Sources have been directly quoted or paraphrased in this submission. Quotations, citations, and references are not detected for all quoted or paraphrased content. For instruction on in-text and reference list citations, please visit WGU’s Writing Center by following this link https://lrps.wgu.edu/provision/71484321."]},
				{"name":"Missing In-text Citations","text":["Sources have been directly quoted or paraphrased in this submission, and a reference list is present. In-text citations could not be found for portions of the task that have been quoted or paraphrased. For instruction on in-text and reference list citations, please visit WGU's Writing Center by following this link https://lrps.wgu.edu/provision/71484321."]},
				{"name":"Missing Ref List for Citations","text":["Sources have been directly quoted or paraphrased in this submission, and in-text citations are present. A reference list could not be found. For instruction on in-text and reference list citations, please visit WGU’s Writing Center by following this link https://lrps.wgu.edu/provision/71484321."]},
				{"name":"Missing APA Formatting","text":["Sources have been directly quoted or paraphrased in this submission, and a reference list is present. Citations in the text are also included. Major deviations from formatting are present, which make retrieval difficult. For instruction on in-text and reference list citations, please visit WGU’s Writing Center by following this link https://lrps.wgu.edu/provision/71484321."]},
				{"name":"Competent","text":["XX outside sources that support the work are listed in the References section of the proposal and are referred to in-text without observable departures from the APA style conventions."]}
			]
		}
	]
};

var cIReferral = 
{
	"name": "CI Referral",
	"tsname": "CI Referral",
	"aspects": [
		{
			"name":"CI Referral", 
			"grades": [
				{"name":"For Content","text":["You are encouraged to connect with your course instructor to strengthen your understanding of the content before working further on this assessment."]},
				{"name":"For Other","text":["You are encouraged to connect with your course instructor before working further on this assessment."]},
				{"name":"Deferral","text":["The [ASPECT NAME] aspect will be assessed once [REQUIREMENT] is in place."]},
				{"name":"Professional Communication","text":["Not Released Pending Second Review by Professional Communication Support Team"]},
				{"name":"Document Formatting","text":["The submission is being returned without evaluation because the required Third Party form(s) were not located as a separate attachment. The evaluation cannot be completed without the appropriate Third Party form(s) submitted as separate attachments. Please resubmit your task along with the appropriate Third Party form(s). If this submission was made in the first 45 days of your first term, please be aware that the submission will not count toward your term start critical actions. Your Course Instructor can help you prepare for your next submission."]}
			]	
		}
	]
};

var pcAspect = 
{
	"name": "Professional Communication",
	"tsname": "Professional Communication",
	"aspects": [
		{
			"name":"Professional Communication", 
			"grades": [
				{"name":"Competent","text":["The work is mechanically sound with no major errors detected."]},
				{"name":"Deferral","text":["The Professional Communication aspect will be assessed once the required revisions to the work are in place."]},
				{"name":"PC Referral","text":["Not Released Pending Second Review by Professional Communication Support Team"]}
			]
		}
	]
	
};

var crdBEMTask1 = 
{
	"name": "BEM1 Task 1: Estimating Population Size",
	"tsname": "BEM1 Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C742%20Data%20Analysis%20Tools%20and%20Techniques%20(ABE2,%20BEM1,%20IWP2)",
	"aspects": [
		{
			"name":"B. Python: Criteria Used", 
			"grades": [
				{"name":"Approaching Competence","text":["The extraction of web links from the Current Estimates web page is discussed in Section B. The output file includes only links from the census.gov domain. Please update the explanation once a revised Python script is in place."]},
				{"name":"Competent","text":["The submission provides a discussion of the criteria for identifying a HTML pages, including the code and details on how it functions."]}
			]
		},
		{
			"name":"D. Python: Duplicated Links",
			"grades": [
				{"name":"Not Evident","text":["A discussion of the script's deduplication efforts is presented in the work. Multiple links from domains other than census.gov cannot be located in the output file. This aspect will be assessed once a revised Python script is in place."]},
				{"name":"Competent","text":["The submission removes duplicate links from the output file, providing a discussion of how the identified code segment functions."]}
			]
		},
		{
			"name":"E. Python: Functioning Python Code",
			"grades": [
				{"name":"Approaching Competence","text":["The Python script c742_scraper_mdd.py that extracts web links from the HTML code of the Current Estimates web site executes without readily observable warnings or errors. The script extracts a limited subset of web links to other HTML pages from the code of the Current Estimates web page."]},
				{"name":"Competent","text":["The submission provides functioning Python code that identifies all web links on the census.gov site."]}
			]
		},
		{
			"name":"G. Python: CSV File",
			"grades": [
				{"name":"Approaching Competence","text":["A CSV file that captures the output from the scraper that includes XX web links from the Current Estimates web page from the domain census.gov. Links present in the HTML code of the web page from other domains cannot be located."]},
				{"name":"Competent","text":["The submission provides a complete CSV file."]}
			]
		},
		{
			"name":"H. Python: Screenshot of Results",
			"grades": [
				{"name":"Not Evident","text":["The Python: Screenshot of Results aspect will be assessed once a revised Python scraper is in place."]},
				{"name":"Competent","text":["The submission provides a screenshot of the functioning Python program."]}
			]
		},
		{
			"name":"I. R: Linear Regression Analysis",
			"grades": [
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["An estimate for the population size of the State of XX for the year 2020 of XX that is generated by an appropriate application of R code is provided."]}
			]
		},
		{
			"name":"L. R: Population Size of State",
			"grades": [
				{"name":"Competent","text":["A CSV file that presents the differences between the current and the most recent data sets of population estimates for the U.S. states whose absolute values exceed 10,000 is provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission presents effective SQL statements that identify the differences between the current and the most recent vintage data sets of population estimates for the U.S. states and R code that builds a suitable linear regression model of the population dynamics for the State of Illinois used to estimate its population in the year 2020. The Python scraper outputs unique and absolute web links from the census.gov domain only. A revised Python program that outputs all the web links from the HTML code of the Current Estimates web page that point out to other HTML pages is needed to meet standards."]},
				{"name":"Passing","text":["The submission provides a fully functioning suite of tools to extract population data, using Python, SQL, and R. All aspects of the work meet task requirements and standards."]}
			]
		}
	]
};

var crdAAM1Task1 = 
{
	"name": "AAM1 Task 1: Estimating Population Size",
	"tsname": "AAM1 Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C996%20Programming%20in%20Python%20(AAM1)",
	"aspects": [
		{
			"name":"A. Python: How the Program Extracts Links", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["A succinct explanation of the use of the [BeautifulSoup OR requests OR other relevant library] in supporting the extractions of the web links from the HTML code of the Current Estimates web page is provided.  "]}
			]
		},
		{
			"name":"B. Python: Criteria Used", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":["The extraction of web links from the Current Estimates web page is discussed in Section B. The output file includes only links from the census.gov domain. Please update the explanation once a revised Python script is in place."]},
				{"name":"Competent","text":["The criteria used to identify the web links to other HTML pages from the given code is adequately explained."]}
			]
		},
		{
			"name":"C. Python: Relative Links",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["The work provides an adequately detailed explanation of the Python code used to convert the relative web links to an absolute format."]}
			]
		},
		{
			"name":"D. Python: Duplicated Links",
			"grades": [
				{"name":"Not Evident","text":["A discussion of the script's deduplication efforts is presented in the work. Multiple links from domains other than census.gov cannot be located in the output file. This aspect will be assessed once a revised Python script is in place."]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["A succinct explanation of the use of a [Python set() OR other detail] in support of the scraper's deduplication actions is presented."]}
			]
		},
		{
			"name":"E. Python: Functioning Python Code",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":["The Python script c742_scraper_mdd.py that extracts web links from the HTML code of the Current Estimates web site executes without readily observable warnings or errors. The script extracts a limited subset of web links to other HTML pages from the code of the Current Estimates web page."]},
				{"name":"Competent","text":["A functioning Python scraper that extracts [HOW MANY] unique and absolute web links to HTML pages is provided."]}
			]
		},
		{
			"name":"F. Python: HTML Code",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["A clear copy of the HTML code of the U.S. Census’ Current Estimates web page is provided [in a separate document]."]}
			]
		},
		{
			"name":"G. Python: CSV File",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":["A CSV file that captures the output from the scraper that includes XX web links from the Current Estimates web page from the domain census.gov. Links present in the HTML code of the web page from other domains cannot be located."]},
				{"name":"Competent","text":["The submission provides a complete CSV file."]}
			]
		},
		{
			"name":"H. Python: Screenshot of Results",
			"grades": [
				{"name":"Not Evident","text":["The Python: Screenshot of Results aspect will be assessed once a revised Python scraper is in place."]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["[HOW MANY] clear screenshot[s] that evidence the completion of the Python program without readily observable run-time errors or warnings are provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission presents effective SQL statements that identify the differences between the current and the most recent vintage data sets of population estimates for the U.S. states and R code that builds a suitable linear regression model of the population dynamics for the State of Illinois used to estimate its population in the year 2020. The Python scraper outputs unique and absolute web links from the census.gov domain only. A revised Python program that outputs all the web links from the HTML code of the Current Estimates web page that point out to other HTML pages is needed to meet standards."]},
				{"name":"Passing","text":["The submission provides a functioning Python scraper that extracts [HOW MANY] unique web links to HTML pages from the code of the Current Estimates web page and presents them in a CSV file in an absolute format. All sections of the work, including CSV File, are complete and meet standards."]}
			]
		}
	]
};

var crdBOM1Task1 = 
{
	"name": "BOM1 Task 1: Estimating Population Size",
	"tsname": "BOM1 Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/:w:/s/GoransPlayground/EaK_aht_4dFFjRwrWpY7zhgB6P_UtKktQ5gYF1deFZMggw?e=WikStP",
	"aspects": [	
		{
			"name":"I. R: Linear Regression Analysis",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["The work constructs a fitting model of the population dynamics of the State of [WHICH STATE] using R's lm() function."]}
			]
		},
		{
			"name":"J. R: How Data Was Prepared",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["A reasonable explanation of the data preparation process, including dimensional reduction and the loading of the data is presented."]}
			]
		},
		{
			"name":"K. R: Statistical Description",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["The statistical description of the variable [NAME OF VARIABLE] that models the population dynamics of the State of [WHICH STATE] is tabulated as a result of an appropriate application of R's summary() method."]}
			]
		},
		{
			"name":"L. R: Population Size of State",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["Using the [predict function OR other detail], the work predicts a population size of [PREDICTED POPULATION SIZE] for the State of [WHICH STATE] for the year [WHICH YEAR, e.g. 2023]."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":[""]},
				{"name":"Passing","text":["The submission provides a functioning R script that constructs a fitting linear regression model of the population dynamics of the State of [WHICH STATE] used to predict its population size for the year [WHICH YEAR].  All sections of the work, including Statistical Description, are complete and meet standards."]}
			]
		}
	]
};
var crdEWPTask1 = 
{
	"name": "EWP1 Task 1",
	"tsname": "EWP Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C768%20Technical%20Communication%20(CIM1,%20EWP1)",
	"aspects": [
		{
			"name":"A:  AUDIENCE ANALYSIS", 
			"grades": [
				{"name":"Competent","text":["Sound analyses of the topic familiarity, demographics, disposition, cultural background, and language attributes of the members of the three given audiences to whom the new process will be delivered are presented."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents fitting analyses of the audience attributes and the proposed reasonable changes of the presentation for Audience 1 to be delivered to Audience 2. Clear procedural instructions for initiating a Git source code repository are provided. All sections of the assessment, including Justification of Modifying, are complete and meet standards."]}
			]
		}
	]
};

var crdEWPTask2 = 
{
	"name": "EWP1 Task 2",
	"tsname": "EWP Task 2",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C768%20Technical%20Communication%20(CIM1,%20EWP1)",
	"aspects": [
		{
			"name":"APA Style", 
			"grades": [
				{"name":"Competent","text":["The formatting of the document aligns with the conventions of the American Psychological Association. The submission exhibits one-inch margins, appropriate first-line indentations, and double interline spacing."]}
			]
		},
		{
			"name":"A. Title Page", 
			"grades": [
				{"name":"Competent","text":["The submission adequately provides a title page with the name of the proposer and all of the required sections. a space for the signature, and clearly states the title as \"<TITLE>.\""]}
			]
		},
		{
			"name":"B. Table of Contents", 
			"grades": [
				{"name":"Competent","text":["A table of contents is present in the proposal which clearly identifies each of the sections of the document including section title and page numbers."]}
			]
		},
		{
			"name":"C. Abstract", 
			"grades": [
				{"name":"Competent","text":["The abstract competently summarizes the recommended solution to <SUMMARIZE SOLUTION> and aligns with each of the given points for the aspect."]}
			]
		},
		{
			"name":"D1. Proposed Solution", 
			"grades": [
				{"name":"Competent","text":["A compelling description of <SOLUTION> and an explanation of its alignment with the requirements stated in the RFP are provided in the work."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The proposal presents a thorough response to the published RFP which describes <SUMMARIZE SOLUTION> and aligns with the company's objectives. The work provides a suitable Title Page, Table of Contents, Abstract, body, and Justification and Highlights of Proposal in APA style and a professional letter of transmittal introducing <STUDENTS COMPANY>. All sections of the work are complete and meet standards."]}
			]
		}
	]
};

var crdIYPTask1 = 
{
	"name": "IYP Task 1",
	"tsname": "IYP Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C745%20Advanced%20Data%20Visualization%20(ADE2,%20IYP2)",
	"aspects": [
		{
			"name":"Professional Communication", 
			"grades": [
				{"name":"Competent","text":["The work is mechanically sound with only minor grammatical errors detected."]}
			]
		},
		{
			"name":"A: SCRAPED DATA: CRITERIA 1", 
			"grades": [
				{"name":"Competent","text":["The submission includes scraped data for Criteria 1 in the \"<FILENAME>\" file."]}
			]
		},
		{
			"name":"B: SCRAPED DATA: CRITERIA 2", 
			"grades": [
				{"name":"Competent","text":["The submission includes scraped data for Criteria 2 in the \"<FILENAME>\" file."]}
			]
		},
		{
			"name":"C: CLEANED DATA: CRITERIA 1", 
			"grades": [
				{"name":"Competent","text":["A table that presents the values of the Insurance, Fuel Economy, and Resale Value attributes of the four vehicle models, weighted at 5, 7, and 3 respectively, are provided in the \"<FILENAME>\" file."]}
			]
		},
		{
			"name":"D: CLEANED DATA: CRITERIA 2", 
			"grades": [
				{"name":"Competent","text":["A table that presents the values of the Safety Features, Maintenance Cost, and Price attributes of the four vehicle models, weighted at 10, 5, and 7 respectively, are provided in the \"<FILENAME>\" file."]}
			]
		},
		{
			"name":"E: COMBINED DATA", 
			"grades": [
				{"name":"Competent","text":["A table that presents the combined values for the name of the car, features being evaluated, and score for each vehicle model is provided in the \"<FILENAME>\" file."]}
			]
		},
		{
			"name":"F: VISUAL PRESENTATION: CRITERIA 1", 
			"grades": [
				{"name":"Competent","text":["The submission presents stacked bar, horizontal bar, and pie charts generated from Tableau to adequately visualize the attributes of the company’s criterion."]}
			]
		},
		{
			"name":"G: VISUAL PRESENTATION: CRITERIA 2", 
			"grades": [
				{"name":"Competent","text":["The submission presents stacked bar, horizontal bar, and pie charts generated from Tableau to adequately visualize the attributes of personal criterion."]}
			]
		},
		{
			"name":"H: DASHBOARD", 
			"grades": [
				{"name":"Competent","text":["The dashboard presents a stacked bar and ring charts, a scatterplot, and a heatmap to effectively support the comparison of the six aspects of the two criteria."]},
				{"name":"Approaching Competence","text":["The dashboard presents a stacked bar, horizontal bar, pie, and treemap charts. The purpose of the pie chart and the intent of the treemaps are unclear."]}
			]
		},
		{
			"name":"I: VEHICLE SELECTION", 
			"grades": [
				{"name":"Competent","text":["The work clearly recommends the purchase a 2019 [Honda CR-V, Toyota RAV-4, Hyundai Santa Fe] for the company justified by the sum of weighted values for the elements of the combined criterion."]}
			]
		},
		{
			"name":"J: STORYTELLING METHODS", 
			"grades": [
				{"name":"Competent","text":["The submission provides a detailed explanation of how the chosen visualizations support the selection of a [VEHICLE] and appropriately represents the elements of effective storytelling."]},
				{"name":"Approaching Competence","text":["The submission notes the Honda CR-V scores best on \"almost all of the six aspects.\" The explanation for how storytelling methods were used to effectively support the presentation of the recommendation is presented with limited detail. Please update the explanation of the applied storytelling methods once revised visualization elements are in place."]}
			]
		},
		{
			"name":"K: WEB SOURCES", 
			"grades": [
				{"name":"Competent","text":["Five web sources are included in the submission to support the scraped data in parts A1 and A2."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission effectively scrapes data from the Cars and Edmunds websites and provides tables with values for the company, personal, and combined criteria, including Safety Features, Maintenance Cost, Price Point, Insurance, Fuel Economy, and Resale attributes. Adequate visualization elements for the for the dashboard are not readily evident, and the presentation of the recommendation for the purchase of a 2019 Honda CR-V for the company and the justification of the elements of effective storytelling used in the presentation are provided with limited detail. To meet standards, revisions are needed for the responses to the Dashboard and Storytelling Methods aspects."]},
				{"name":"Passing","text":["The submission provides bar charts generated in Tableau to support the comparison of the vehicles in the categories of the company. personal, and combined criteria. Succinct explanations for how the dashboard supports the recommendation to purchase a 2017 Honda CR-V for the company and the use of elements of effective storytelling in the delivery of the recommendation are present. All sections of the work, including Visual Presentation: Criteria 1, Visual Presentation: Criteria 2, Dashboard, Vehicle Selection, and Storytelling Methods, are complete and meet standards."]}
			]
		}
	]
};

var crdADE2Task1 = 
{
	"name": "ADE Task 1",
	"tsname": "ADE Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C745%20Advanced%20Data%20Visualization%20(ADE2,%20IYP2)",
	"aspects": [
		{
			"name":"Professional Communication", 
			"grades": [
				{"name":"Competent","text":["The work is mechanically sound and free of major errors."]}
			]
		},
		{
			"name":"A: SCRAPED DATA: CRITERIA 1", 
			"grades": [
				{"name":"Competent","text":["The submission includes scraped data for Criteria 1 in the \"<FILENAME>\" file."]}
			]
		},
		{
			"name":"B: SCRAPED DATA: CRITERIA 2", 
			"grades": [
				{"name":"Competent","text":["The submission includes scraped data for Criteria 2 in the \"<FILENAME>\" file."]}
			]
		},
		{
			"name":"C: CLEANED DATA: CRITERIA 1", 
			"grades": [
				{"name":"Competent","text":["A table that presents the values of the Safety Features, Maintenance Cost, and Price Point attributes of the four vehicle models, weighted at 10, 5, and 7 respectively, are provided."]}
			]
		},
		{
			"name":"D: CLEANED DATA: CRITERIA 2", 
			"grades": [
				{"name":"Competent","text":["An appropriately configured dataset that presents the values of the Insurance, Fuel Economy, and Resale Value attributes of the four vehicle models that the personal criteria respectively weights by [WEIGHTS, e.g. 7, 5, and 10] is provided."]}
			]
		},
		{
			"name":"E: COMBINED DATA", 
			"grades": [
				{"name":"Competent","text":["A table that presents the combined values for the name of the car, features being evaluated, and score for each vehicle model is provided in the \"<FILENAME>\" file."]}
			]
		},
		{
			"name":"F: VISUAL PRESENTATION: CRITERIA 1", 
			"grades": [
				{"name":"Competent","text":["['A horizontal and a vertical bar chart and a heat map'] effectively support the comparison of the vehicle models against the elements of the company criteria. "]}
			]
		},
		{
			"name":"G: VISUAL PRESENTATION: CRITERIA 2", 
			"grades": [
				{"name":"Competent","text":["The submission presents stacked bar, horizontal bar, and pie charts generated from Tableau to adequately visualize the attributes of personal criterion."]}
			]
		},
		{
			"name":"H: DASHBOARD", 
			"grades": [
				{"name":"Competent","text":["The dashboard presents side-by-side and stand-alone vertical and horizontal bar charts and a heatmap that effectively support the comparison of the selected vehicles against the six aspects of the personal and company criteria."]}, 
				{"name":"Approaching Competence","text":["The dashboard presents a stacked bar, horizontal bar, pie, and treemap charts. The purpose of the pie chart and the intent of the treemaps are unclear."]}
			]
		},
		{
			"name":"I: VEHICLE SELECTION", 
			"grades": [
				{"name":"Competent","text":["A sound justification for the recommendation to purchase a [2019 Honda CRV] for the organization is provided."]}
			]
		},
		{
			"name":"J: STORYTELLING METHODS", 
			"grades": [
				{"name":"Competent","text":["The submission provides a detailed explanation of how the chosen visualizations support the selection of a [VEHICLE] and appropriately represents the elements of effective storytelling."]},
				{"name":"Approaching Competence","text":["The submission notes the Honda CR-V scores best on \"almost all of the six aspects.\" The explanation for how storytelling methods were used to effectively support the presentation of the recommendation is presented with limited detail. Please update the explanation of the applied storytelling methods once revised visualization elements are in place."]}
			]
		},
		{
			"name":"K: WEB SOURCES", 
			"grades": [
				{"name":"Competent","text":["The submission clearly indicates that data from [LIST WEBSITES, e.g. Edmunds, Kelley Blue Book, etc.] have been scraped to support the analysis of the features of the four given vehicle models."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission effectively scrapes data from the Cars and Edmunds websites and provides tables with values for the company, personal, and combined criteria, including Safety Features, Maintenance Cost, Price Point, Insurance, Fuel Economy, and Resale attributes. Adequate visualization elements for the for the dashboard are not readily evident, and the presentation of the recommendation for the purchase of a 2019 Honda CR-V for the company and the justification of the elements of effective storytelling used in the presentation are provided with limited detail. To meet standards, revisions are needed for the responses to the Dashboard and Storytelling Methods aspects."]},
				{"name":"Passing","text":["The submission scrapes data from the [WEBSITES] and uses the company and personal criteria to support the justification of the recommendation to purchase a 2019 Honda CR-V for the organization. Clear visualizations provide adequate support to the comparison of the vehicles against the elements of the combined criteria. All sections of the work, including Storytelling Methods, are complete and meet standards."]}
			]
		}
	]
};

var crdACE3Task1 = 
{
	"name": "ACE3 Task 1",
	"tsname": "ACE3 Task 1",
	"crd": "https://teams.microsoft.com/_#/docx/viewer/teams/https:~2F~2Fwesterngovernorsuniversity.sharepoint.com~2Fsites~2FDecember2018EvaluationTemplates~2FShared%20Documents~2FGeneral~2FACE3,%20IXP1-Task1.docx?threadId=19:7965118048924a8db2e2613ab0b518f1@thread.skype&baseUrl=https:~2F~2Fwesterngovernorsuniversity.sharepoint.com~2Fsites~2FDecember2018EvaluationTemplates&fileId=da1e5926-ce89-43bc-a0ca-306c0e517243&ctx=files&rootContext=items_view&viewerAction=view",
	"aspects": [
		{
			"name":"A: Tool Selection: Benefits", 
			"grades": [
				{"name":"Competent","text":["The submission presents a succinct comparative justification for the selection of [SAS OR R OR Python] for the analysis of the churn of the customers of the telecom company over [CHOOSE THE OTHER TWO: Python AND/OR R AND/OR SAS]."]}
			]
		},
		{
			"name":"B: Tool Selection: Aims", 
			"grades": [
				{"name":"Competent","text":["The goal of the analysis to [AS STATED IN THE WORK] is adequately outlined."]}
			]
		},
		{
			"name":"C: Tool Selection: Prescribed Analysis", 
			"grades": [
				{"name":"Competent","text":["The submission clearly identifies [METHOD] as a descriptive, and [METHOD] as a non-descriptive method to support the analysis of the customer attrition."]},
				{"name":"Approaching Competence","text":["The submission clearly identifies [Logistic Regression] as a non-descriptive technique to use on the given data. While [frequency analysis] is proposed, an appropriate descriptive technique cannot be located. Please identify a method that performs an appropriate descriptive function."]}
			]
		},
		{
			"name":"D: Data Exploration and Preparation: Target Variable", 
			"grades": [
				{"name":"Competent","text":["The target variable Churn is accurately identified."]}
			]
		},
		{
			"name":"E. Data Exploration and Preparation: Independent predictor", 
			"grades": [
				{"name":"Competent","text":["[VARIABLE NAME OR NAMES] [IS/ARE] appropriately identified as predictors represented in the given dataset. "]}
			]
		},
		{
			"name":"F. Data Exploration and Preparation: Goal", 
			"grades": [
				{"name":"Competent","text":["The submission presents data cleaning as a primary goal in the manipulation of the data."]}
			]
		},
		{
			"name":"G. Data Exploration and Preparation: Statistical Identity", 
			"grades": [
				{"name":"Competent","text":["The work describes the characteristics of the predictors in the given dataset and succinctly outlines the phenomenon to be predicted."]}
			]
		},
		{
			"name":"H. Data Exploration and Preparation: Cleaning", 
			"grades": [
				{"name":"Competent","text":["The work presents an adequate overview of the code that is used to prepare the data for the application of the selected methods and provides the cleaned dataset in a separate file."]}
			]
		},
		{
			"name":"I. Data Analysis: Univariate Statistics", 
			"grades": [
				{"name":"Competent","text":["Accurate [histograms OR other types of visualizations] effectively support the univariate distribution analysis of the variables represented in the given dataset."]}
			]
		},
		{
			"name":"J. Data Analysis: Bivariate Statistics", 
			"grades": [
				{"name":"Competent","text":["Accurate [types of visualizations used] effectively support the bivariate analysis of the interrelationship between the predictors and the target variable."]}
			]
		},
		{
			"name":"K. Data Analysis: Methods ", 
			"grades": [
				{"name":"Competent","text":["Annotated and clear applications of the chosen methods, [Logistic Regression and Principal Components Analysis] are applied on the cleaned dataset to explain customer churn."]},
				{"name":"Approaching Competence","text":["The submission applies and annotates [Logistic Regression] to explain customer churn. The application and interpretation of an appropriate descriptive method cannot be located."]}
			]
		},
		{
			"name":"L. Data Analysis: Justification", 
			"grades": [
				{"name":"Competent","text":["A clear explanation for why the selected methods are appropriate to be used on the given dataset is presented."]}
			]
		},
		{
			"name":"M. Data Analysis: Visual Representation", 
			"grades": [
				{"name":"Competent","text":["The work provides succinct justification for the selection of visualization elements to support the analysis of the customer churn, including [LIST EXAMPLES OF VISUALIZATIONS, such as histograms]."]}
			]
		},
		{
			"name":"N. Data Summary: Phenomenon", 
			"grades": [
				{"name":"Competent","text":[" "]}
			]
		},
		{
			"name":"O. Data Summary: Detection ", 
			"grades": [
				{"name":"Competent","text":["The work clearly identifies [LIST OF VARIABLES] as the predictors that most significantly influence the churn of the customer."]}
			]
		},
		{
			"name":"P. Sources ", 
			"grades": [
				{"name":"Competent","text":["[How many] outside sources that support the work are listed in the References section of the analysis and are appropriately referred to in the narrative."]}
			]
		},
		{
			"name":"Professional Communication  ", 
			"grades": [
				{"name":"Competent","text":["The work is mechanically sound and free of major errors."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission effectively scrapes data from the Cars and Edmunds websites and provides tables with values for the company, personal, and combined criteria, including Safety Features, Maintenance Cost, Price Point, Insurance, Fuel Economy, and Resale attributes. Adequate visualization elements for the for the dashboard are not readily evident, and the presentation of the recommendation for the purchase of a 2017 Honda CR-V for the company and the justification of the elements of effective storytelling used in the presentation are provided with limited detail. To meet standards, revisions are needed for the responses to the Dashboard and Storytelling Methods aspects."]},
				{"name":"Passing","text":["The submission presents an analysis of the attrition phenomenon among the customers of a telecom company that relies on the [LIST THE TWO METHODS, e.g. Principal Component Analysis and Logistic Regression] methods. The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the [SAS or R OR Python] code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary: Detection, are complete and meet standards."]}
			]
		}
	]
};
var crdCIMTask1 = 
{
	"name": "CIM1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "CIM1 Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C768%20Technical%20Communication%20(CIM1,%20EWP1)",
	"aspects": [
		{
			"name":"A: Email or Memo", 
			"grades": [
				{"name":"Competent","text":["A clear [email OR memorandum] to be sent to the executive leadership of the organization that outlines the proposed implementation of [WHAT IS BEING IMPLEMENTED] is provided."]}
			]
		},
		{
			"name":"B: Fact Sheet", 
			"grades": [
				{"name":"Competent","text":["A well-organized Fact Sheet that outlines the implementation of [WHAT IS BEING IMPLEMENTED] and includes [HOW MANY] supporting multimedia elements, is provided."]},
				{"name":"Approaching Competence","text":["The submission outlines the product, the rationale for implementation, and the plan for implementing [SOLUTION] for the manufacturing company. A graphical element or elements that support the description of the technology solution or the explanation of the implementation plan cannot be located. "]}
			]
		},
		{
			"name":"C: Writing Process", 
			"grades": [
				{"name":"Approaching Competence","text":["The Writing Process section justifies decisions that were made during the planning of the artifacts. Descriptions of the writing processes and their phases that were used to construct the two artifacts cannot be located. Please describe the writing process used to generate each of the artifacts."]},
				{"name":"Competent","text":["The work presents a succinct overview of the activities completed during the composition of the [email OR memo] and the fact sheet. "]}
			]
		},
		{
			"name":"D: Audience Summary", 
			"grades": [
				{"name":"Approaching Competence","text":["A brief summary of the email and fact sheet is present, which is fitting. Adequate detail for the subject knowledge, position in the organization, personal attitudes, reading style, and types of readers is not observed."]},
				{"name":"Competent","text":["The submission presents a sound analysis of the attributes of the audiences of the executive leaders and members of the interdepartmental implementation team that informed the creation of the [email OR memo] and the fact sheet."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents sound analyses of the audiences and the writing process that resulted in a clear [email OR memo] and a fact sheet that overview the proposed implementation of [PROPOSED PROCESS]. All sections of the work, including Audience Summary, are complete and meet standards. "]},
				{"name":"Not Passing","text":["The submission provides artifacts that describe the proposed [PROPOSED PROCESS], provides adequate in-text citations that point to the elements of the reference list. A fact sheet that includes an appropriate graphical component, descriptions of the writing processes and adequate audience analyses are not readily evident. A revision of the responses to the task prompts Fact Sheet, Writing Process, and Audience Summary is needed to meet standards."]}
			]
		}
	]
};

var crdCIMTask2 = 
{
	"name": "CIM1 Task 2", 	//CRD name as it appears in EMA
	"tsname": "CIM1 Task 2",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C768%20Technical%20Communication%20(CIM1,%20EWP1)",
	"aspects": [
		{
			"name":"A. Title Page", 
			"grades": [
				{"name":"Competent","text":["The submission has a completed Title Page that presents [TITLE HERE] as the project name."]}
			]
		},
		{
			"name":"B. Table of Contents", 
			"grades": [
				{"name":"Competent","text":["The submission includes a completed Table of Contents that presents accurate page locators of the sections in the order in which they appear in the proposal."]}
			]
		},
		{
			"name":"C. Abstract", 
			"grades": [
				{"name":"Competent","text":["The salient points of the proposed project to implement [WHAT] for Seamus Company, including the project cost of $[HOW MUCH], are intelligently outlined in the Abstract of the proposal."]}
			]
		},
		{
			"name":"D1. Proposed Solution", 
			"grades": [
				{"name":"Competent","text":["Succinct technical detail of the proposed [TECHNOLOGY SOLUTION SUMMARY] and an outline of its benefits to the Seamus Company are presented."]}
			]
		},
		{
			"name":"Case Study Reviews",
			"grades": [
				{"name":"Competent","text":["A reasonable case study review that summarizes the implementation of key elements of the proposal for [COMPANY 1], [COMPANY 2], and [COMPANY 3] is provided.  "]},
				{"name":"Approaching Competence", "text":["The submission outlines three outside works. The learnings from the third-party artifacts are presented in limited detail and it is unclear how the case study review informs the proposed project." ]}
			]
		},
		{
			"name":"Goals, Objectives, and Deliverables",
			"grades": [
				{"name":"Competent","text":["The objectives and key anticipated project deliverables supporting the project goal to [SUMMARIZE PROJECT GOAL] are adequately described."]},
				{"name":"Approaching Competence", "text":["The submission provides a list of goals and supporting objectives with notes of the methods that will be used to meet those objectives. The project deliverables are unclear, and the goal and the objectives are presented in limited detail. A detailed description of the project goal, objectives, and key deliverables is needed to meet standards. " ]}
			]
		},
		{
			"name":"Projected Timeline",
			"grades": [
				{"name":"Competent","text":["Reasonable completion dates for the [HOW MANY] key anticipated project deliverables are presented in a clear timeline."]},
				{"name":"Approaching Competence", "text":["The work provides a timeline. An appropriate timeline that provides completion dates for each deliverable is not observed." ]}
			]
		},
		{
			"name":"Resources and Costs",
			"grades": [
				{"name":"Competent","text":["A detailed breakdown of the cost of the project that estimates the major contributing factors, including [ELEMENT OF COST], is provided."]}
			]
		},
		{
			"name":"Measures of Success",
			"grades": [
				{"name":"Competent","text":["The [HOW MANY] criteria that comprise the evaluation framework that will be used to assess the success of the project once completed are adequately outlined."]},
				{"name":"Approaching Competence", "text":["The submission discusses the anticipated project outcomes. A description of the criteria that will be used to assess the success of the project is not observed. " ]}
			]
		},
		{
			"name":"Justification and Highlights of Proposal",
			"grades": [
				{"name":"Competent","text":["A satisfactory summary of the technology solution in the context of Seamus' business priorities is provided."]}
			]
		},
		{
			"name":"Letter",
			"grades": [
				{"name":"Competent","text":["A professional letter to accompany the transmittal of the proposal to [SUMMARIZE PROJECT] to the publisher is provided [in a separate file]."]}
			]
		},
		{
			"name":"Professional Communication",
			"grades": [
				{"name":"Competent","text":["The work is mechanically sound and free of major errors."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a proposal to [WHAT] for the Seamus Company and a professional letter to accompany its transmittal to the publisher. The work adequately outlines the proposed technology solution as well as the goals, timeline, and evaluation framework of the project.  All sections of the assessment, including Resources and Costs, are complete and meet standards."]}
			]
		}
		
	]
};

var crdLQTTask3 = 
{
	"name": "LQT2 Task 3", 	//CRD name as it appears in EMA
	"tsname": "MSISA Capstone Written Project",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE", 
			"grades": [	
				{"name":"Not Evident","text":["This aspect will be assessed when all task requirements are in place."]},
				{"name":"Competent","text":["The work is mechanically sound and free of major errors."]}
			]
		},
		{
			"name":"A1. IMPORTANT ASPECTS",
			"grades": [
				{"name":"Competent","text":["The salient points of the information security realignment project for Top Care Medical, including it actual outcomes, are intelligently summarized in the Abstract of the report."]}
			]
		},
		{
			"name":"D1. PROJECT REQUIREMENTS",
			"grades": [
				{"name":"Competent","text":["The submission presents adequately detailed summaries of the functional and detailed requirements that emerged after the process and system audit and the gaps the project aimed to fill."]}
			]
		},
		{
			"name":"F1. APPROACH EXPLANATION",
			"grades": [
				{"name":"Competent","text":["The four phases of the project methodology are succinctly outlined."]}
			]
		},
		{
			"name":"G2. RESOURCES USED", 
			"grades": [
				{"name":"Not Evident","text":["The Resources section states the resources used are identified in the Project Design section. A logical justification for the resources is not observed."]},
				{"name":"Competent","text":["The submission includes a sound justification for the labor, hardware, and software resources to implement the solution."]}
			]
		},
		{
			"name":"H1. QUALITY ASSURANCE APPROACH",
			"grades": [	
				{"name":"Approaching","text":["The submission states the phases were implemented to increase troubleshooting efficiency. A detailed discussion of the approach to quality assurance and specifies the quality assurance criteria is not observed."]},
				{"name":"Competent","text":["The submission includes a sound explanation of how the quality assurance was implemented during the project development process."]}			
			]
		},
		{
			"name":"H2. SOLUTION TESTING",
			"grades": [
				{"name":"Approaching","text":["The Solution Testing section includes a table that clearly organizes the each test and its purpose. A justification for the test case and scenarios, and the acceptance criteria, are not observed."]},
				{"name":"Competent","text":["The submission provides a sound overview of the solution testing and clearly identifies the acceptance criteria for the user and administration."]}
			]
		},
		{
			"name":"I1. IMPLEMENTATION PLAN",
			"grades": [
				{"name":"Approaching","text":["The Implementation Plan section provides a sound overview of the user training. A detailed discussion of the phases of the rollout and details of the go-live is not observed."]},
				{"name":"Competent","text":["The submission includes a sound explanation of the implementation phases and issues with a Skype user during the go-live event."]}
			]
		},
		{
			"name":"J1. RISK ASSESSMENT",
			"grades": [
				{"name":"Competent","text":["Assessments of the risks of Intranet unavailability, corrupt files, and malicious employees are presented in a clear table."]}
			]
		},
		{
			"name":"J3. RISK MITIGATION",
			"grades": [
				{"name":"Not Evident","text":["The Risk Mitigation section clearly states the importance of personnel. A logical explanation of how the two risks will be mitigated is not observed."]},
				{"name":"Competent","text":["The submission provides a clear explanation of how the equipment and personnel-related risks will be mitigated."]}
			]
		},
		{
			"name":"K3. MAINTENANCE PLAN",
			"grades": [
				{"name":"Approaching","text":["The submission includes a table that clearly organizes the project maintenance. A well-developed short- and long-term maintenance plan is not observed."]},
				{"name":"Competent","text":["The submission includes a sound explanation of the short- and long-term maintenance plans that includes technical manuals and a maintenance support package."]}
			]
		},
		{
			"name":"L1A. DELIVERABLES",
			"grades": [
				{"name":"Competent","text":["A sample output of the gap analysis provided in Appendix A as an actual project artifact adequately supports the explanations in the narrative."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":
					[
						"The submission successfully describes the implementation of a secure wireless network solution for North Gate Studios, provides a sound explanation of the mitigation for the two identified risks, and includes a clear summary of the short- and long-term maintenance plans. All task requirements have been met.",
						"A Capstone Report that describes the implementation of an Information Security Policy solution for Top Care Medical after a completed merger is provided in the submission. The work adequately outlines the project approach and methodology, as well as the phases of the completed project and provides a succinct summary of the lessons learned from the capstone experience. All sections of the work, including Postimplementation Support, are complete and meet standards."
					]
				},
				{"name":"Not Passing","text":["The submission describes a network security solution for North Gate Studios, provides a sound overview of the project in the Abstract, and includes screenshots and diagrams as project deliverables. A justification for the resources used, an explanation of the quality assurance approach, and a detailed discussion of the risk mitigations, solution testing, and maintenance plans are not observed. These areas need further development to meet task requirements."]}
			]
		}
	]
};

var crdDDMTask3 = 
{
	"name": "DDM Task 3", 	//CRD name as it appears in EMA
	"tsname": "MSISA Capstone Written Project",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE", 
			"grades": [	
				{"name":"Not Evident","text":["This aspect will be assessed when all task requirements are in place."]},
				{"name":"Competent","text":["The work is mechanically sound and free of major errors."]}
			]
		},
		{
			"name":"A1. IMPORTANT ASPECTS",
			"grades": [
				{"name":"Competent","text":["The salient points of the information security realignment project for Top Care Medical, including it actual outcomes, are intelligently summarized in the Abstract of the report."]}
			]
		},
		{
			"name":"D1. PROJECT REQUIREMENTS",
			"grades": [
				{"name":"Competent","text":["The submission presents adequately detailed summaries of the functional and detailed requirements that emerged after the process and system audit and the gaps the project aimed to fill."]}
			]
		},
		{
			"name":"F1. APPROACH EXPLANATION",
			"grades": [
				{"name":"Competent","text":["The four phases of the project methodology are succinctly outlined."]}
			]
		},
		{
			"name":"G2. RESOURCES USED", 
			"grades": [
				{"name":"Not Evident","text":["The Resources section states the resources used are identified in the Project Design section. A logical justification for the resources is not observed."]},
				{"name":"Competent","text":["The submission includes a sound justification for the labor, hardware, and software resources to implement the solution."]}
			]
		},
		{
			"name":"H1. QUALITY ASSURANCE APPROACH",
			"grades": [	
				{"name":"Approaching","text":["The submission states the phases were implemented to increase troubleshooting efficiency. A detailed discussion of the approach to quality assurance and specifies the quality assurance criteria is not observed."]},
				{"name":"Competent","text":["The submission includes a sound explanation of how the quality assurance was implemented during the project development process."]}			
			]
		},
		{
			"name":"H2. SOLUTION TESTING",
			"grades": [
				{"name":"Approaching","text":["The Solution Testing section includes a table that clearly organizes the each test and its purpose. A justification for the test case and scenarios, and the acceptance criteria, are not observed."]},
				{"name":"Competent","text":["The submission provides a sound overview of the solution testing and clearly identifies the acceptance criteria for the user and administration."]}
			]
		},
		{
			"name":"I1. IMPLEMENTATION PLAN",
			"grades": [
				{"name":"Approaching","text":["The Implementation Plan section provides a sound overview of the user training. A detailed discussion of the phases of the rollout and details of the go-live is not observed."]},
				{"name":"Competent","text":["The submission includes a sound explanation of the implementation phases and issues with a Skype user during the go-live event."]}
			]
		},
		{
			"name":"J1. RISK ASSESSMENT",
			"grades": [
				{"name":"Competent","text":["Assessments of the risks of Intranet unavailability, corrupt files, and malicious employees are presented in a clear table."]}
			]
		},
		{
			"name":"J3. RISK MITIGATION",
			"grades": [
				{"name":"Not Evident","text":["The Risk Mitigation section clearly states the importance of personnel. A logical explanation of how the two risks will be mitigated is not observed."]},
				{"name":"Competent","text":["The submission provides a clear explanation of how the equipment and personnel-related risks will be mitigated."]}
			]
		},
		{
			"name":"K3. MAINTENANCE PLAN",
			"grades": [
				{"name":"Approaching","text":["The submission includes a table that clearly organizes the project maintenance. A well-developed short- and long-term maintenance plan is not observed."]},
				{"name":"Competent","text":["The submission includes a sound explanation of the short- and long-term maintenance plans that includes technical manuals and a maintenance support package."]}
			]
		},
		{
			"name":"L1A. DELIVERABLES",
			"grades": [
				{"name":"Competent","text":["A sample output of the gap analysis provided in Appendix A as an actual project artifact adequately supports the explanations in the narrative."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":
					[
						"The submission successfully describes the implementation of a secure wireless network solution for North Gate Studios, provides a sound explanation of the mitigation for the two identified risks, and includes a clear summary of the short- and long-term maintenance plans. All task requirements have been met.",
						"A Capstone Report that describes the implementation of an Information Security Policy solution for Top Care Medical after a completed merger is provided in the submission. The work adequately outlines the project approach and methodology, as well as the phases of the completed project and provides a succinct summary of the lessons learned from the capstone experience. All sections of the work, including Postimplementation Support, are complete and meet standards."
					]
				},
				{"name":"Not Passing","text":["The submission describes a network security solution for North Gate Studios, provides a sound overview of the project in the Abstract, and includes screenshots and diagrams as project deliverables. A justification for the resources used, an explanation of the quality assurance approach, and a detailed discussion of the risk mitigations, solution testing, and maintenance plans are not observed. These areas need further development to meet task requirements."]}
			]
		}
	]
};

var crdLQTTask2 = 
{
	"name": "LQT2 Task 2", 	//CRD name as it appears in EMA
	"tsname": "MSISA Capstone Prospectus",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work is mechanically sound and free of major errors."]}
			]
		},
		{
			"name":"A1: PROBLEM",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"A2: PLAN",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"A3: METHODOLOGY",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The methodology will follow the National Institute of Standards and Technology (NIST) Special Publication 800-53 Security and Privacy Controls for Federal Information Systems and Organizations, which is fitting."]}
			]
		},
		{
			"name":"A4: IMPLEMENTATION PROPOSAL",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"A5: OUTCOMES",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B1: PROJECT SCOPE",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B2: PROJECT RATIONALE",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B3: PROBLEM SUMMARY",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B4: PROBLEM BACKGROUND",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["Lack of compliance is suitably detailed. The background of the problem within the greater context is not observed."]},
				{"name":"Competent","text":["The Problem Background section explains that the county government is not PCI DSS compliant and presents historical insights into the reasons that contributed to the emergence of the problem in the context of current needs."]}
			]
		},
		{
			"name":"B5: NEED FOR THE SOLUTION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B6: REASON FOR APPROACH",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The need for the approach clearly includes the lack of skilled personnel. A logical discussion, juxtaposing alternate solutions, with the strengths and weaknesses of each, is not observed."]},
				{"name":"Competent","text":["A succinct justification for the selected approach that includes hiring of a chief security officer, is provided."]}
			]
		},
		{
			"name":"B7: PROSPECTUS ORGANIZATION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The Prospectus Organization clearly lists the sections to follow. Content summaries for each of the sections are not found."]},
				{"name":"Competent","text":["Succinct content outlines of the Problem Statement and the Technology Solution segments that comprise the remainder of the prospectus, are provided."]}
			]
		},
		{
			"name":"C1: BACKGROUND INFORMATION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The ability to currently only accept cash and check is described, which is valid. Adequate detail for the background information is not found."]},
				{"name":"Competent","text":["An adequate summary of the context in which the problem exists that situates the problem and provides direction to the project, is provided."]}
			]
		},
		{
			"name":"C2: CAUSES",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The lack of security is described logically. Adequate detail for the causes of the problem is not observed."]},
				{"name":"Competent","text":["The lack of an employee with security assurance responsibility is presented as the primary reason behind the problem in an adequate root cause analysis."]}
			]
		},
		{
			"name":"C3: BUSINESS IMPACTS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["Several impacts are listed, which is fitting. Adequate detail for the business impacts of the problem is not found."]},
				{"name":"Competent","text":["The impact fo the problem on the country officials are adequately outlined. "]}
			]
		},
		{
			"name":"C4: COST ANALYSIS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["An estimated cost for salary is listed, which is clear. Adequate detail for a source-supported cost analysis for all the associated costs is not evident."]},
				{"name":"Competent","text":["The salary of the chief security officer is presented as the primary factor contributing to the costs of the project."]}
			]
		},
		{
			"name":"C5: RISK ANALYSIS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["A number of risks are identified, which is valid. A logical identification for each of the risks, with level and likelihood for each, is not found."]},
				{"name":"Competent","text":["Reputational and financial risks associated with the proposed solution are discussed. "]}
			]
		},
		{
			"name":"C6: ASSUMPTIONS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["This aspect can be more accurately assessed once the other aspects have been revised to meet standards."]},
				{"name":"Competent","text":["The submission clearly assumes that the county has the infrastructure and the financial resources to complete the project."]}
			]
		},
		{
			"name":"C7: LIMITATIONS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["This aspect can be more accurately assessed once the other aspects have been revised to meet standards."]},
				{"name":"Competent","text":["The limited throughput of the CSO that will be hired is presented as a constraint the project will be subjected to during it execution."]}
			]
		},
		{
			"name":"C8: TERMS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["XX terms are clearly listed and expanded. Source-supported definitions for all the technical terms used in the prospectus are not evident."]},
				{"name":"Competent","text":["Adequate expansions and explanations of seven technical acronyms, including CSO, VLAN, and PII, are provided."]}
			]
		},
		{
			"name":"D: TECHNOLOGY SOLUTION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["Several reasons for implementing a technology solution are soundly provided. A logical explanation, with adequate detail, for why a technology solution is needed, is not evident."]},
				{"name":"Competent","text":["The proposed solution and the gaps it intends to fill are summarized in the introductory section of the Technology Solution segment."]}
			]
		},
		{
			"name":"D1: BUSINESS DRIVERS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["Three business drivers are included, which is clear. Adequate detail for the business drivers is not found."]},
				{"name":"Competent","text":["The provision of better services to the citizens by the county is described as the primary driver behind the proposed solution."]}
			]
		},
		{
			"name":"D1A: JUSTIFICATION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Succinct explanations of the significance of the business drivers are presented."]}
			]
		},
		{
			"name":"D2: NO SOLUTION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"D3: SOLUTION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The solution includes the priority to hire a CSO, which is insightful. Adequate detail for the solution within business priorities is not found."]},
				{"name":"Competent","text":["The significance of the project to the county and NIST, PCI DSS, and other standards, are discussed in the concluding section of the prospectus."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["A Capstone Prospectus that describes a PCI DSS compliance project for a county government is presented in the submission. the work provides adequate descriptions of the problem under investigation and the proposed technology solution, and includes adequate root cause, costs, risk, business impact, business drivers, and no-solution scenario analyses. All sections of the work, including Causes, are complete and meet standards."]},
				{"name":"Not Passing","text":["The submission presents the Capstone Proposal for PCI Compliance for a County Government. Some aspects of the submission, such as the clear rationale for the need to provide compliance, are complete and meet standards. Adequate detail is not observed for the following aspects: Problem Background, Reason for Approach, Prospectus Organization, Background Information, Causes, Business Impacts, Cost Analysis, Risk Analysis, Terms, Technology Solution, Business Drivers, as well as the Solution."]}
			]
		}
	]
};

var crdDDMTask2 = 
{
	"name": "DDM Task 2", 	//CRD name as it appears in EMA
	"tsname": "MSISA Capstone Prospectus",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work is mechanically sound and free of major errors."]}
			]
		},
		{
			"name":"A1: PROBLEM",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"A2: PLAN",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"A3: METHODOLOGY",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The methodology will follow the National Institute of Standards and Technology (NIST) Special Publication 800-53 Security and Privacy Controls for Federal Information Systems and Organizations, which is fitting."]}
			]
		},
		{
			"name":"A4: IMPLEMENTATION PROPOSAL",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"A5: OUTCOMES",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B1: PROJECT SCOPE",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B2: PROJECT RATIONALE",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B3: PROBLEM SUMMARY",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B4: PROBLEM BACKGROUND",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["Lack of compliance is suitably detailed. The background of the problem within the greater context is not observed."]},
				{"name":"Competent","text":["The Problem Background section explains that the county government is not PCI DSS compliant and presents historical insights into the reasons that contributed to the emergence of the problem in the context of current needs."]}
			]
		},
		{
			"name":"B5: NEED FOR THE SOLUTION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B6: REASON FOR APPROACH",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The need for the approach clearly includes the lack of skilled personnel. A logical discussion, juxtaposing alternate solutions, with the strengths and weaknesses of each, is not observed."]},
				{"name":"Competent","text":["A succinct justification for the selected approach that includes hiring of a chief security officer, is provided."]}
			]
		},
		{
			"name":"B7: PROSPECTUS ORGANIZATION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The Prospectus Organization clearly lists the sections to follow. Content summaries for each of the sections are not found."]},
				{"name":"Competent","text":["Succinct content outlines of the Problem Statement and the Technology Solution segments that comprise the remainder of the prospectus, are provided."]}
			]
		},
		{
			"name":"C1: BACKGROUND INFORMATION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The ability to currently only accept cash and check is described, which is valid. Adequate detail for the background information is not found."]},
				{"name":"Competent","text":["An adequate summary of the context in which the problem exists that situates the problem and provides direction to the project, is provided."]}
			]
		},
		{
			"name":"C2: CAUSES",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The lack of security is described logically. Adequate detail for the causes of the problem is not observed."]},
				{"name":"Competent","text":["The lack of an employee with security assurance responsibility is presented as the primary reason behind the problem in an adequate root cause analysis."]}
			]
		},
		{
			"name":"C3: BUSINESS IMPACTS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["Several impacts are listed, which is fitting. Adequate detail for the business impacts of the problem is not found."]},
				{"name":"Competent","text":["The impact fo the problem on the country officials are adequately outlined. "]}
			]
		},
		{
			"name":"C4: COST ANALYSIS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["An estimated cost for salary is listed, which is clear. Adequate detail for a source-supported cost analysis for all the associated costs is not evident."]},
				{"name":"Competent","text":["The salary of the chief security officer is presented as the primary factor contributing to the costs of the project."]}
			]
		},
		{
			"name":"C5: RISK ANALYSIS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["A number of risks are identified, which is valid. A logical identification for each of the risks, with level and likelihood for each, is not found."]},
				{"name":"Competent","text":["Reputational and financial risks associated with the proposed solution are discussed. "]}
			]
		},
		{
			"name":"C6: ASSUMPTIONS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["This aspect can be more accurately assessed once the other aspects have been revised to meet standards."]},
				{"name":"Competent","text":["The submission clearly assumes that the county has the infrastructure and the financial resources to complete the project."]}
			]
		},
		{
			"name":"C7: LIMITATIONS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["This aspect can be more accurately assessed once the other aspects have been revised to meet standards."]},
				{"name":"Competent","text":["The limited throughput of the CSO that will be hired is presented as a constraint the project will be subjected to during it execution."]}
			]
		},
		{
			"name":"C8: TERMS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["XX terms are clearly listed and expanded. Source-supported definitions for all the technical terms used in the prospectus are not evident."]},
				{"name":"Competent","text":["Adequate expansions and explanations of seven technical acronyms, including CSO, VLAN, and PII, are provided."]}
			]
		},
		{
			"name":"D: TECHNOLOGY SOLUTION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["Several reasons for implementing a technology solution are soundly provided. A logical explanation, with adequate detail, for why a technology solution is needed, is not evident."]},
				{"name":"Competent","text":["The proposed solution and the gaps it intends to fill are summarized in the introductory section of the Technology Solution segment."]}
			]
		},
		{
			"name":"D1: BUSINESS DRIVERS",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["Three business drivers are included, which is clear. Adequate detail for the business drivers is not found."]},
				{"name":"Competent","text":["The provision of better services to the citizens by the county is described as the primary driver behind the proposed solution."]}
			]
		},
		{
			"name":"D1A: JUSTIFICATION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Succinct explanations of the significance of te3h business drivers are presented."]}
			]
		},
		{
			"name":"D2: NO SOLUTION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"D3: SOLUTION",
			"grades": [	
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The solution includes the priority to hire a CSO, which is insightful. Adequate detail for the solution within business priorities is not found."]},
				{"name":"Competent","text":["The significance of the project to the county and NIST, PCI DSS, and other standards, are discussed in the concluding section of the prospectus."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["A Capstone Prospectus that describes a PCI DSS compliance project for a county government is presented in the submission. the work provides adequate descriptions of the problem under investigation and the proposed technology solution, and includes adequate root cause, costs, risk, business impact, business drivers, and no-solution scenario analyses. All sections of the work, including Causes, are complete and meet standards."]},
				{"name":"Not Passing","text":["The submission presents the Capstone Proposal for PCI Compliance for a County Government. Some aspects of the submission, such as the clear rationale for the need to provide compliance, are complete and meet standards. Adequate detail is not observed for the following aspects: Problem Background, Reason for Approach, Prospectus Organization, Background Information, Causes, Business Impacts, Cost Analysis, Risk Analysis, Terms, Technology Solution, Business Drivers, as well as the Solution."]}
			]
		}
	]
};

var crdLQTTask4 = 
{
	"name": "LQT2 Task 4", 	//CRD name as it appears in EMA
	"tsname": "Oral Presentation: Multimedia Presentation",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE", 
			"grades": [			 
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work is mechanically sound and free of major errors."]}
			]
		},
		{
			"name":"A1. INTRODUCTION", 
			"grades": [			 
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A succinct summary of the candidate's academic and professional background is presented."]}
			]
		},
		{
			"name":"A2. OVERVIEW", 
			"grades": [			 
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The salient points of the completed project are intelligently outlined in the oral defense."]}
			]
		},
		{
			"name":"A3. DISCUSSION", 
			"grades": [			 
				{"name":"Not Evident","text":["The Discussion aspect will be assessed once a link to the Panopto recording of the oral defense of the capstone project is in place."]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Adequate summaries of the learnings from the capstone experience in the major security domains are presented."]}
			]
		},
		{
			"name":"B. LINK TO PANOPTO RECORDING", 
			"grades": [			 
				{"name":"Not Evident","text":["The Link to Panopto Recording aspect will be assessed once a link to the Panopto recording of the oral defense of the capstone project is in place."]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work presents the following live link to the oral defense of the capstone project: PANOPTO_LINK"]}
			]
		},
		{
			"name":"C. COPY OF MULTIMEDIA PRESENTATION", 
			"grades": [			 
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A clear copy of a XX-slide PowerPoint presentation is presented."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission provides a multimedia presentation and a link to a XX-minute recording of the oral defense of the capstone project that describes the implementation of Cyber Threat Intelligence in an organizational context. The assessment outlines the candidate's background, the project and its phases, and the learning from the capstone experience. All sections of the assessment, including Overview, are complete and meet standards."]},
				{"name":"Not Passing","text":["The submission provides a clear copy of a multimedia presentation to support the oral defense of the capstone project. A link to the Panopto recording of the oral defense cannot be located. A link to the recording is needed to assess most of the aspects of the work."]}
			]
		}
	]
};

var crdAKM1Task1 = 
{
	"name": "AKM1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "AKM1 Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C740%20Fundamentals%20of%20Data%20Analytics%20(AAE2,%20AKM1,%20IVP2)",
	"aspects": [
		{
			"name":"A: Dataset Preparation",
			"grades": [			
				{"name":"Not Evident","text":["A reduced dataset of 1,046 events is provided in the submission. The dataset includes an observation that is missing information about District/Sector. A cleaned dataset with appropriate handling of all missing or unnecessary data is needed to meet requirements."]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A dataset that provides attributes of [Number of events] events that adequately support the distribution analysis of the incidents captured from the 911 calls to the Seattle Police Department is provided."]}
			]
		},
		{
			"name":"B: Data Preparation Explanation",
			"grades": [			
				{"name":"Not Evident","text":["The Data Preparation Explanation aspect will be assessed once a cleaned dataset is in place."]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work presents satisfactory justifications of the dimensionality reduction and the [row removal OR the missing sector data imputation] that resulted in the dataset that supports the distribution analysis of the incidents."]}
			]
		},
		{
			"name":"C: Data Sheets",
			"grades": [			
				{"name":"Not Evident","text":["The Data Preparation Explanation aspect will be assessed once a cleaned dataset is in place."]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Accurate tables and clear bar charts effectively support the distribution analysis of the events represented in the cleaned dataset by date, type, or sector."]}
			]
		},
		{
			"name":"D: Data Sheets Observations Summary",
			"grades": [			
				{"name":"Not Evident","text":["The Data Preparation Explanation aspect will be assessed once a cleaned dataset is in place."]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Relevant observations from the visual inspection of each datasheet are presented. "]}
			]
		},
		{
			"name":"E: Fit",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A sound analysis of the fit of the model to its data that observes an accurately calculated [coefficient of determination OR other detail] is provided."]}
			]
		},
		{
			"name":"F: Outliers",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission presents an adequate description of the impact of the outliers on the regression model that notes the change of the [coefficient of determination that results from the removal of the outliers from consideration OR other detail]."]}
			]
		},
		{
			"name":"G: Residuals",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The work provides an accurate residual plot. A clear matching explanation that will improve the model is not readily evident."]},
				{"name":"Competent","text":["A clear residual plot and a reasonable recommendation to [remove the outliers to improve the fit of the model to its data OR other detail] are provided."]}
			]
		},
		{
			"name":"H: Current Qualification",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work presents a thorough justification for the assessment of the precinct's current ineligibility for funding based on the comparison of the average number of officers at the scene from the cleaned dataset and the funding threshold."]}
			]
		},
		{
			"name":"I: Precautions or Behaviors",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["A succinct discussion of the sensitive data in the given dataset is provided. Adequate descriptions of the specific precautions the precinct is to exercise when both working with and communicating about its sensitive data are not observed."]},
				{"name":"Competent","text":["Descriptions of reasonable precautions the Seattle Police Department is to exercise when working with and communicating about its sensitive data, such as [one example; e.g. sharing the data with authorized parties], are provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents sound analyses of the distribution of [how many] events captured from the 911 calls to the Seattle Police Department by date, type, and sector; the given linear regression model and the behavior of its outliers and residuals; the eligibility of the precinct for additional state funding; and the specific precautions the department is to exercise when working with and communicating about its sensitive data. All aspects of the work, including Fit, are presented in satisfactory detail and meet standards."]},
				{"name":"Not Passing","text":["The submission presents adequate datasheets that support the distribution analysis of the 1,045 events captured from the 911 calls to the Seattle Police Department represented in the cleaned dataset; descriptions of the impact of the outliers on the regression model; and assessment of the precinct's current ineligibility for additional state funding. Summaries of datasheet observations, descriptions of the fit of the model to its data, a clear explanation that will improve the model, and descriptions of specific precautions to be exercised to safeguard the sensitive data from the given scenario are not observed. A revision of the responses to the task prompts Data Sheets Observations Summary, Fit, Residuals, and Precautions or Behaviors are needed to meet standards."]}
			]
		}
	]
};

var crdGWA2Task3 = 
{
	"name": "GWA2 Task 3",
	"tsname": "GWA2 Task 3",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C498%20MS%20IT%20Management%20Capstone%20(HIT2,%20GWA2)",
	"aspects": [
		{
			"name":"Program Outcome 1",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A summary of the project to develop and implement a threat intelligence framework for SunTrust Bank to combat cybercrime is provided with excellent technical detail in the submission."]}
			]
		},
		{
			"name":"Program Outcome 2",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The included timeframe that clearly identifies tasks dependent on previous tasks supports the ability to manage activities in the development."]}
			]
		},
		{
			"name":"Program Outcome 3",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"Program Outcome 4",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"Program Outcome 5",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"Program Outcome 6",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"Program Outcome 7",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents the report for a software evaluation for Virtualization and Automation. All aspects of the submission, including diagrams such as the Virtual Machine Build Workflow to document the design, are complete and meet standards.","The submission presents a thorough Capstone Report which describes implementing a threat intelligence framework solution to mitigate cyber attacks for SunTrust Bank and includes a compelling presentation that highlights the most salient aspects of the project. All aspects of the submission are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdGWA2Task2 = 
{
	"name": "GWA2 Task 2",
	"tsname": "GWA2 Task 2",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C498%20MS%20IT%20Management%20Capstone%20(HIT2,%20GWA2)",
	"aspects": [
		{
			"name":"Program Outcome 1",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Adequate summaries of dissemination plan for the results of the project are presented."]}
			]
		},
		{
			"name":"Program Outcome 2",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Adequate summaries of the management of the project and its stakeholders are presented. A clear project plan is presented."]}
			]
		},
		{
			"name":"Program Outcome 3",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"Program Outcome 4",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission presents succinct descriptions and assessments of the risks associated with the proposed implementation of the technology solution."]}
			]
		},
		{
			"name":"Program Outcome 5",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission presents an adequate summary and a clear justification of the proposed technology solution."]}
			]
		},
		{
			"name":"Program Outcome 6",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A succinct explanation for how the proposed project will demonstrate Outcome 6 is provided. The support of the project of the organization's business priorities is summarized."]}
			]
		},
		{
			"name":"Program Outcome 7",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Adequate summaries of the infrastructure problem under investigation and the proposed technology solution are provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a thorough Capstone Prospectus that outlines the plan to develop a technology solution for <ORG>. The work presents an adequate summary of the problem under investigation, the proposed technology solution, and the salient points of the project, including its risks. The competencies supporting each of the program objectives are adequately demonstrated and the submission meets the requirements of the task."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdEYP1Task1 = 
{
	"name": "EYP1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "EYP Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C769%20IT%20Capstone%20Written%20Project%20(EYP1)",
	"aspects": [
		{
			"name":"A. TOPIC APPROVAL FORM", 
			"grades": [
				{"name":"Not Evident","text":["The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor cannot be located."]},
				{"name":"Competent","text":["The Topic Approval Form is signed by a Course Instructor."]}
			]
		},
		{
			"name":"B. CAPSTONE RELEASE FORM", 
			"grades": [
				{"name":"Not Evident","text":["The Capstone Release Form aspect will be assessed once a completed Topic Approval Form is in place."]},
				{"name":"Competent","text":["A completed and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided."]}
			]
		},
		{
			"name":"C. HUMAN SUBJECTS FAQ QUIZ", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Competent","text":["A clear copy of the results from the successfully completed Human Subjects FAQ Quiz is presented."]}
			]
		},
		{
			"name":"D. IRB COMPLIANCE", 
			"grades": [
				{"name":"Not Evident","text":["The IRB Compliance aspect will be assessed once a completed Topic Approval Form is in place."]},
				{"name":"Competent","text":["The proposal complies with IRB standards for exemption status."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The Waivers, IRB Quiz and Compliance, as well as the Topic Approval form are all complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdEYP1Task2 = 
{
	"name": "EYP1 Task 2", 	//CRD name as it appears in EMA
	"tsname": "EYP Task 2",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C769%20IT%20Capstone%20Written%20Project%20(EYP1)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work is mechanically sound and free from major errors."]}
			]
		},
		{
			"name":"TECHNICAL WRITING STYLE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The proposal exhibits a sound technical writing style and appropriate use of terminology."]}
			]
		},
		{
			"name":"APA FORMATTING", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The formatting of the document generally aligns with the conventions of the American Psychological Association."]}
			]
		},
		{
			"name":"A1. PROBLEM", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The [security OR infrastructure OR type of issue] [NAME OF COMPANY] is experiencing due to [REASON] are succinctly overviewed in the Abstract of the prospectus in the summary of the problem under investigation."]}
			]
		},
		{
			"name":"A2. IT SOLUTION", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["An adequately detailed proposal for the implementation of [SOLUTION] for the chosen organization is presented."]}
			]
		},
		{
			"name":"A3. PLAN OF IMPLEMENTATION", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A clear summary of the proposed implementation of [WHAT] is presented."]}
			]
		},
		{
			"name":"B. REVIEW OF OTHER WORK", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A reasonable review of [HOW MANY] published works that provided direction to the project during the development phase is present."]}
			]
		},
		{
			"name":"B1. RELATION OF ARTIFACT TO PROJECT DEVELOPMENT", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission clearly explains how the [HOW MANY] reviewed outside works supported the contextualization of the problem and provided direction to the project during planning."]}
			]
		},
		{
			"name":"C. RATIONALE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The significance of the project to [NAME COMPANY] is adequately explained in the summary of the project rationale."]}
			]
		},
		{
			"name":"D. CURRENT PROJECT ENVIRONMENT", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A sound systems analysis for the project deliverables is present."]}
			]
		},
		{
			"name":"E. METHODOLOGY", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission provides a succinct explanation of the application of the [WHICH] methodology that has been selected to guide the project to completion."]}
			]
		},
		{
			"name":"F1. GOALS, OBJECTIVES, AND DELIVERABLES TABLE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work presents adequate summaries for how the objectives and key anticipated project deliverables supporting the project goal to [SUMMARIZE PROJECT GOAL] will be met."]}
			]
		},
		{
			"name":"F2. GOALS, OBJECTIVES, AND DELIVERABLES DESCRIPTIONS", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The objectives and key anticipated project deliverables supporting the project goal to [SUMMARIZE PROJECT GOAL] are adequately described."]}
			]
		},
		{
			"name":"G. PROJECT TIMELINE WITH MILESTONES", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Reasonable completion dates for the [HOW MANY] key anticipated project deliverables are presented in a clear timeline."]}
			]
		},
		{
			"name":"H. OUTCOME", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A thorough evaluation framework consisting of functionality tests, data integrity tests, and peer reviews is given."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a proposal to [WHAT] for [COMPANY]. The work adequately outlines the planning for the project and summarizes the goals, timeline, methodology, and rationale for the implementation. All sections of the assessment, including Review of Other Work, are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdEYP1Task3 = 
{
	"name": "EYP1 Task 3", 	//CRD name as it appears in EMA
	"tsname": "EYP Task 3",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C769%20IT%20Capstone%20Written%20Project%20(EYP1)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work is mechanically sound and free from major errors."]}
			]
		},
		{
			"name":"TECHNICAL WRITING STYLE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The proposal exhibits a sound technical writing style and appropriate use of terminology."]}
			]
		},
		{
			"name":"APA FORMATTING", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The formatting of the document generally aligns with the conventions of the American Psychological Association."]}
			]
		},
		{
			"name":"A. SUMMARY", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission presents a succinct summary of the development [SUMMARIZE PROJECT]."]}
			]
		},
		{
			"name":"B. REVIEW OF OTHER WORK", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A reasonable review of [HOW MANY] published works that provided direction to the project during the development phase are present."]}
			]
		},
		{
			"name":"C. CHANGES TO PROJECT ENVIRONMENT", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Changes such as XX and XX are discussed thoroughly in the submission."]}
			]
		},
		{
			"name":"D. METHODOLOGY", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission provides a succinct explanation of the application of the [WHICH] methodology that was used to support the execution of the project."]}
			]
		},
		{
			"name":"E. PROJECT GOALS AND OBJECTIVES", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The work presents adequate summaries for how the objectives and key anticipated project deliverables supporting the project goal to [SUMMARIZE PROJECT GOAL] were met."]}
			]
		},
		{
			"name":"F. PROJECT TIMELINE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A complete timeline with milestones and start/end dates is provided."]}
			]
		},
		{
			"name":"G. UNANTICIPATED REQUIREMENTS", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Adequate explanations for how the anomalies that emerged after the project initiated, such as [EXAMPLE], were resolved, are provided."]}
			]
		},
		{
			"name":"H. CONCLUSION", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A logical discussion of the completed project and its future effects to [WHICH COMPANY] is present."]}
			]
		},
		{
			"name":"I. PROJECT DELIVERABLES", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission present actual project artifacts, including [EXAMPLE], [in the appendices of the report/separate file/throughout the report]."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission describes the implementation of [WHAT] for [COMPANY]. The work presents an adequate summary of the development of the project and presents actual project artifacts that evidence project completion. All sections of the assessment, including Review of Other Work, are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdDDT1Task1 = 
{
	"name": "DDT1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "DDT1 Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C435%20Technical%20Writing%20(DDT1)",
	"aspects": [
		{
			"name":"A. IT CAPSTONE WAIVER", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A completed and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided."]}
			]
		},
		{
			"name":"B. IT CAPSTONE THIRD-PARTY RELEASE TEMPLATE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["As the project is not based upon and does not include Restricted Information, an IT Capstone Third-Party Release letter is not required."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission that includes a declaration that the capstone project is not based upon and does not include Restricted Information in a digitally signed IT Capstone Waiver/Release Form is complete and meets standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdDDT1Task2 = 
{
	"name": "DDT1 Task 2", 	//CRD name as it appears in EMA
	"tsname": "DDT1 Task 2",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C435%20Technical%20Writing%20(DDT1)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The submission has overall sound articulation."]}
			]
		},
		{
			"name":"A. TOPIC", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The submission identifies the topic as \"<TOPIC>\" and aligns with the Software Development degree program."]}
			]
		},
		{
			"name":"B1. COVER SHEET", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The proposal begins with a clear cover sheet which includes all four required elements."]}
			]
		},
		{
			"name":"B2. INTRODUCTION", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The proposal introduction presents a detailed overview of the <SUBMISSION SPECIFIC> process and proposed solution for <COMPANY>."]}
			]
		},
		{
			"name":"B3. REVIEW OF OTHER WORK", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B4. RATIONALE", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B5A. SYSTEMS ANALYSIS", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B5B. METHODOLOGY", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["<METHODOLOGY> is an appropriate method of execution for the proposed development."]}
			]
		},
		{
			"name":"B6. PROJECT GOALS AND OBJECTIVES", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B7. PROJECT DELIVERABLES", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B8. PROJECT TIMELINE WITH MILESTONES", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["A complete timeline with milestones and start/end dates is provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission represents a capstone proposal to develop and implement a <SUBMISSION SPECIFIC> application for <COMPANY>. All aspects of the capstone proposal including the solution and timeline are complete with excellent detail and meet task requirements"]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdENT1Task1 = 
{
	"name": "ENT1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "ENT1 Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C436%20IT%20Capstone%20Written%20Project%20(ENT1)",
	"aspects": [
		{
			"name":"A. IT CAPSTONE WAIVER", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A completed and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided."]}
			]
		},
		{
			"name":"B. IT CAPSTONE THIRD-PARTY RELEASE TEMPLATE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["As the project is not based upon and does not include Restricted Information, an IT Capstone Third-Party Release letter is not required."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission that includes a declaration that the capstone project is not based upon and does not include Restricted Information in a digitally signed IT Capstone Waiver/Release Form is complete and meets standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdENT1Task2 = 
{
	"name": "ENT1 Task 2", 	//CRD name as it appears in EMA
	"tsname": "ENT1 Task 2",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C436%20IT%20Capstone%20Written%20Project%20(ENT1)",
	"aspects": [
		{
			"name":"ARTICULATION OF RESPONSE", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The submission has overall sound articulation."]}
			]
		},
		{
			"name":"A. TOPIC", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The submission identifies the topic as \"<TOPIC>\" and aligns with the Software Development degree program."]}
			]
		},
		{
			"name":"B1. COVER SHEET", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The proposal begins with a clear cover sheet which includes all four required elements."]}
			]
		},
		{
			"name":"B2. INTRODUCTION", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The proposal introduction presents a detailed overview of the <SUBMISSION SPECIFIC> process and proposed solution for <COMPANY>."]}
			]
		},
		{
			"name":"B2A. DESCRIPTION OF PROJECT", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B2B. REVIEW OF OTHER WORK", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B2C. RATIONALE", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The <RATIONALE/TOOL> is logically explained in the submission."]}
			]
		},
		{
			"name":"B2D. SYSTEMS ANALYSIS AND METHODOLOGY", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B3. PROJECT GOALS AND OBJECTIVES", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":["The explanation for the XX goal and XX associated objectives are logically detailed with clear, identified outcomes for each."]}
			]
		},
		{
			"name":"B3A. GOALS AND OBJECTIVES LIST", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B4. PROJECT TIMELINE", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B5. PROJECT DEVELOPMENT", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"B6. EVIDENCE OF PROJECT DELIVERABLES", 
			"grades": [
				{"name":"UNSATISFACTORY/NOT PRESENT","text":[""]},
				{"name":"DOES NOT MEET STANDARD","text":[""]},
				{"name":"MINIMALLY COMPETENT","text":[""]},
				{"name":"COMPETENT","text":[""]},
				{"name":"HIGHLY COMPETENT","text":[""]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a thorough Capstone Report which describes the implementation of <SOLUTION>. All aspects of the submission, including the exemplary screenshots in the Appendices to document the development and implementation, are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdIXPTask1 = 
{
	"name": "IXP Task 1",
	"tsname": "IXP Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C744%20Data%20Mining%20and%20Analytics%20II%20(ACE3,%20IXP2)",
	"aspects": [
		{
			"name":"A: TOOL SELECTION: BENEFITS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[
					"The submission presents a succinct comparative justification for the selection of [SAS OR R OR Python] for the analysis of the churn of the customers of the telecom company over [CHOOSE THE OTHER TWO: Python AND/OR R AND/OR SAS]. "]}
			]
		},
		{
			"name":"B: TOOL SELECTION: AIMS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["The goal of the analysis to [AS STATED IN THE WORK] is adequately outlined."]}
			]
		},
		{
			"name":"C: TOOL SELECTION: PRESCRIBED ANALYSIS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":["The submission clearly identifies [Logistic Regression] as a non-descriptive technique to use on the given data. While [frequency analysis] is proposed, an appropriate descriptive technique cannot be located. Please identify a method that performs an appropriate descriptive function."]},	
				{"name":"Competent","text":[
					"The submission clearly identifies [METHOD] as a descriptive, and [METHOD] as a non-descriptive method to support the analysis of the customer attrition."]}
			]
		},
		{
			"name":"D: DATA EXPLORATION AND PREPARATION: TARGET VARIABLE",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["The target variable Churn is accurately identified."]}
			]
		},
		{
			"name":"E: DATA EXPLORATION AND PREPARATION: INDEPENDENT PREDICTOR",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["[VARIABLE NAME OR NAMES] [IS/ARE] appropriately identified as predictors represented in the given dataset."]}
			]
		},
		{
			"name":"F: DATA EXPLORATION AND PREPARATION: GOAL",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"G: DATA EXPLORATION AND PREPARATION: STATISTICAL IDENTITY",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["The work describes the data in the given dataset and succinctly outlines the phenomenon to be predicted."]}
			]
		},
		{
			"name":"H: DATA EXPLORATION AND PREPARATION: CLEANING",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["The work presents an adequate overview of the code that is used to prepare the data for the application of the selected methods and provides the cleaned dataset in a separate file."]}
			]
		},
		{
			"name":"I: DATA ANALYSIS: UNIVARIATE STATISTICS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["Accurate [histograms OR other types of visualizations] effectively support the univariate distribution analysis of the variables represented in the given dataset."]}
			]
		},
		{
			"name":"J: DATA ANALYSIS: BIVARIATE STATISTICS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["Accurate [types of visualizations used] effectively support the bivariate analysis of the interrelationship between the predictors and the target variable. "]}
			]
		},
		{
			"name":"K: DATA ANALYSIS: METHODS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":["The submission applies and annotates [Logistic Regression] to explain customer churn. The application and interpretation of an appropriate descriptive method cannot be located."]},	
				{"name":"Competent","text":["Annotated and clear applications of the chosen methods, [Logistic Regression and Principal Components Analysis] are applied on the cleaned dataset to explain customer churn. "]}
			]
		},
		{
			"name":"L: DATA ANALYSIS: JUSTIFICATION",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["A clear explanation for why the selected methods are appropriate to be used on the given dataset is presented."]}
			]
		},
		{
			"name":"M: DATA ANALYSIS: VISUAL REPRESENTATION",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["The work provides succinct justification for the selection of visualization elements to support the analysis of the customer churn, including [LIST EXAMPLES OF VISUALIZATIONS, such as histograms]. "]}
			]
		},
		{
			"name":"N: DATA SUMMARY: PHENOMENON",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"O: DATA SUMMARY: DETECTION",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["The work clearly identifies [LIST OF VARIABLES] as the predictors that most significantly influence the churn of the customer."]}
			]
		},
		{
			"name":"P: SOURCES",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["[How many] outside sources that support the work are listed in the References section of the analysis and are appropriately referred to in the narrative."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents an analysis of the attrition phenomenon among the customers of a telecom company that relies on the [LIST THE TWO METHODS, e.g. Principal Component Analysis and Logistic Regression] methods. The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the [SAS or R OR Python] code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary: Detection, are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdJNPTask2 = 
{
	"name": "JNP Task 2",
	"tsname": "JNP Task 2",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
	"aspects": [
		{
			"name":"A: RESEARCH QUESTION",
			"grades": [
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A clear summary of the hypothesis that country of origin is statistically significant in determining whether a wine rating is in the upper or lower 50% of wine ratings is presented."]}
			]
		},
		{
			"name":"B: DATA COLLECTION",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Competent","text":["The work clearly identifies the Wine Enthusiast dataset found on Kaggle.com as the data sources and outlines the data collection procedures using SAS."]}
			]
		},
		{
			"name":"C: DATA EXTRACTION AND PREPARATION",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Competent","text":["The work clearly identifies the U.S. Census website as the data sources and outlines the data collection procedures."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents an analysis of the relationship between poverty and employment in the Mountain State region and provides clear directions for further research, The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the R code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary and Implications, are complete and meet standards.",
										  "The submission presents an analysis of the significance of wine origin and variety in review scoring that relies on Chi-Squared tests and regression methods. The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the SAS code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary and Implications, are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdAEE2Task1 = 
{
	"name": "AEE2 Task 1", 	//CRD name as it appears in EMA
	"tsname": "AEE2 Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
	"aspects": [
		{
			"name":"A. TOPIC APPROVAL FORM", 
			"grades": [
				{"name":"Not Evident","text":["The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor cannot be located."]},
				{"name":"Competent","text":["The Topic Approval Form is signed by a Course Instructor."]}
			]
		},
		{
			"name":"B. CAPSTONE RELEASE FORM", 
			"grades": [
				{"name":"Not Evident","text":["The Capstone Release Form aspect will be assessed once a completed Topic Approval Form is in place."]},
				{"name":"Competent","text":["A completed and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The Topic Approval Form and Capstone Release Form are all complete and meet task requirements."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdMDP1Task1 = 
{
	"name": "MDP1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "MDP1 Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C964%20Computer%20Science%20Capstone%20(MDP1)",
	"aspects": [
		{
			"name":"A. Topic Approval Form", 
			"grades": [
				{"name":"Not Evident","text":["This aspect will be evaluated once a signed Topic Approval Form is in place."]},
				{"name":"Competent","text":["The Topic Approval Form is signed by a Course Instructor."]}
			]
		},
		{
			"name":"B. Capstone Release Form", 
			"grades": [
				{"name":"Not Evident","text":["The Capstone Release Form aspect will be evaluated once a signed Topic Approval Form is in place."]},
				{"name":"Competent","text":["A completed and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided."]}
			]
		},
		{
			"name":"C. IRB Form",
			"grades": [			
				{"name":"Not Evident","text":["The IRB Form aspect will be evaluated once a signed Topic Approval Form is in place."]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission includes a completed IRB Form an email that aptly confirms the completion of the Human Subjects FAQ Quiz."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The Topic Approval Form and Capstone Release Form are all complete and meet task requirements."]},
				{"name":"Not Passing","text":["The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor is not observed."]}
			]
		}
	]
};

var crdKYP2Task1 = 
{
	"name": "KYP2 Task 1", 	//CRD name as it appears in EMA
	"tsname": "KYP2 Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C796%20Cybersecurity%20Graduate%20Capstone%20(KYP2)",
	"aspects": [
		{
			"name":"A. Topic Approval Form", 
			"grades": [
				{"name":"Not Evident","text":["This aspect will be evaluated once a signed Topic Approval Form is in place."]},
				{"name":"Competent","text":["The submission provides a Topic Approval Form is signed by a Course Instructor and documentation that confirms the completion of the Human Subjects FAQ Quiz."]}
			]
		},
		{
			"name":"B. Capstone Release Form", 
			"grades": [
				{"name":"Not Evident","text":["The Capstone Release Form aspect will be evaluated once a signed Topic Approval Form is in place."]},
				{"name":"Competent","text":["A completed and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The Topic Approval Form and Capstone Release Form are complete and meet task requirements."]},
				{"name":"Not Passing","text":["The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor is not observed."]}
			]
		}
	]
};

var crdAEE2Task2 = 
{
	"name": "AEE2 Task 2",
	"tsname": "AEE2 Task 2",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
	"aspects": [
		{
			"name":"A: RESEARCH QUESTION",
			"grades": [
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A clear summary of the hypothesis that country of origin is statistically significant in determining whether a wine rating is in the upper or lower 50% of wine ratings is presented."]}
			]
		},
		{
			"name":"B: DATA COLLECTION",
			"grades": [
				{"name":"Not Evident","text":["The work clearly identifies the [DATASET] found on [DATASET_LOCATION] as the data sources. A logical discussion with adequate details to describe the advantages and disadvantages of the data-gathering methodology used and details about any challenges encountered during the process of collecting the data are not observed."]},
				{"name":"Competent","text":["The work clearly identifies the Wine Enthusiast dataset found on Kaggle.com as the data sources and outlines the data collection procedures using SAS."]}
			]
		},
		{
			"name":"C: DATA EXTRACTION AND PREPARATION",
			"grades": [
				{"name":"Not Evident","text":["The work clearly identifies the required libraries and the import command used. An adequate explanation of the tools and techniques used for data extraction and data preparation, the justification for using the described tools and techniques, including any advantages or disadvantages of these when used with your data-extraction and -preparation methods, is not evident."]},
				{"name":"Competent","text":["The work clearly identifies the U.S. Census website as the data sources and outlines the data collection procedures."]}
			]
		},
		{
			"name":"E: DATA SUMMARY AND IMPLICATIONS",
			"grades": [
				{"name":"Not Evident","text":["The submission provides a conclusion with summary statistics which is fitting. An adequate summary of the implications of the data analysis in the context of the research question, a recommend a course of action based on the results, and two proposed directions or approaches for future study of the data set are not evident in the work."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents an analysis of the relationship between poverty and employment in the Mountain State region and provides clear directions for further research, The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the R code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary and Implications, are complete and meet standards.",
										  "The submission presents an analysis of the significance of wine origin and variety in review scoring that relies on Chi-Squared tests and regression methods. The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the SAS code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary and Implications, are complete and meet standards."]},
				{"name":"Not Passing","text":["The submission presents a Data Analytics Report that thoroughly describes the analysis of important factors contributing to employee attrition using Logistic Regression, Decision Tree, and Random Forest on the IBM Employee Attrition and Performance Dataset. The work provides a clear summary of the research question, intelligent analysis, and many salient points of the project. Some aspects are present with limited details. The Data Collection, Data Extraction And Preparation, and Data Summary And Implications aspects need further development to meet task requirements."]}
			]
		}
	]
};

var crdJNPTask3 = 
{
	"name": "JNP Task 3",
	"tsname": "JNP Task 3",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
	"aspects": [
		{
			"name":"A: EXECUTIVE SUMMARY AND IMPLICATIONS",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B1: PRESENTATION: ORGANIZATION AND PROFESSIONALISM",
			"grades": [
				{"name":"Not Evident","text":["The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panopto presentation is not observed."]},
				{"name":"Competent","text":["The submission presents professionally delivered presentation of the salient points of <SUBJECT> in a Panopto recording."]}
			]
		},
		{
			"name":"B2: PRESENTATION: CONTENT",
			"grades": [
				{"name":"Not Evident","text":["The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panopto presentation is not observed."]},
				{"name":"Competent","text":["The presentation aptly discusses the problem under investigation and the analysis of <SUBJECT>."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a link to a Panopto recordings that discuss the analysis of <SUBJECT> and outline the salient points of the project. All aspects of the work, including Presentation: Content, are presented in adequate detail and meet standards."]},
				{"name":"Not Passing","text":["The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panoptu presentation is not observed. This area needs further development to meet task requirements."]}
			]
		}
	]
};

var crdAEE2Task3 = 
{
	"name": "AEE2 Task 3",
	"tsname": "AEE2 Task 3",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
	"aspects": [
		{
			"name":"A: EXECUTIVE SUMMARY AND IMPLICATIONS",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B1: PRESENTATION: ORGANIZATION AND PROFESSIONALISM",
			"grades": [
				{"name":"Not Evident","text":["The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panopto presentation is not observed."]},
				{"name":"Competent","text":["The submission presents professionally delivered presentation of the salient points of <SUBJECT> in a Panopto recording."]}
			]
		},
		{
			"name":"B2: PRESENTATION: CONTENT",
			"grades": [
				{"name":"Not Evident","text":["The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panopto presentation is not observed."]},
				{"name":"Competent","text":["The presentation aptly discusses the problem under investigation and the analysis of <SUBJECT>."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a link to a Panopto recordings that discuss the analysis of <SUBJECT> and outline the salient points of the project. All aspects of the work, including Presentation: Content, are presented in adequate detail and meet standards."]},
				{"name":"Not Passing","text":["The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panoptu presentation is not observed. This area needs further development to meet task requirements."]}
			]
		}
	]
};

var crdNIPTask2 = 
{
	"name": "NIP1 Task 2",
	"tsname": "NIP1 Task 2",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C951%20Introduction%20to%20Artificial%20Intelligence%20(NIP1)",
	"aspects": [
		{
			"name":"A: Problem",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The modifications of the environment to [REASON FOR MODIFYING ENVIRONMENT] are succinctly outlined."]}
			]
		},
		{
			"name":"B: Improved Disaster Recovery",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission describes how the [WHAT, e.g. ADDITIONAL SENSORS] will provide the functionality to aid in the disaster recovery effort."]}
			]
		},
		{
			"name":"C: Architecture",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Summaries of [HOW MANY] significant modifications of the BubbleRob, including {EXAMPLE OF MODIFICATION], are provided. "]}
			]
		},
		{
			"name":"D: Goal Seeking",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission adequately describes how the configured robot navigates obstacles, including EXAMPLE, e.g. how the robot assesses if it can fit between two obstacles]. "]}
			]
		},
		{
			"name":"E: Advantages and Limitations",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The advantages and limitations, including when the robot performs optimally and when it underperforms, are adequately described."]}
			]
		},
		{
			"name":"F: Testing and Implementation Plan",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Adequate justification for test cases and scenarios, and description of the acceptance criterion for each is provided in the submission."]}
			]
		},
		{
			"name":"G: Improving the Prototype",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Reasonable summaries of the [SUMMARIES, e.g. application of reinforced learning, how the robot can learn what areas are safe terrain, and how the learnings are used to improve the robot’s abilities] are provided. "]}
			]
		},
		{
			"name":"H: Code",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A clear copy of the code of the modified BubbleRob agent is provided in a separate file. "]}
			]
		},
		{
			"name":"I: Panopto Recording",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A live link to a [HOW LONG]-minute Panopto recording that demonstrates the actions of the robot in the modified simulated environment, is provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission provides a demonstration of a disaster recovery robot's goal-seeking actions and an analysis of the modifications implemented on the BubbleRob agent and environment. The work outlines the sensory repertoire of the robotic agent and its limitations, as well as the testing, implementation, and optimization phases of the project. All aspects of the work, including Improving the Prototype, are presented with satisfactory support and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdNIPTask1 = 
{
	"name": "NIP1 Task 1",
	"tsname": "NIP1 Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C951%20Introduction%20to%20Artificial%20Intelligence%20(NIP1)",
	"aspects": [
		{
			"name":"A: Description",
			"grades": [
				{"name":"Competent","text":["The submission adequately discusses how the chatbot meets the needs of a career advisor."]}
			]
		},
		{
			"name":"B: Other Works",
			"grades": [
				{"name":"Approaching","text":["The submission provides a relevant summary of a single outside work by [SOURCE]. A review of multiple related chatbot implementations published within the last five years is not readily evident."]},
				{"name":"Competent","text":["An adequate summary of [HOW MANY] recently published third-party artifacts that contextualize the problem and inform the development of the chatbot is provided."]}
			]
		},
		{
			"name":"C: Job Types",
			"grades": [
				{"name":"Competent","text":["[HOW MANY] job types, including [EXAMPLE], are identified for interaction with the chatbot."]}
			]
		},
		{
			"name":"D: Training",
			"grades": [
				{"name":"Competent","text":["The submission adequately discusses the training cases used to find additional patterns for the chatbot to recognize."]}
			]
		},
		{
			"name":"E: Optimization",
			"grades": [
				{"name":"Competent","text":["An adequate explanation of the optimization process for the chatbot is provided."]}
			]
		},
		{
			"name":"F: Installation Manual",
			"grades": [
				{"name":"Competent","text":["An easy-to-follow installation manual is provided in a separate file."]}
			]
		},
		{
			"name":"G: Effectiveness of the Bot",
			"grades": [
				{"name":"Competent","text":["A concise explanation for how the chatbot will be monitored and maintained by adding new response categories to reduce incorrect responses is provided in the submission."]}
			]
		},
		{
			"name":"H: Challenges during Development",
			"grades": [
				{"name":"Competent","text":["Concise descriptions of using the UL and LI AIML elements to streamline choices are provided in the work."]}
			]
		},
		{
			"name":"I: The Bot Development Environment",
			"grades": [
				{"name":"Competent","text":["A succinct analysis of the chatbot development environment identifies the ease of chatbot testing as a strength and the lack of advanced functionality as a weakness."]}
			]
		},
		{
			"name":"J: Panopto Recording",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A live link to a [HOW LONG]-minute Panopto recording that demonstrates the actions of the chatbot in interacting with a user, is provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission adequately presents the advisory chatbot that has been developed to handle Computer Science student's career-based questions. All sections of the work are complete and meet standards."]},
				{"name":"Not Passing","text":["The submission presents a thorough report which describes a project to develop a chatbot with embedded artificial intelligence to assist career advisors at a university. The work provides a suitable description, explains the training process, and includes a link to an exemplary Panopto presentation that demonstrates an interactive session. One summary of a third-party work is provided in the submission, but, two are required to meet task standards. Please revise the Other Works section to include a second summary of a third-party work and update the Sources aspect if needed."]}
			]
		}
	]
};

var crdGWA2Task1 = 
{
	"name": "GWA2 Task 1",
	"tsname": "GWA2 Task 1",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C498%20MS%20IT%20Management%20Capstone%20(HIT2,%20GWA2)",
	"aspects": [
		{
			"name":"Topic Approval Form",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission presents an MSITM Capstone Topic Approval Form that is signed by the course instructor."]}
			]
		},
		{
			"name":"Capstone Waiver Form",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["An MSITM Capstone Waiver Form that states the project is not based upon and does not include restricted information is provided in the submission."]}
			]
		},
		{
			"name":"IRB Form",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission includes an email that aptly confirms the completion of the Human Subjects FAQ Quiz."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission provides an appropriate Topic Approval Form, Waiver Form, and Human Subjects FAQ Quiz. All sections are complete and meet task requirements."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdDDMTask1 = 
{
	"name": "DDM Task 1",
	"tsname": "DDM Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
	"aspects": [
		{
			"name":"Timeline Form",
			"grades": [
				{"name":"Competent","text":["A CAWA MSISCA Written Capstone Timeline Form that states the prospectus will be completed by <DATE> is aptly provided in the submission."]}
			]
		},
		{
			"name":"Capstone Waiver Release Form",
			"grades": [
				{"name":"Competent","text":["The submission includes a completed Capstone Waiver Release Form that is digitally signed and dated."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["A completed Timeline Form and Capstone Waiver Release Form are provided in the submission."]}
			]
		}
	]
};

var crdLQTTask1 = 
{
	"name": "LQT2 Task 1",
	"tsname": "LQT2 Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
	"aspects": [
		{
			"name":"Timeline Form",
			"grades": [
				{"name":"Competent","text":["A CAWA MSISCA Written Capstone Timeline Form that states the prospectus will be completed by <DATE> is aptly provided in the submission."]}
			]
		},
		{
			"name":"Capstone Waiver Release Form",
			"grades": [
				{"name":"Competent","text":["The submission includes a completed Capstone Waiver Release Form that is digitally signed and dated."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["A completed Timeline Form and Capstone Waiver Release Form are provided in the submission."]}
			]
		}
	]
};

var crdNHPTask1 = 
{
	"name": "NHP1 Task 1",
	"tsname": "NHP1 Task 1",
	"crd": "",
	"aspects": [
		{
			"name":"Algorithm Selection",
			"grades": [			
				{"name":"Competent","text":["The simple greedy algorithm is logically identified and can perform the task to meet all requirements."]}
			]
		},
		{
			"name":"Identification Information",
			"grades": [			
				{"name":"Not Evident","text":["The two Python files are clearly present. The identity initial comment is not found."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents two Python files with the appropriate initial comment on the first line. All sections are complete and meet task requirements."]},
				{"name":"Not Passing","text":["The submission presents the best route and delivery distribution for the Western Governors University Parcel Service (WGUPS). Most aspects of the submission meet standards and provide concise, correct code, including the ability in the HashTable to def lookup(self, key). The Identification information in the code is not observed."]}
			]
		}
	]
};

var crdEZP1Task1 = 
{
	"name": "EZP1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "EZP Task 1",	//CRD name as it appears in TaskStream
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C868%20Software%20Development%20Capstone%20(EZP1)",
	"aspects": [
		{
			"name":"A. TOPIC APPROVAL FORM", 
			"grades": [
				{"name":"Not Evident","text":["The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor cannot be located."]},
				{"name":"Competent","text":["The Topic Approval Form is signed by a Course Instructor."]}
			]
		},
		{
			"name":"B. CAPSTONE RELEASE FORM", 
			"grades": [
				{"name":"Not Evident","text":["The Capstone Release Form aspect will be assessed once a completed Topic Approval Form is in place."]},
				{"name":"Competent","text":["A completed and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided."]}
			]
		},
		{
			"name":"C. HUMAN SUBJECTS FAQ QUIZ", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Competent","text":["A clear copy of the results from the successfully completed Human Subjects FAQ Quiz is presented."]}
			]
		},
		{
			"name":"D. IRB COMPLIANCE", 
			"grades": [
				{"name":"Not Evident","text":["The IRB Compliance aspect will be assessed once a completed Topic Approval Form is in place."]},
				{"name":"Competent","text":["The proposal complies with IRB standards for exemption status."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The Waivers, IRB Quiz and Compliance, as well as the Topic Approval form are all complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdKYP2Task2 = 
{
	"name": "KYP2 Task 2", 
	"tsname": "KYP2 Task 2",
	"crd": "https://westerngovernorsuniversity.sharepoint.com/sites/GoransPlayground/Shared%20Documents/CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C796%20Cybersecurity%20Graduate%20Capstone%20(KYP2)",
	"aspects": [
		{
			"name":"Program Outcome 1",
			"grades": [			
				{"name":"Approaching","text":["Inability to store Controlled Unclassified Information (CUI) and Controlled Defense Information (CDI) is presented as the primary problem which is fitting, a concise statement is provided for analysis of systems and/or processes which describes using laptops for principal investigators and reconfiguring a fileserver to be compliant to store CDI and CUI, and, a list of project requirements is present in the work. A logical discussion with adequate details to summarize the problem, its severity, solutions to the problem, expected results, and the goal and objectives which the project will accomplish are not observed. The root cause analysis of the problem is present with limited details. The audit details, problem statement, problem causes, business impacts, cost analysis, risk analysis are not evident in the analysis of systems and processes. The functional (end-user) requirements, detailed requirements, and existing gaps which a successful project will fill are not clear in the project requirements section."]}
			]
		},
		{
			"name":"Program Outcome 2",
			"grades": [			
				{"name":"Approaching","text":["The submission provides concise descriptions of the information technology infrastructure to ensure confidentiality, integrity, and availability; and notes that lack of awareness of cyberlaw, regulations, and compliance is a primary factor that causes the problem. An adequate description of the deliverables associated with the design and development of the technology solution is not observed; the strategy for the implementation, phases of the rollout with a timeline in chronological order, details of the go-live, project task dependencies, deliverables, and training plan for users are not evident in the strategy for implementing the solution and anticipated outcomes from the project; a quality assurance plan, including formative and summative evaluation plans, plans for revision, the justification for test cases and scenarios, acceptance criteria are not observed; an adequate assessment of risks associated with the implementation with a discussion of the quantitative and qualitative risks and the cost/benefit relationships related to the project is not evident; and the resources assigned to each task is not evident in the project timeline."]}
			]
		},
		{
			"name":"Program Outcome 3",
			"grades": [			
				{"name":"Approaching","text":["The technology environments, tools, human resources, and costs needed to execute each project phase are presented in a clear list in the submission. A logical discussion with adequate details for the points listed under the Technology Environment, Cost, & Resources section is not observed."]}
			]
		},
		{
			"name":"Program Outcome 4",
			"grades": [			
				{"name":"Approaching","text":["An adequate description of the post-implementation systems and process analysis is provided including a diagram of the ACME SSRE Network Topology. A post-implementation risk assessment is not evident in the documentation for the developed solution."]}
			]
		},
		{
			"name":"Program Outcome 5",
			"grades": [			
				{"name":"Approaching","text":["The submission provides a discussion describing the compliance logs that will be created to track the research organization’s responses to NIST controls which is fitting. The description of the data that needs to be collected to support the project is present with limited details."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission presents a Cybersecurity Graduate Capstone Design and Development prospectus that thoroughly describes a security realignment project for ACME Research Group to upgrade the technology infrastructure to permit storage of Controlled Unclassified Information (CUI) and Controlled Defense Information (CDI). The submission provides a thorough description of the framework that will be used to assess the success of the technology solution and many salient points of the project. Some aspects are present with limited details. The Program Outcome 1, 2, 3, 4 and 5 aspects need further development to meet task requirements."]}
			]
		}
	]
};

//Template CRD Object
var crdXXXTaskX = 
{
	"name": "CRDX Task X", 	//CRD name as it appears in EMA
	"tsname": "CRD Task X",	//CRD name as it appears in TaskStream
	"aspects": [
		{
			"name":"AspectName", //Repeat the aspect object for as many aspect as there on the page. AspectName is what appears on the context menu.
			"grades": [			 //Repeat the grade object for as many (or few) grades as needed. "name" is what appears on the context menu.
				{"name":"Not Evident","text":[""]}, //The text property for a grade is an array so you can have multiple text on the menu.
				{"name":"Approaching","text":[""]},	//If you only have one text for a grade, I hook the text to the grade on the menu to save a an extra click.
				{"name":"Competent","text":[""]}
			]
		},
		//The sources aspects are define elsewhere and reused in multiple locations. Its worth it to mention this could be done 
		//with other aspects, like PC, that are shared with multiple CRDs as well. There is a placeholder object for PC above, pcAspect,
		//it just needs to be fleshed out. 
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":[""]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

//Future PC comment
//The submission is easy to read as a result of effective organization and intelligent sentence fluency. The spelling, punctuation, and grammar are sound with only a few minor errors detected. The use of headings enhances the evaluation.

//After adding a CRD object, it needs to get added to the list below. 
//I'm working on a better way to manage the data in the future.
var CRD = 
[
	crdBEMTask1,
	crdEWPTask1,
	crdEWPTask2,
	crdIYPTask1,
	crdCIMTask1,
	crdCIMTask2,
	crdLQTTask1,
	crdLQTTask2,
	crdLQTTask3,
	crdLQTTask4,
	crdAKM1Task1,
	crdGWA2Task1,
	crdGWA2Task2,
	crdGWA2Task3,
	crdENT1Task2,
	crdENT1Task1,
	crdDDT1Task2,
	crdDDT1Task1,
	crdEYP1Task3,
	crdEYP1Task2,
	crdEYP1Task1,
	crdIXPTask1,
	crdJNPTask2,
	crdJNPTask3,
	crdNIPTask1,
	crdNIPTask2,
	crdNHPTask1,
	crdEZP1Task1,
	crdDDMTask1,
	crdDDMTask2,
	crdDDMTask3,
	crdAAM1Task1,
	crdADE2Task1,
	crdACE3Task1,
	crdBOM1Task1,
	crdAEE2Task3,
	crdAEE2Task2,
	crdAEE2Task1,
	crdKYP2Task2,
	crdKYP2Task1,
	crdMDP1Task1,
	sourcesAspectTS,
	sourcesAspectEMA,
	cIReferral,
	pcAspect
];
























