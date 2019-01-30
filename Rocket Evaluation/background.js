// Copyright (c) 2018 by Steve Kozakoff. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var thisTask = "";
var gradeTexts = [];

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
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Not Passing","text":["The submission presents effective SQL statements that identify the differences between the current and the most recent vintage data sets of population estimates for the U.S. states and R code that builds a suitable linear regression model of the population dynamics for the State of Illinois used to estimate its population in the year 2020. The Python scraper outputs unique and absolute web links from the census.gov domain only. A revised Python program that outputs all the web links from the HTML code of the Current Estimates web page that point out to other HTML pages is needed to meet standards."]},
				{"name":"Passing","text":["The submission provides a fully functioning suite of tools to extract population data, using Python, SQL, and R. All aspects of the work meet task requirements and standards."]}
			]
		}
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
		sourcesAspectTS,
		sourcesAspectEMA,
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
		sourcesAspectTS,
		sourcesAspectEMA,
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
			"name":"A: Email or Memo", 
			"grades": [
				{"name":"Competent","text":["An adequate memorandum that presents a case for the implementation of <SOLUTION> is provided."]}
			]
		},
		{
			"name":"B: Fact Sheet", 
			"grades": [
				{"name":"Competent","text":["A well-organized Procedural Fact Sheet that outlines the rationale or implementation, description of a ??, key metrics, and a summary of the implementation process is presented."]}
			]
		},
		{
			"name":"C: Writing Process", 
			"grades": [
				{"name":"Approaching Competence","text":["It is clear that the email identifies the message and was proofed. Adequate detail for the planning, multiple drafting, and editing is not observed."]},
				{"name":"Competent","text":["The submission includes a sound summary of the three stages of the writing process for both audiences."]}
			]
		},
		{
			"name":"D: Audience Summary", 
			"grades": [
				{"name":"Approaching Competence","text":["A brief summary of the email and fact sheet is present, which is fitting. Adequate detail for the subject knowledge, position in the organization, personal attitudes, reading style, and types of readers is not observed."]},
				{"name":"Competent","text":["The submission provides a sound explanation of the attributes for both audiences."]}
			]
		},
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a memorandum and a product sheet that outline the need for the implementation of ??. A fitting analysis of the intended audiences of the artifacts and of the writing process are provided. All sections of the work, including Audience Summary, are complete and meet standards."]},
				{"name":"Not Passing","text":["The submission presents the communication of technical information for ?? to a variety of audiences. Some aspects of the submission, such as the Fact Sheet, are complete and provide suitable detail. Adequate detail is not observed for the following aspects: Writing Process and Audience Summary."]}
			]
		}
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
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The proposal presents a thorough response to the published RFP which describes <SUMMARIZE SOLUTION> and aligns with the company's objectives. The work provides a suitable Title Page, Table of Contents, Abstract, body, and Justification and Highlights of Proposal in APA style and a professional letter of transmittal introducing <STUDENTS COMPANY>. All sections of the work are complete and meet standards."]}
			]
		}
	]
};

var crdLQTTask3 = 
{
	"name": "LQT2 Task 3", 	//CRD name as it appears in EMA
	"tsname": "MSISA Capstone Written Project",	//CRD name as it appears in TaskStream
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
		sourcesAspectEMA,
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
		sourcesAspectEMA, 	//both for CRDs that are in both systems.
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["A Capstone Prospectus that describes a PCI DSS compliance project for a county government is presented in the submission. the work provides adequate descriptions of the problem under investigation and the proposed technology solution, and includes adequate root cause, costs, risk, business impact, business drivers, and no-solution scenario analyses. All sections of the work, including Causes, are complete and meet standards."]},
				{"name":"Not Passing","text":["The submission presents the Capstone Proposal for PCI Compliance for a County Government. Some aspects of the submission, such as the clear rationale for the need to provide compliance, are complete and meet standards. Adequate detail is not observed for the following aspects: Problem Background, Reason for Approach, Prospectus Organization, Background Information, Causes, Business Impacts, Cost Analysis, Risk Analysis, Terms, Technology Solution, Business Drivers, as well as the Solution."]}
			]
		}
	]
};

