// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

//var port = chrome.runtime.connect({name: "knockknock"});

var thisTask = "";
var gradeTexts = [];

//chrome.runtime.onStartup.addListener(init);
//chrome.runtime.onInstalled.addListener(init);

function init()
{
	// Create one test item for each context type.
	console.log("background_script chrome.runtime.onStartup happened");
	
	var contexts = ["editable"];
	var n1 = chrome.contextMenus.create({"title": "Insert Date", "contexts": contexts, "id": "n1"});
	
	gradeTexts = [];
	
	if(thisTask != "")
	{
		var n2,t = null;
		
		for(var i = 0; i < tasks.length; i++) 
		{
			if((thisTask.indexOf(tasks[i].name) > -1) || (thisTask.indexOf(tasks[i].tsname) > -1))
			{
				t = tasks[i];
				break;
			}
		}
		
		if(t != null)
		{
			n2 = chrome.contextMenus.create({"title": t.name, "contexts": contexts, "id": "n2"});
		
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
	}
	else
	{
		//chrome.contextMenus.create({"title": "No Documentation", "parentId": parent2, "contexts": contexts, "id": "child2"});
		//chrome.contextMenus.create({"title": "Reference List, but no In-Text Citations", "parentId": parent2, "contexts": contexts, "id": "child3"});
		//chrome.contextMenus.create({"title": "In-Text Citations, No Reference List", "parentId": parent2, "contexts": contexts, "id": "child4"});
		//chrome.contextMenus.create({"title": "Major Errors", "parentId": parent2, "contexts": contexts, "id": "child5"});
	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) 
{
	console.log("background_script says: " + request.text);
	
	if(thisTask != request.text)
	{
		thisTask = request.text;
		chrome.contextMenus.removeAll(init);
	}
    sendResponse("Thanks! "+request.text);
});

function dateToDDMMYYYY(date) 
{
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return (m<=9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d) + '/' + y + ': ';
}

// A generic onclick callback function.
function onClick(info, tab) {
	console.log('info: ' + JSON.stringify(info));
	chrome.tabs.query({currentWindow: true, active: true}, 
		function(tabs){ 
			console.log('tabs: ' + JSON.stringify(tabs));
			if(info.menuItemId == "n1")
			{
				chrome.tabs.sendMessage(tabs[0].id, {text: dateToDDMMYYYY(new Date())}, function(response) {});
			}
			else
			{
				for(var x = 0; x < gradeTexts.length; x++)
				{
					if(info.menuItemId == gradeTexts[x].id)
					{
						console.log(dateToDDMMYYYY(new Date()) + gradeTexts[x].title);
						chrome.tabs.sendMessage(tabs[0].id, {text: dateToDDMMYYYY(new Date()) + gradeTexts[x].title}, function(response) {}); 
						break;
					}
					else
					{
						//console.log("Not menuItemId: "+gradeTexts[x].id);
					}
				}
			}
			
			if(chrome.runtime.lastError) 
			{
				// Something went wrong
				console.log("Whoops.. " + chrome.runtime.lastError.message);
			} 
			else 
			{ 
				//console.log("Message sent!");
				// No errors, you can use entry 
			}
		});
}

chrome.contextMenus.onClicked.addListener(onClick);

var sourcesAspectTS = 
{
	"name":"Sources (TS)", 
	"grades": [
		{"name":"Not Evident","text":
			[
				"Sources have been directly quoted or paraphrased in this submission. Quotations, citations, and references are not detected for all quoted or paraphrased content. For instruction on in-text and reference list citations, please refer to the APA web link in Taskstream or visit WGU’s Writing Center by following this link: <a href=\"https://lrps.wgu.edu/provision/71484321\" target=\"_blank\">https://lrps.wgu.edu/provision/71484321</a>.",
				"Sources have been directly quoted or paraphrased in this submission, and a reference list is present. In-text citations could not be found for portions of the task that have been quoted or paraphrased. For instruction on in-text and reference list citations, please refer to the APA web link in Taskstream or visit WGU’s Writing Center by following this link: <a href=\"https://lrps.wgu.edu/provision/71484321\" target=\"_blank\">https://lrps.wgu.edu/provision/71484321</a>.",
				"Sources have been directly quoted or paraphrased in this submission, and in-text citations are present. A reference list could not be found. For instruction on in-text and reference list citations, please refer to the APA web link in Taskstream or visit WGU’s Writing Center by following this link: <a href=\"https://lrps.wgu.edu/provision/71484321\" target=\"_blank\">https://lrps.wgu.edu/provision/71484321</a>.",
				"Sources have been directly quoted or paraphrased in this submission, and a reference list is present. Citations in the text are also included. Major deviations from formatting are present, which make retrieval difficult. For instruction on in-text and reference list citations, please refer to the APA web link in Taskstream or visit WGU’s Writing Center by following this link: <a href=\"https://lrps.wgu.edu/provision/71484321\" target=\"_blank\">https://lrps.wgu.edu/provision/71484321</a>."
			]},
		{"name":"Competent","text":["XX outside sources that support the work are listed in the References section of the proposal and are referred to in-text without observable departures from the APA style conventions."]}
	]
};

var sourcesAspectEMA = 
{
	"name":"Sources (EMA)", 
	"grades": [
		{"name":"Not Evident","text":
			[
				"Sources have been directly quoted or paraphrased in this submission. Quotations, citations, and references are not detected for all quoted or paraphrased content. For instruction on in-text and reference list citations, please visit WGU’s Writing Center by following this link https://lrps.wgu.edu/provision/71484321.",
				"Sources have been directly quoted or paraphrased in this submission, and a reference list is present. In-text citations could not be found for portions of the task that have been quoted or paraphrased. For instruction on in-text and reference list citations, please visit WGU’s Writing Center by following this link https://lrps.wgu.edu/provision/71484321.",
				"Sources have been directly quoted or paraphrased in this submission, and in-text citations are present. A reference list could not be found. For instruction on in-text and reference list citations, please visit WGU’s Writing Center by following this link https://lrps.wgu.edu/provision/71484321.",
				"Sources have been directly quoted or paraphrased in this submission, and a reference list is present. Citations in the text are also included. Major deviations from formatting are present, which make retrieval difficult. For instruction on in-text and reference list citations, please visit WGU’s Writing Center by following this link https://lrps.wgu.edu/provision/71484321."
			]},
		{"name":"Competent","text":["XX outside sources that support the work are listed in the References section of the proposal and are referred to in-text without observable departures from the APA style conventions."]}
	]
};

var pcAspect = 
{
	"name":"Professional Communication", 
	"grades": [
		{"name":"Not Evident","text":[""]},
		{"name":"Competent","text":[""]}
	]
};

var crdBEMTask1 = 
{
	"name": "BEM1 Task 1: Estimating Population Size",
	"tsname": "BEM1 Task 1",
	"aspects": [
		{
			"name":"A. Python: How the Program Extracts Links", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B. Python: Criteria Used", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":["The extraction of web links from the Current Estimates web page is discussed in Section B. The output file includes only links from the census.gov domain. Please update the explanation once a revised Python script is in place."]},
				{"name":"Competent","text":["The submission provides a discussion of the criteria for identifying a HTML pages, including the code and details on how it functions."]}
			]
		},
		{
			"name":"C. Python: Relative Links",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"D. Python: Duplicated Links",
			"grades": [
				{"name":"Not Evident","text":["A discussion of the script's deduplication efforts is presented in the work. Multiple links from domains other than census.gov cannot be located in the output file. This aspect will be assessed once a revised Python script is in place."]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["The submission removes duplicate links from the output file, providing a discussion of how the identified code segment functions."]}
			]
		},
		{
			"name":"E. Python: Functioning Python Code",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":["The Python script c742_scraper_mdd.py that extracts web links from the HTML code of the Current Estimates web site executes without readily observable warnings or errors. The script extracts a limited subset of web links to other HTML pages from the code of the Current Estimates web page."]},
				{"name":"Competent","text":["The submission provides functioning Python code that identifies all web links on the census.gov site."]}
			]
		},
		{
			"name":"F. Python: HTML Code",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":[""]}
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
				{"name":"Competent","text":["The submission provides a screenshot of the functioning Python program."]}
			]
		},
		{
			"name":"I. R: Linear Regression Analysis",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["An estimate for the population size of the State of XX for the year 2020 of XX that is generated by an appropriate application of R code is provided."]}
			]
		},
		{
			"name":"J. R: How Data Was Prepared",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"K. R: Statistical Description",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"L. R: Population Size of State",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching Competence","text":[""]},
				{"name":"Competent","text":["A CSV file that presents the differences between the current and the most recent data sets of population estimates for the U.S. states whose absolute values exceed 10,000 is provided."]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission presents effective SQL statements that identify the differences between the current and the most recent vintage data sets of population estimates for the U.S. states and R code that builds a suitable linear regression model of the population dynamics for the State of Illinois used to estimate its population in the year 2020. The Python scraper outputs unique and absolute web links from the census.gov domain only. A revised Python program that outputs all the web links from the HTML code of the Current Estimates web page that point out to other HTML pages is needed to meet standards."]},
				{"name":"Passing","text":["The submission provides a fully functioning suite of tools to extract population data, using Python, SQL, and R. All aspects of the work meet task requirements and standards."]}
			]
		},
		sourcesAspectEMA
	]
};