//Template CRD Object
var crdLQTTask4 = 
{
	"name": "LQT2 Task 4", 	//CRD name as it appears in EMA
	"tsname": "LQT2 Task 4",	//CRD name as it appears in TaskStream
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
		sourcesAspectEMA,
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
	"aspects": [
		{
			"name":"A: Dataset Preparation",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission provides a fitting justification of the row removals from the raw data set that resulted in a table that presents 1,045 events captured from the 911 calls to the Seattle Police department."]}
			]
		},
		{
			"name":"B: Data Preparation Explanation",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission provides a fitting justification of the dimensionality reduction which presents XX attributes for 1,045 events captured from the 911 calls to the Seattle Police Department and effectively supports the distribution analysis of the attributes by date, type, and sector."]}
			]
		},
		{
			"name":"C: Data Sheets",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Accurate tables and clear bar charts effectively support the distribution analysis of the 1,045 events represented in the cleaned dataset by date, type, and sector."]}
			]
		},
		{
			"name":"D: Data Sheets Observations Summary",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["Succinct outlines of observations from the visual inspections of the data sheets, including the observation that Sector H features the highest number of incidents, are provided."]}
			]
		},
		{
			"name":"E: Fit",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["An adequate description of the fit of the model to its data that observes its coefficient of determination of 88%, is presented."]}
			]
		},
		{
			"name":"F: Outliers",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission observes an improved coefficient of determination upon the removal of the unnamed sector and Sector H from consideration in the summary of the impact of the outliers on the model."]}
			]
		},
		{
			"name":"G: Residuals",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["The work provides an accurate residual plot. A clear matching explanation that will improve the model is not readily evident."]},
				{"name":"Competent","text":["A reasonable recommendation to remove the outliers from consideration to improve the fit of the model to its data is summarized in Section G."]}
			]
		},
		{
			"name":"H: Current Qualification",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"I: Precautions or Behaviors",
			"grades": [			
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":["A succinct discussion of the sensitive data in the given dataset is provided in Section H. Adequate descriptions of the specific precautions the precinct is to exercise when both working with and communicating about ist sensitive data are not observed."]},
				{"name":"Competent","text":["Succinct summaries of precautions to be exercised to safeguard the sensitive data, including XXX, are present."]}
			]
		},
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents adequate summaries of datasheet observations, descriptions of the fit of the model to its data, a succinct explanation that will improve the model, and descriptions of specific precautions to be exercised to safeguard the sensitive data from the given scenario. All sections of the work, including Data Sheets Observations Summary, Fit, Residuals, and Precautions or Behaviors, are complete and meet standards."]},
				{"name":"Not Passing","text":["The submission presents adequate datasheets that support the distribution analysis of the 1,045 events captured from the 911 calls to the Seattle Police Department represented in the cleaned dataset; descriptions of the impact of the outliers on the regression model; and assessment of the precinct's current ineligibility for additional state funding. Summaries of datasheet observations, descriptions of the fit of the model to its data, a clear explanation that will improve the model, and descriptions of specific precautions to be exercised to safeguard the sensitive data from the given scenario are not observed. Responses or revisions of the responses to the task prompts Data Sheets Observations Summary, Fit, Residuals, and Precautions or Behaviors are needed to meet standards."]}
			]
		}
	]
};

var crdGWA2Task3 = 
{
	"name": "GWA2 Task 3",
	"tsname": "GWA2 Task 3",
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
		sourcesAspectEMA, 	//both for CRDs that are in both systems.
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
		sourcesAspectEMA, 	//both for CRDs that are in both systems.
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
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"A2. IT SOLUTION", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The solution aptly describes <SOLUTION>."]}
			]
		},
		{
			"name":"A3. PLAN OF IMPLEMENTATION", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B. REVIEW OF OTHER WORK", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"B1. RELATION OF ARTIFACT TO PROJECT DEVELOPMENT", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"C. RATIONALE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"D. CURRENT PROJECT ENVIRONMENT", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"E. METHODOLOGY", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["<METHODOLOGY> is appropriately selected as the proposed project methodology."]}
			]
		},
		{
			"name":"F1. GOALS, OBJECTIVES, AND DELIVERABLES TABLE", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"F2. GOALS, OBJECTIVES, AND DELIVERABLES DESCRIPTIONS", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A sufficient discussion of the goals, objectives and deliverables is provided in the submission."]}
			]
		},
		{
			"name":"G. PROJECT TIMELINE WITH MILESTONES", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["A complete project timeline with start/end dates and milestones is provided."]}
			]
		},
		{
			"name":"H. OUTCOME", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		sourcesAspectTS,   
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission describes a capstone proposal for developing <SOLUTION>. All aspects of the capstone proposal including the solution and timeline are complete with excellent detail and meet task requirements."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};


var crdEYP1Task3 = 
{
	"name": "EYP1 Task 3", 	//CRD name as it appears in EMA
	"tsname": "EYP Task 3",	//CRD name as it appears in TaskStream
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
				{"name":"Competent","text":["The submission presents a thorough description of the <COMPANY> <SOLUTION> project."]}
			]
		},
		{
			"name":"B. REVIEW OF OTHER WORK", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
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
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"E. PROJECT GOALS AND OBJECTIVES", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
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
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"H. CONCLUSION", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"I. PROJECT DELIVERABLES", 
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		sourcesAspectTS,   
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a thorough capstone report which describes the implementation of a <SOLUTION> for <COMPANY>. All aspects of the work, such as the Summary and Timeline, are complete and meet task standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdDDT1Task1 = 
{
	"name": "DDT1 Task 1", 	//CRD name as it appears in EMA
	"tsname": "DDT1 Task 1",	//CRD name as it appears in TaskStream
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
		sourcesAspectTS,   
		sourcesAspectEMA,
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
		sourcesAspectTS,   
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a thorough Capstone Report which describes the implementation of <SOLUTION>. All aspects of the submission, including the exemplary screenshots in the Appendices to document the development and implementation, are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

//IXP Task 1
var crdIXPTask1 = 
{
	"name": "IXP Task 1",
	"tsname": "IXP Task 1",
	"aspects": [
		{
			"name":"A: TOOL SELECTION: BENEFITS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[
					"A succinct justification of the selection of R as the tool supporting the analysis of the customer churn, is provided in the submission.",
					"The submission succinctly overviews the benefits from using SAS as the tool to support the analysis of the customer churn."]}
			]
		},
		{
			"name":"B: TOOL SELECTION: AIMS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"C: TOOL SELECTION: PRESCRIBED ANALYSIS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[
					"Factor Analysis of Mixed Data and Logistic Regression are clearly identified as the methods supporting the analysis of the customer churn.",
					"Multiple Correspondence Analysis and Logistic Regression are clearly identified as the analytical methods used to investigate the research question."]}
			]
		},
		{
			"name":"D: DATA EXPLORATION AND PREPARATION: TARGET VARIABLE",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"E: DATA EXPLORATION AND PREPARATION: INDEPENDENT PREDICTOR",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
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
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"H: DATA EXPLORATION AND PREPARATION: CLEANING",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"I: DATA ANALYSIS: UNIVARIATE STATISTICS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["Accurate histograms effectively support the distribution analysis of the variables from the cleaned dataset."]}
			]
		},
		{
			"name":"J: DATA ANALYSIS: BIVARIATE STATISTICS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"K: DATA ANALYSIS: METHODS",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"L: DATA ANALYSIS: JUSTIFICATION",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"M: DATA ANALYSIS: VISUAL REPRESENTATION",
			"grades": [	
				{"name":"Not Evident","text":[""]}, 
				{"name":"Approaching","text":[""]},	
				{"name":"Competent","text":["Succinct explanations of the reasons for selecting visualization elements in the presentation of the analysis, including scree plots, are provided."]}
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
				{"name":"Competent","text":[""]}
			]
		},
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents an analysis of the attrition phenomenon among the customers of the telecom company based on FAMD and Logistic Regression methods executed in an R environment. the work summarizes the phases of the analytical process with adequate explanations of the code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary: Phenomenon, are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

//JNP Task 2
var crdJNPTask2 = 
{
	"name": "JNP Task 2",
	"tsname": "JNP Task 2",
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
		sourcesAspectEMA,
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

//JNP Task 3
var crdJNPTask3 = 
{
	"name": "JNP Task 3",
	"tsname": "JNP Task 3",
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
		sourcesAspectEMA,
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
	"aspects": [
		{
			"name":"A: Problem",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission aptly describes the disaster environment as an earthquake devastated city that has multiple obstacles such as downed trees and buildings hindering rescue."]}
			]
		},
		{
			"name":"B: Improved Disaster Recovery",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The narrative clearly explains how artificial intelligence and training data will be used to identify target objects that are obscured by building rubble and trees in the environment."]}
			]
		},
		{
			"name":"C: Architecture",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission describes removing the robot's wheel, swapping the body, and replacing the proximity sensor with a camera which are appropriate modifications needed to provide the functionality that aligns with disaster recovery efforts."]}
			]
		},
		{
			"name":"D: Goal Seeking",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission succinctly describes how the implemented algorithm was optimized over multiple iterations and explains how the optimizations align with the concepts of reasoning and uncertianty."]}
			]
		},
		{
			"name":"E: Advantages and Limitations",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission provides an adequate overview of the advantages and limitations by noting potential applications of the bot are not limited to earthquake disaster recovery and the stationary hardware limits the camera's visual range."]}
			]
		},
		{
			"name":"F: Testing and Implementation Plan",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"G: Improving the Prototype",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission describes how adding more data from disaster sites can be used to refine the deep learning model to improve the performance of the prototype."]}
			]
		},
		{
			"name":"H: Code",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"I: Panopto Recording",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission aptly provides links to Panopto recordings which summarize the disaster recovery problem and environment and, the robot's goals, architecture, capabilities, and benefits."]}
			]
		},
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a thorough portrayal of an earthquake disaster recovery robot including a description of the environment, robot hardware and software architecture, Coppelia Robotics V-REP files, code, and Panopto videos summarizing the work. All aspects of the work, including the Testing and Implementation Plan, are complete and meet standards."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