var crdEWPTask1 = 
{
	"name": "EWP1 Task 1",
	"tsname": "EWP Task 1",
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
		},
		sourcesAspectTS
	]
};

var crdEWPTask2 = 
{
	"name": "EWP1 Task 2",
	"tsname": "EWP Task 2",
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
		},
		sourcesAspectEMA
	]
};

var crdIYPTask1 = 
{
	"name": "IYP Task 1",
	"tsname": "IYP Task 1",
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
				{"name":"Approaching Competence","text":["The dashboard presents a stacked bar, horizontal bar, pie, and treemap charts. The purpose of the pie chart and the intent of the treemaps are unclear."]}
			]
		},
		{
			"name":"I: VEHICLE SELECTION", 
			"grades": [
				{"name":"Competent","text":["The work clearly recommends the purchase a 2017 Honda CR-V for the company justified by the sum of weighted values for the elements of the combined criterion."]}
			]
		},
		{
			"name":"J: STORYTELLING METHODS", 
			"grades": [
				{"name":"Approaching Competence","text":["The submission notes the Honda CR-V scores best on \"almost all of the six aspects.\" The explanation for how storytelling methods were used to effectively support the presentation of the recommendation is presented with limited detail. Please update the explanation of the applied storytelling methods once revised visualization elements are in place."]}
			]
		},
		{
			"name":"K: WEB SOURCES", 
			"grades": [
				{"name":"Competent","text":["Five web sources are included in the submission to support the scraped data in parts A1 and A2."]}
			]
		},
		sourcesAspectTS,
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission effectively scrapes data from the Cars and Edmunds websites and provides tables with values for the company, personal, and combined criteria, including Safety Features, Maintenance Cost, Price Point, Insurance, Fuel Economy, and Resale attributes. Adequate visualization elements for the for the dashboard are not readily evident, and the presentation of the recommendation for the purchase of a 2017 Honda CR-V for the company and the justification of the elements of effective storytelling used in the presentation are provided with limited detail. To meet standards, revisions are needed for the responses to the Dashboard and Storytelling Methods aspects."]},
				{"name":"Passing","text":["The submission provides bar charts generated in Tableau to support the comparison of the vehicles in the categories of the company. personal, and combined criteria. Succinct explanations for how the dashboard supports the recommendation to purchase a 2017 Honda CR-V for the company and the use of elements of effective storytelling in the delivery of the recommendation are present. All sections of the work, including Visual Presentation: Criteria 1, Visual Presentation: Criteria 2, Dashboard, Vehicle Selection, and Storytelling Methods, are complete and meet standards."]}
			]
		}
	]
};

var crdCIMTask1 = 
{
	"name": "CIM1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "CIM1 Task 1",	//CRD name as it appears in TaskStream
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
		},
		sourcesAspectEMA
	]
};

var crdCIMTask2 = 
{
	"name": "CIM1 Task 2", 	//CRD name as it appears in EMA
	"tsname": "CIM1 Task 2",	//CRD name as it appears in TaskStream
	"aspects": [
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
		},
		sourcesAspectEMA
	]
};

var crdXXXTaskX = 
{
	"name": "CRDX Task X", 	//CRD name as it appears in EMA
	"tsname": "CRD Task X",	//CRD name as it appears in TaskStream
	"aspects": [
		{
			"name":"AspectName", 
			"grades": [
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":[""]}
			]
		},
		sourcesAspectTS,
		sourcesAspectEMA //Usually just one or the other, but, can use both.
	]
};

var tasks = 
[
	crdBEMTask1,
	crdEWPTask1,
	crdEWPTask2,
	crdIYPTask1,
	crdCIMTask1,
	crdCIMTask2
];
