//NIP1 Task 1
var crdNIPTask1 = 
{
	"name": "NIP1 Task 1",
	"tsname": "NIP1 Task 1",
	"aspects": [
		{
			"name":"A: Description",
			"grades": [
				{"name":"Competent","text":["The submission aptly describes functionality to record chat sessions, provides appropriate greetings, identifies jobs for students, and aligns with the needs of the career advisor."]}
			]
		},
		{
			"name":"B: Other Works",
			"grades": [
				{"name":"Approaching","text":["The submission aptly summarizes the article <FROM_SUBMISSION> and provides a description of how it relates to the project. A summary of a second third-party work could not be located. Make sure to update the references section in the report once the second summary is in place."]},
				{"name":"Competent","text":["The work concisely summarizes works by <WORK1> and <WORK2> solutions in the other works section that relate to the key elements of the proposal."]}
			]
		},
		{
			"name":"C: Job Types",
			"grades": [
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"D: Training",
			"grades": [
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"E: Optimization",
			"grades": [
				{"name":"Competent","text":["The submission describes pattern matching and stateful response optimizations with concise examples of design and workflow.The submission describes pattern matching and stateful response optimizations with concise examples of design and workflow."]}
			]
		},
		{
			"name":"F: Installation Manual",
			"grades": [
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"G: Effectiveness of the Bot",
			"grades": [
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"H: Challenges during Development",
			"grades": [
				{"name":"Competent","text":[""]}
			]
		},
		{
			"name":"I: The Bot Development Environment",
			"grades": [
				{"name":"Competent","text":["Instant compile and a directory of pre-built bots are documented in the work as strengths of the development environment which supported the development of <BOT_NAME>."]}
			]
		},
		{
			"name":"J: Panopto Recording",
			"grades": [
				{"name":"Not Evident","text":[""]},
				{"name":"Approaching","text":[""]},
				{"name":"Competent","text":["The submission aptly provides links to Panopto recordings which summarize the disaster recovery problem and environment and, the robot's goals, architecture, capabilities, and benefits. Presentation link: "]}
			]
		},
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents a  report which thoroughly describes a project to develop a chatbot with embedded artificial intelligence to assist career advisors at a university. The work provides a suitable description, reviews of other works, and an excellent Panopto presentation that captures an interactive session with the bot. All sections of the work are complete and meets task requirements."]},
				{"name":"Not Passing","text":["The submission presents a thorough report which describes a project to develop a chatbot with embedded artificial intelligence to assist career advisors at a university. The work provides a suitable description, explains the training process, and includes a link to an exemplary Panopto presentation that demonstrates an interactive session. One summary of a third-party work is provided in the submission, but, two are required to meet task standards. Please revise the Other Works section to include a second summary of a third-party work and update the Sources aspect if needed."]}
			]
		}
	]
};

//GWA2 Task 1
var crdGWA2Task1 = 
{
	"name": "GWA2 Task 1",
	"tsname": "GWA2 Task 1",
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
		sourcesAspectEMA, 	//both for CRDs that are in both systems.
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission provides an appropriate Topic Approval Form, Waiver Form, and Human Subjects FAQ Quiz. All sections are complete and meet task requirements."]},
				{"name":"Not Passing","text":[""]}
			]
		}
	]
};

var crdLQTTask1 = 
{
	"name": "LQT2 Task 1",
	"tsname": "LQT2 Task 1",	//CRD name as it appears in TaskStream
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
		sourcesAspectEMA,
		{
			"name":"Overall Comment",
			"grades": [
				{"name":"Passing","text":["The submission presents two Python files with the appropriate initial comment on the first line. All sections are complete and meet task requirements."]},
				{"name":"Not Passing","text":["The submission presents the best route and delivery distribution for the Western Governors University Parcel Service (WGUPS). Most aspects of the submission meet standards and provide concise, correct code, including the ability in the HashTable to def lookup(self, key). The Identification information in the code is not observed."]}
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
		sourcesAspectTS,	//Usually use either EMA or TS, but, it's okay to use   
		sourcesAspectEMA, 	//both for CRDs that are in both systems.
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
	crdNHPTask1
];
























