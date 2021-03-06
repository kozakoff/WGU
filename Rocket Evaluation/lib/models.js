const sourcesAspectEMA = {
  name: "Sources",
  tsname: "Sources",
  aspects: [
    {
      name: "Sources (EMA)",
      grades: [
        {
          name: "No Documentation",
          text: [
            "Sources have been directly quoted or paraphrased in this submission.  Quotations, citations, and references are not detected for all quoted or paraphrased content. For specific instruction on in-text and reference list citations, click on the link located next to the Sources rubric aspect (looks like an arrow).  Please contact the WGU Writing Center if further assistance is needed.",
          ],
        },
        {
          name: "Reference List, but no In-Text Citations",
          text: [
            "Sources have been directly quoted or paraphrased in this submission, and a reference list is present. In-text citations could not be found for portions of the task that have been quoted or paraphrased. For specific instruction on in-text and reference list citations, click on the link located next to the Sources rubric aspect (looks like an arrow).  Please contact the WGU Writing Center if further assistance is needed.",
          ],
        },
        {
          name: "In-Text Citations, No Reference List",
          text: [
            "Sources have been directly quoted or paraphrased in this submission, and in-text citations are present. A reference list could not be found. For specific instruction on in-text and reference list citations, click on the link located next to the Sources rubric aspect (looks like an arrow).  Please contact the WGU Writing Center if further assistance is needed.",
          ],
        },
        {
          name: "Major Errors",
          text: [
            "Sources have been directly quoted or paraphrased in this submission, and a reference list is present. Citations in the text are also included. Major deviations from formatting are present, which make retrieval difficult. For specific instruction on in-text and reference list citations, click on the link located next to the Sources rubric aspect (looks like an arrow).  Please contact the WGU Writing Center if further assistance is needed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "XX outside sources that support the work are listed in the References section of the proposal and are referred to in-text without observable departures from the APA style conventions.",
          ],
        },
      ],
    },
  ],
};

const cIReferral = {
  name: "CI Referral",
  tsname: "CI Referral",
  aspects: [
    {
      name: "CI Referral",
      grades: [
        {
          name: "For Content",
          text: [
            "You are encouraged to connect with your course instructor to strengthen your understanding of the content before working further on this assessment.",
          ],
        },
        {
          name: "For Other",
          text: [
            "You are encouraged to connect with your course instructor before working further on this assessment.",
          ],
        },
      ],
    },
  ],
};

const pcAspect = {
  name: "Professional Communication",
  grades: [
    {
      name: "Competent",
      text: [
        "The work is mechanically sound with no major errors detected.",
        "The submission is easy to read as a result of effective organization and intelligent sentence fluency. The spelling, punctuation, and grammar are sound with no major errors detected. The use of headings enhances the evaluation.",
      ],
    },
  ],
};

const crdBOMTask1 = {
  name: "BOM1 Task 1: Estimating Population Size",
  tsname: "BOM1 Task 1",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C742%20Data%20Analysis%20Tools%20and%20Techniques%20(ABE2,%20BOM1,%20IWP2)",
  aspects: [
    {
      name: "A. Python: How the Program Extracts Links",
      grades: [
        {
          name: "Competent",
          text: [
            "A succinct explanation of the use of the [BeautifulSoup OR requests OR other relevant library] in supporting the extractions of the web links from the HTML code of the Current Estimates web page is provided. ",
          ],
        },
      ],
    },
    {
      name: "B. Python: Criteria Used",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The extraction of web links from the Current Estimates web page is discussed in Section B. The output file includes only links from the census.gov domain. Please update the explanation once a revised Python script is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The criteria used to identify the web links to other HTML pages from the given code is adequately explained.",
          ],
        },
      ],
    },
    {
      name: "C. Python: Relative Links",
      grades: [
        {
          name: "Competent",
          text: [
            "The work provides an adequately detailed explanation of The python code used to convert the relative web links to an absolute format.",
          ],
        },
      ],
    },
    {
      name: "D. Python: Duplicated Links",
      grades: [
        {
          name: "Competent",
          text: [
            "A succinct explanation of the use of a [Python set() OR other detail] in support of the scraper’s deduplication actions is presented.",
          ],
        },
      ],
    },
    {
      name: "E. Python: Functioning Python Code",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The Python script that extracts web links from the HTML code of the Current Estimates web site executes without readily observable warnings or errors. The script extracts a limited subset of web links to other HTML pages from the code of the Current Estimates web page.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A functioning Python scraper that extracts [HOW MANY] unique and absolute web links to HTML pages is provided.",
          ],
        },
      ],
    },
    {
      name: "F. Python: HTML Code",
      grades: [
        {
          name: "Competent",
          text: [
            "A clear copy of the HTML code of the U.S. Census’ Current Estimates web page is provided [in a separate document].",
          ],
        },
      ],
    },
    {
      name: "H. Python: Screenshot of Results",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Python: Screenshot of Results aspect will be assessed once a revised Python scraper is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "[HOW MANY] clear screenshot[s] that evidence the compconstion of the Python program without readily observable run-time errors or warnings are provided.",
          ],
        },
      ],
    },
    {
      name: "I. R: Linear Regression Analysis",
      grades: [
        { name: "Approaching Competence", text: [""] },
        {
          name: "Competent",
          text: [
            "The work constructs a fitting model of the population dynamics of the State of [WHICH STATE] using R’s lm() function.",
          ],
        },
      ],
    },
    {
      name: "K. R: Statistical Description",
      grades: [
        {
          name: "Competent",
          text: [
            "The statistical description of the constiable [NAME OF constIABLE] that models the population dynamics of the State of [WHICH STATE] is tabulated as a result of an appropriate application of R’s summary() method.",
          ],
        },
      ],
    },
    {
      name: "L. R: Population Size of State",
      grades: [
        {
          name: "Competent",
          text: [
            "A CSV file that presents the differences between the current and the most recent data sets of population estimates for the U.S. states whose absolute values exceed 10,000 is provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Not Passing",
          text: [
            "The submission presents effective SQL statements that identify the differences between the current and the most recent vintage data sets of population estimates for the U.S. states and R code that builds a suitable linear regression model of the population dynamics for the State of Illinois used to estimate its population in the year 2020. The Python scraper outputs unique and absolute web links from the census.gov domain only. A revised Python program that outputs all the web links from the HTML code of the Current Estimates web page that point out to other HTML pages is needed to meet standards.",
          ],
        },
        {
          name: "Passing",
          text: [
            "The submission provides a functioning Python scraper that extracts [HOW MANY] unique web links to HTML pages from the code of the Current Estimates web page and presents them in a CSV file in an absolute format and R code that constructs a fitting linear regression model of the population dynamics of the State of [WHICH STATE] used to predict its population size for the year [WHICH YEAR].  All sections of the work, including R: Statistical Description, are compconste and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdAAM1Task1 = {
  name: "AAM1 Task 1: Estimating Population Size",
  tsname: "AAM1 Task 1",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C996%20Programming%20in%20Python%20(AAM1)",
  aspects: [
    {
      name: "A. Python: How the Program Extracts Links",
      grades: [
        {
          name: "Competent",
          text: [
            "A succinct explanation of the use of the [BeautifulSoup OR requests OR other relevant library] in supporting the extractions of the web links from the HTML code of the Current Estimates web page is provided. ",
          ],
        },
      ],
    },
    {
      name: "B. Python: Criteria Used",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The extraction of web links from the Current Estimates web page is discussed in Section B. The output file includes only links from the census.gov domain. Please update the explanation once a revised Python script is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The criteria used to identify the web links to other HTML pages from the given code is adequately explained.",
          ],
        },
      ],
    },
    {
      name: "C. Python: Relative Links",
      grades: [
        {
          name: "Competent",
          text: [
            "The work provides an adequately detailed explanation of The python code used to convert the relative web links to an absolute format.",
          ],
        },
      ],
    },
    {
      name: "D. Python: Duplicated Links",
      grades: [
        {
          name: "Competent",
          text: [
            "A succinct explanation of the use of a [Python set() OR other detail] in support of the scraper’s deduplication actions is presented.",
          ],
        },
      ],
    },
    {
      name: "E. Python: Functioning Python Code",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The Python script that extracts web links from the HTML code of the Current Estimates web site executes without readily observable warnings or errors. The script extracts a limited subset of web links to other HTML pages from the code of the Current Estimates web page.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A functioning Python scraper that extracts [HOW MANY] unique and absolute web links to HTML pages is provided.",
          ],
        },
      ],
    },
    {
      name: "F. Python: HTML Code",
      grades: [
        {
          name: "Competent",
          text: [
            "A clear copy of the HTML code of the U.S. Census’ Current Estimates web page is provided [in a separate document].",
          ],
        },
      ],
    },
    {
      name: "H. Python: Screenshot of Results",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Python: Screenshot of Results aspect will be assessed once a revised Python scraper is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "[HOW MANY] clear screenshot[s] that evidence the compconstion of the Python program without readily observable run-time errors or warnings are provided.",
          ],
        },
      ],
    },
    {
      name: "I. R: Linear Regression Analysis",
      grades: [
        { name: "Approaching Competence", text: [""] },
        {
          name: "Competent",
          text: [
            "The work constructs a fitting model of the population dynamics of the State of [WHICH STATE] using R’s lm() function.",
          ],
        },
      ],
    },
    {
      name: "K. R: Statistical Description",
      grades: [
        {
          name: "Competent",
          text: [
            "The statistical description of the constiable [NAME OF constIABLE] that models the population dynamics of the State of [WHICH STATE] is tabulated as a result of an appropriate application of R’s summary() method.",
          ],
        },
      ],
    },
    {
      name: "L. R: Population Size of State",
      grades: [
        {
          name: "Competent",
          text: [
            "A CSV file that presents the differences between the current and the most recent data sets of population estimates for the U.S. states whose absolute values exceed 10,000 is provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Not Passing",
          text: [
            "The submission presents effective SQL statements that identify the differences between the current and the most recent vintage data sets of population estimates for the U.S. states and R code that builds a suitable linear regression model of the population dynamics for the State of Illinois used to estimate its population in the year 2020. The Python scraper outputs unique and absolute web links from the census.gov domain only. A revised Python program that outputs all the web links from the HTML code of the Current Estimates web page that point out to other HTML pages is needed to meet standards.",
          ],
        },
        {
          name: "Passing",
          text: [
            "The submission provides a functioning Python scraper that extracts [HOW MANY] unique web links to HTML pages from the code of the Current Estimates web page and presents them in a CSV file in an absolute format and R code that constructs a fitting linear regression model of the population dynamics of the State of [WHICH STATE] used to predict its population size for the year [WHICH YEAR].  All sections of the work, including R: Statistical Description, are compconste and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdEWPTask1 = {
  name: "EWP1 Task 1",
  tsname: "EWP Task 1",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C768%20Technical%20Communication%20(CIM1,%20EWP1)",
  aspects: [
    {
      name: "A. Audience Analysis",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents adequate analyses of the attributes of the three audiences to whom the new SVC process will be delivered.",
          ],
        },
      ],
    },
    {
      name: "B. Modification of Presentation",
      grades: [
        {
          name: "Competent",
          text: [
            "A clear summary of reasonable proposed changes to the presentation for Audience 1 to meet the needs of Audience 2 is provided.",
          ],
        },
      ],
    },
    {
      name: "D. Step-By-Step Instructions",
      grades: [
        {
          name: "Competent",
          text: [
            "Adequately detailed procedural instructions that describe the process of [SUMMARIZE PROCESS] for the members of Audience 3 are provided. [HOW MANY] clear multimedia elements effectively support the explanations of the process steps.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents sound analyses of the three audiences to whom the new SVC process will be delivered, the changes to the presentation for Audience 1 to meet the needs of Audience 2, and the steps needed to [SUMMARIZE PROCESS] for Audience 3. All sections of the work, including Justification for Modifying, are compconste and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdEWPTask2 = {
  name: "EWP1 Task 2",
  tsname: "EWP Task 2",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C768%20Technical%20Communication%20(CIM1,%20EWP1)",
  aspects: [
    {
      name: "APA Style",
      grades: [
        {
          name: "Competent",
          text: [
            "The formatting of the document aligns with the conventions of the American Psychological Association. The submission exhibits one-inch margins, appropriate first-line indentations, and double interline spacing.",
          ],
        },
      ],
    },
    {
      name: "A. Title Page",
      grades: [
        {
          name: "Competent",
          text: [
            'The submission adequately provides a title page with the name of the proposer and all of the required sections. a space for the signature, and clearly states the title as "<TITLE>."',
          ],
        },
      ],
    },
    {
      name: "B. Table of Contents",
      grades: [
        {
          name: "Competent",
          text: [
            "A table of contents is present in the proposal which clearly identifies each of the sections of the document including section title and page numbers.",
          ],
        },
      ],
    },
    {
      name: "C. Abstract",
      grades: [
        {
          name: "Competent",
          text: [
            "The abstract competently summarizes the recommended solution to <SUMMARIZE SOLUTION> and aligns with each of the given points for the aspect.",
          ],
        },
      ],
    },
    {
      name: "D1. Proposed Solution",
      grades: [
        {
          name: "Competent",
          text: [
            "A compelling description of <SOLUTION> and an explanation of its alignment with the requirements stated in the RFP are provided in the work.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The proposal presents a thorough response to the published RFP which describes <SUMMARIZE SOLUTION> and aligns with the company's objectives. The work provides a suitable Title Page, Table of Contents, Abstract, body, and Justification and Highlights of Proposal in APA style and a professional constter of transmittal introducing <STUDENTS COMPANY>. All sections of the work are compconste and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdIYPTask1 = {
  name: "IYP Task 1",
  tsname: "IYP Task 1",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C745%20Advanced%20Data%20Visualization%20(ADE2,%20IYP2)",
  aspects: [
    {
      name: "Professional Communication",
      grades: [
        {
          name: "Competent",
          text: ["The work is mechanically sound and free of major errors."],
        },
      ],
    },
    {
      name: "A. Scraped Data: Criteria 1",
      grades: [
        {
          name: "Competent",
          text: [
            'The submission appropriately includes scraped data for Criteria 1 in the "<FILENAME>" file.',
          ],
        },
      ],
    },
    {
      name: "B. Scraped Data: Criteria 2",
      grades: [
        {
          name: "Competent",
          text: [
            'The submission appropriately includes scraped data for Criteria 2 in the "<FILENAME>" file.',
          ],
        },
      ],
    },
    {
      name: "C. Cleaned Data: Criteria 1",
      grades: [
        {
          name: "Competent",
          text: [
            "An appropriately configured dataset that presents the values of the Safety Features, Maintenance Cost, and Price Point attributes of the four vehicle models that the company criteria respectively weights by 10, 5, and 7 is provided.",
          ],
        },
      ],
    },
    {
      name: "D. Cleaned Data: Criteria 2",
      grades: [
        {
          name: "Competent",
          text: [
            "An appropriately configured dataset that presents the values of the Insurance, Fuel Economy, and Resale Value attributes of the four vehicle models that the personal criteria respectively weights by [WEIGHTS, e.g. 7, 5, and 10] is provided.",
          ],
        },
      ],
    },
    {
      name: "E. Combined Data",
      grades: [
        {
          name: "Competent",
          text: [
            'A table that presents the combined values for the name of the car, features being evaluated, and score for each vehicle model is provided in the "<FILENAME>" file.',
          ],
        },
      ],
    },
    {
      name: "F. Visual Presentation: Criteria 1",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents [STATE THE THREE FORMATS, e.g. a horizontal and a vertical bar chart and a heat map] to effectively support the comparison of the vehicle models against the elements of the company criteria.",
          ],
        },
      ],
    },
    {
      name: "G. Visual Presentation: Criteria 2",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents [STATE THE THREE FORMATS, e.g. a horizontal and a vertical bar chart and a heat map] to effectively support the comparison of the vehicle models against the elements of the personal criteria.",
          ],
        },
      ],
    },
    {
      name: "H. Dashboard",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The dashboard presents a stacked bar, horizontal bar, pie, and treemap charts. The purpose of the pie chart and the intent of the treemaps are unclear.",
          ],
        },
      ],
    },
    {
      name: "I. Vehicle Selection",
      grades: [
        {
          name: "Competent",
          text: [
            "The work clearly recommends the purchase a [VEHICLE] for the company justified by the sum of weighted values for the elements of the combined criterion.",
          ],
        },
      ],
    },
    {
      name: "J. Storytelling Methods",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The submission clealy notes the [VEHICLE] scores best on almost all of the six aspects. The explanation for how storytelling methods were used to effectively support the presentation of the recommendation is presented with limited detail. Please update the explanation of the applied storytelling methods once revised visualization elements are in place.",
          ],
        },
      ],
    },
    {
      name: "K. Web Sources",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission clearly indicates that data from [LIST WEBSITES, e.g. Edmunds, Kelley Blue Book, etc.] have been scraped to support the analysis of the features of the four given vehicle models.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Not Passing",
          text: [
            "The submission effectively scrapes data from the Cars and Edmunds websites and provides tables with values for the company, personal, and combined criteria, including Safety Features, Maintenance Cost, Price Point, Insurance, Fuel Economy, and Resale attributes. Adequate visualization elements for the for the dashboard are not readily evident, and the presentation of the recommendation for the purchase of a 2017 Honda CR-V for the company and the justification of the elements of effective storytelling used in the presentation are provided with limited detail. To meet standards, revisions are needed for the responses to the Dashboard and Storytelling Methods aspects.",
          ],
        },
        {
          name: "Passing",
          text: [
            "The submission effectively scrapes data from the [WEBSITE] and uses the company and a personal criterion to support the justification of the recommendation to purchase a 2017 Honda CR-V for the organization. Clear visualizations provide adequate support to the comparison of the vehicles against the elements of the combined criteria. All sections of the work, including Storytelling Methods, are compconste and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdADETask1 = {
  name: "ADE Task 1",
  tsname: "ADE Task 1",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C745%20Advanced%20Data%20Visualization%20(ADE2,%20IYP2)",
  aspects: [
    {
      name: "Professional Communication",
      grades: [
        {
          name: "Competent",
          text: ["The work is mechanically sound and free of major errors."],
        },
      ],
    },
    {
      name: "A. Scraped Data: Criteria 1",
      grades: [
        {
          name: "Competent",
          text: [
            'The submission appropriately includes scraped data for Criteria 1 in the "<FILENAME>" file.',
          ],
        },
      ],
    },
    {
      name: "B. Scraped Data: Criteria 2",
      grades: [
        {
          name: "Competent",
          text: [
            'The submission appropriately includes scraped data for Criteria 2 in the "<FILENAME>" file.',
          ],
        },
      ],
    },
    {
      name: "C. Cleaned Data: Criteria 1",
      grades: [
        {
          name: "Competent",
          text: [
            "An appropriately configured dataset that presents the values of the Safety Features, Maintenance Cost, and Price Point attributes of the four vehicle models that the company criteria respectively weights by 10, 5, and 7 is provided.",
          ],
        },
      ],
    },
    {
      name: "D. Cleaned Data: Criteria 2",
      grades: [
        {
          name: "Competent",
          text: [
            "An appropriately configured dataset that presents the values of the Insurance, Fuel Economy, and Resale Value attributes of the four vehicle models that the personal criteria respectively weights by [WEIGHTS, e.g. 7, 5, and 10] is provided.",
          ],
        },
      ],
    },
    {
      name: "E. Combined Data",
      grades: [
        {
          name: "Competent",
          text: [
            'A table that presents the combined values for the name of the car, features being evaluated, and score for each vehicle model is provided in the "<FILENAME>" file.',
          ],
        },
      ],
    },
    {
      name: "F. Visual Presentation: Criteria 1",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents [STATE THE THREE FORMATS, e.g. a horizontal and a vertical bar chart and a heat map] to effectively support the comparison of the vehicle models against the elements of the company criteria.",
          ],
        },
      ],
    },
    {
      name: "G. Visual Presentation: Criteria 2",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents [STATE THE THREE FORMATS, e.g. a horizontal and a vertical bar chart and a heat map] to effectively support the comparison of the vehicle models against the elements of the personal criteria.",
          ],
        },
      ],
    },
    {
      name: "H. Dashboard",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The dashboard presents a stacked bar, horizontal bar, pie, and treemap charts. The purpose of the pie chart and the intent of the treemaps are unclear.",
          ],
        },
      ],
    },
    {
      name: "I. Vehicle Selection",
      grades: [
        {
          name: "Competent",
          text: [
            "The work clearly recommends the purchase a [VEHICLE] for the company justified by the sum of weighted values for the elements of the combined criterion.",
          ],
        },
      ],
    },
    {
      name: "J. Storytelling Methods",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The submission clealy notes the [VEHICLE] scores best on almost all of the six aspects. The explanation for how storytelling methods were used to effectively support the presentation of the recommendation is presented with limited detail. Please update the explanation of the applied storytelling methods once revised visualization elements are in place.",
          ],
        },
      ],
    },
    {
      name: "K. Web Sources",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission clearly indicates that data from [LIST WEBSITES, e.g. Edmunds, Kelley Blue Book, etc.] have been scraped to support the analysis of the features of the four given vehicle models.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Not Passing",
          text: [
            "The submission effectively scrapes data from the Cars and Edmunds websites and provides tables with values for the company, personal, and combined criteria, including Safety Features, Maintenance Cost, Price Point, Insurance, Fuel Economy, and Resale attributes. Adequate visualization elements for the for the dashboard are not readily evident, and the presentation of the recommendation for the purchase of a 2017 Honda CR-V for the company and the justification of the elements of effective storytelling used in the presentation are provided with limited detail. To meet standards, revisions are needed for the responses to the Dashboard and Storytelling Methods aspects.",
          ],
        },
        {
          name: "Passing",
          text: [
            "The submission effectively scrapes data from the [WEBSITE] and uses the company and a personal criterion to support the justification of the recommendation to purchase a 2017 Honda CR-V for the organization. Clear visualizations provide adequate support to the comparison of the vehicles against the elements of the combined criteria. All sections of the work, including Storytelling Methods, are compconste and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdCIMTask1 = {
  name: "CIM1 Task 1", //CRD name as it appears in EMA
  tsname: "CIM1 Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C768%20Technical%20Communication%20(CIM1,%20EWP1)",
  aspects: [
    {
      name: "A: Email or Memo",
      grades: [
        {
          name: "Competent",
          text: [
            "A clear [email OR memorandum] to be sent to the executive leadership of the organization that outlines the proposed implementation of [WHAT IS BEING IMPLEMENTED] is provided.",
          ],
        },
      ],
    },
    {
      name: "B: Fact Sheet",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission outlines the product, the rationale for implementation, and the plan for implementing Google Chrome for the manufacturing company. A graphical element or elements that support the description of the technology solution or the explanation of the implementation plan cannot be located.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A well-organized Fact Sheet that outlines the implementation of [WHAT IS BEING IMPLEMENTED] and includes [HOW MANY] supporting multimedia elements, is provided.",
          ],
        },
      ],
    },
    {
      name: "C: Writing Process",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The Writing Process section justifies decisions that were made during the planning of the artifacts. Descriptions of the writing processes and their phases that were used to construct the two artifacts cannot be located. Please describe the writing process used to generate each of the artifacts.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The work presents a succinct overview of the activities compconsted during the composition of the [email OR memo] and the fact sheet.",
          ],
        },
      ],
    },
    {
      name: "D: Audience Summary",
      grades: [
        {
          name: "Approaching Competence",
          text: [
            "The submission explains how the knowledge of the audiences informed the composition of the two artifacts. An adequately detailed description of each of the given attribute of the two audiences is not readily evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission presents a sound analysis of the attributes of the audiences of the executive leaders and members of the interdepartmental implementation team that informed the creation of the [email OR memo] and the fact sheet.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents sound analyses of the audiences and the writing process that resulted in a clear [email OR memo] and a fact sheet that overview the proposed implementation of [PROPOSED PROCESS]. All sections of the work, including Audience Summary, are compconste and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission provides artifacts that describe the proposed [PROPOSED PROCESS], provides adequate in-text citations that point to the elements of the reference list. A fact sheet that includes an appropriate graphical component, descriptions of the writing processes and adequate audience analyses are not readily evident. A revision of the responses to the task prompts Fact Sheet, Writing Process, and Audience Summary is needed to meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdCIMTask2 = {
  name: "CIM1 Task 2", //CRD name as it appears in EMA
  tsname: "CIM1 Task 2", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C768%20Technical%20Communication%20(CIM1,%20EWP1)",
  aspects: [
    {
      name: "A. Title Page",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission has a compconsted Title Page that presents “[TITLE HERE]” as the project name.",
          ],
        },
      ],
    },
    {
      name: "B. Table of Contents",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission includes a compconsted Table of Contents that presents accurate page locators of the sections in the order in which they appear in the proposal.",
          ],
        },
      ],
    },
    {
      name: "C. Abstract",
      grades: [
        {
          name: "Competent",
          text: [
            "The salient points of the proposed project to implement [WHAT] for Seamus Company, including the project cost of $[HOW MUCH], are intelligently outlined in the Abstract of the proposal.",
          ],
        },
      ],
    },
    {
      name: "D1. Proposed Solution",
      grades: [
        {
          name: "Competent",
          text: [
            "Succinct technical detail of the proposed [TECHNOLOGY SOLUTION SUMMARY] and an outline of its benefits to the Seamus Company are presented.",
          ],
        },
      ],
    },
    {
      name: "D2. Case Study Reviews",
      grades: [
        {
          name: "Approaching/Not Evident",
          text: [
            "The submission outlines three outside works. The learnings from the third-party artifacts are presented in limited detail and it is unclear how the case study review informs the proposed project.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A reasonable case study review that summarize the implementation of key elements of the proposal for [COMPANY 1], [COMPANY 2], and [COMPANY 3] are provided.",
          ],
        },
      ],
    },
    {
      name: "D3. Goals , Objectives, and Deliverables",
      grades: [
        {
          name: "Approaching/Not Evident",
          text: [
            "The submission provides a list of goals and supporting objectives with notes of the methods that will be used to meet those objectives. The project deliverables are unclear, and the goal and the objectives are presented in limited detail. A detailed description of the project goal, objectives, and key deliverables is needed to meet standards.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The objectives and key anticipated project deliverables supporting the project goal to [SUMMARIZE PROJECT GOAL] are adequately described.",
          ],
        },
      ],
    },
    {
      name: "D4. Projected Timeline",
      grades: [
        {
          name: "Approaching/Not Evident",
          text: [
            "The work provides a timeline. An appropriate timeline that provides compconstion dates for each deliverable is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Reasonable compconstion dates for the [HOW MANY] key anticipated project deliverables are presented in a clear timeline.",
          ],
        },
      ],
    },
    {
      name: "D5. Resources and Costs",
      grades: [
        {
          name: "Competent",
          text: [
            "A detailed breakdown of the cost of the project that estimates the major contributing factors, including [ELEMENT OF COST], is provided.",
          ],
        },
      ],
    },
    {
      name: "D6. Outcome",
      grades: [
        {
          name: "Approaching/Not Evident",
          text: [
            "The submission discusses the anticipated project outcomes. A description of the criteria that will be used to assess the success of the project is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The [HOW MANY] criteria that comprise the evaluation framework that will be used to assess the success of the project once compconsted are adequately outlined.",
          ],
        },
      ],
    },
    {
      name: "E. Justification and Highlights of Proposal",
      grades: [
        {
          name: "Competent",
          text: [
            "A satisfactory summary of the technology solution in the context of Seamus’ business priorities is provided.",
          ],
        },
      ],
    },
    {
      name: "F. constter",
      grades: [
        {
          name: "Competent",
          text: [
            "A professional constter to accompany the transmittal of the proposal to [SUMMARIZE PROJECT] to the publisher is provided [in a separate file].",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents a proposal to [WHAT] for the Seamus Company and a professional constter to accompany its transmittal to the publisher. The work adequately outlines the proposed technology solution as well as the goals, timeline, and evaluation framework of the project.  All sections of the assessment, including Resources and Costs, are compconste and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdLQTTask3 = {
  name: "LQT2 Task 3", //CRD name as it appears in EMA
  tsname: "MSISA Capstone Written Project", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        {
          name: "Not Evident",
          text: [
            "This aspect will be assessed when all task requirements are in place.",
          ],
        },
        {
          name: "Competent",
          text: ["The work is mechanically sound and free of major errors."],
        },
      ],
    },
    {
      name: "A1. IMPORTANT ASPECTS",
      grades: [
        {
          name: "Competent",
          text: [
            "The salient points of the information security realignment project for Top Care Medical, including it actual outcomes, are intelligently summarized in the Abstract of the report.",
          ],
        },
      ],
    },
    {
      name: "D1. PROJECT REQUIREMENTS",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents adequately detailed summaries of the functional and detailed requirements that emerged after the process and system audit and the gaps the project aimed to fill.",
          ],
        },
      ],
    },
    {
      name: "F1. APPROACH EXPLANATION",
      grades: [
        {
          name: "Competent",
          text: [
            "The four phases of the project methodology are succinctly outlined.",
          ],
        },
      ],
    },
    {
      name: "G2. RESOURCES USED",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Resources section states the resources used are identified in the Project Design section. A logical justification for the resources is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission includes a sound justification for the labor, hardware, and software resources to implement the solution.",
          ],
        },
      ],
    },
    {
      name: "H1. QUALITY ASSURANCE APPROACH",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission states the phases were implemented to increase troubleshooting efficiency. A detailed discussion of the approach to quality assurance and specifies the quality assurance criteria is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission includes a sound explanation of how the quality assurance was implemented during the project development process.",
          ],
        },
      ],
    },
    {
      name: "H2. SOLUTION TESTING",
      grades: [
        {
          name: "Approaching",
          text: [
            "The Solution Testing section includes a table that clearly organizes the each test and its purpose. A justification for the test case and scenarios, and the acceptance criteria, are not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission provides a sound overview of the solution testing and clearly identifies the acceptance criteria for the user and administration.",
          ],
        },
      ],
    },
    {
      name: "I1. IMPLEMENTATION PLAN",
      grades: [
        {
          name: "Approaching",
          text: [
            "The Implementation Plan section provides a sound overview of the user training. A detailed discussion of the phases of the rollout and details of the go-live is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission includes a sound explanation of the implementation phases and issues with a Skype user during the go-live event.",
          ],
        },
      ],
    },
    {
      name: "J1. RISK ASSESSMENT",
      grades: [
        {
          name: "Competent",
          text: [
            "Assessments of the risks of Intranet unavailability, corrupt files, and malicious employees are presented in a clear table.",
          ],
        },
      ],
    },
    {
      name: "J3. RISK MITIGATION",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Risk Mitigation section clearly states the importance of personnel. A logical explanation of how the two risks will be mitigated is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission provides a clear explanation of how the equipment and personnel-related risks will be mitigated.",
          ],
        },
      ],
    },
    {
      name: "K3. MAINTENANCE PLAN",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission includes a table that clearly organizes the project maintenance. A well-developed short- and long-term maintenance plan is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission includes a sound explanation of the short- and long-term maintenance plans that includes technical manuals and a maintenance support package.",
          ],
        },
      ],
    },
    {
      name: "L1A. DELIVERABLES",
      grades: [
        {
          name: "Competent",
          text: [
            "A sample output of the gap analysis provided in Appendix A as an actual project artifact adequately supports the explanations in the narrative.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission successfully describes the implementation of a secure wireless network solution for North Gate Studios, provides a sound explanation of the mitigation for the two identified risks, and includes a clear summary of the short- and long-term maintenance plans. All task requirements have been met.",
            "A Capstone Report that describes the implementation of an Information Security Policy solution for Top Care Medical after a compconsted merger is provided in the submission. The work adequately outlines the project approach and methodology, as well as the phases of the compconsted project and provides a succinct summary of the lessons learned from the capstone experience. All sections of the work, including Postimplementation Support, are compconste and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission describes a network security solution for North Gate Studios, provides a sound overview of the project in the Abstract, and includes screenshots and diagrams as project deliverables. A justification for the resources used, an explanation of the quality assurance approach, and a detailed discussion of the risk mitigations, solution testing, and maintenance plans are not observed. These areas need further development to meet task requirements.",
          ],
        },
      ],
    },
  ],
};

const crdDDMTask3 = {
  name: "DDM Task 3", //CRD name as it appears in EMA
  tsname: "MSISA Capstone Written Project", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        {
          name: "Not Evident",
          text: [
            "This aspect will be assessed when all task requirements are in place.",
          ],
        },
        {
          name: "Competent",
          text: ["The work is mechanically sound and free of major errors."],
        },
      ],
    },
    {
      name: "A1. IMPORTANT ASPECTS",
      grades: [
        {
          name: "Competent",
          text: [
            "The salient points of the information security realignment project for Top Care Medical, including it actual outcomes, are intelligently summarized in the Abstract of the report.",
          ],
        },
      ],
    },
    {
      name: "D1. PROJECT REQUIREMENTS",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents adequately detailed summaries of the functional and detailed requirements that emerged after the process and system audit and the gaps the project aimed to fill.",
          ],
        },
      ],
    },
    {
      name: "F1. APPROACH EXPLANATION",
      grades: [
        {
          name: "Competent",
          text: [
            "The four phases of the project methodology are succinctly outlined.",
          ],
        },
      ],
    },
    {
      name: "G2. RESOURCES USED",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Resources section states the resources used are identified in the Project Design section. A logical justification for the resources is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission includes a sound justification for the labor, hardware, and software resources to implement the solution.",
          ],
        },
      ],
    },
    {
      name: "H1. QUALITY ASSURANCE APPROACH",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission states the phases were implemented to increase troubleshooting efficiency. A detailed discussion of the approach to quality assurance and specifies the quality assurance criteria is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission includes a sound explanation of how the quality assurance was implemented during the project development process.",
          ],
        },
      ],
    },
    {
      name: "H2. SOLUTION TESTING",
      grades: [
        {
          name: "Approaching",
          text: [
            "The Solution Testing section includes a table that clearly organizes the each test and its purpose. A justification for the test case and scenarios, and the acceptance criteria, are not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission provides a sound overview of the solution testing and clearly identifies the acceptance criteria for the user and administration.",
          ],
        },
      ],
    },
    {
      name: "I1. IMPLEMENTATION PLAN",
      grades: [
        {
          name: "Approaching",
          text: [
            "The Implementation Plan section provides a sound overview of the user training. A detailed discussion of the phases of the rollout and details of the go-live is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission includes a sound explanation of the implementation phases and issues with a Skype user during the go-live event.",
          ],
        },
      ],
    },
    {
      name: "J1. RISK ASSESSMENT",
      grades: [
        {
          name: "Competent",
          text: [
            "Assessments of the risks of Intranet unavailability, corrupt files, and malicious employees are presented in a clear table.",
          ],
        },
      ],
    },
    {
      name: "J3. RISK MITIGATION",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Risk Mitigation section clearly states the importance of personnel. A logical explanation of how the two risks will be mitigated is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission provides a clear explanation of how the equipment and personnel-related risks will be mitigated.",
          ],
        },
      ],
    },
    {
      name: "K3. MAINTENANCE PLAN",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission includes a table that clearly organizes the project maintenance. A well-developed short- and long-term maintenance plan is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission includes a sound explanation of the short- and long-term maintenance plans that includes technical manuals and a maintenance support package.",
          ],
        },
      ],
    },
    {
      name: "L1A. DELIVERABLES",
      grades: [
        {
          name: "Competent",
          text: [
            "A sample output of the gap analysis provided in Appendix A as an actual project artifact adequately supports the explanations in the narrative.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission successfully describes the implementation of a secure wireless network solution for North Gate Studios, provides a sound explanation of the mitigation for the two identified risks, and includes a clear summary of the short- and long-term maintenance plans. All task requirements have been met.",
            "A Capstone Report that describes the implementation of an Information Security Policy solution for Top Care Medical after a compconsted merger is provided in the submission. The work adequately outlines the project approach and methodology, as well as the phases of the compconsted project and provides a succinct summary of the lessons learned from the capstone experience. All sections of the work, including Postimplementation Support, are compconste and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission describes a network security solution for North Gate Studios, provides a sound overview of the project in the Abstract, and includes screenshots and diagrams as project deliverables. A justification for the resources used, an explanation of the quality assurance approach, and a detailed discussion of the risk mitigations, solution testing, and maintenance plans are not observed. These areas need further development to meet task requirements.",
          ],
        },
      ],
    },
  ],
};

const crdLQTTask2 = {
  name: "LQT2 Task 2", //CRD name as it appears in EMA
  tsname: "MSISA Capstone Prospectus", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: ["The work is mechanically sound and free of major errors."],
        },
      ],
    },
    {
      name: "A1: PROBLEM",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "A2: PLAN",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "A3: METHODOLOGY",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The methodology will follow the National Institute of Standards and Technology (NIST) Special Publication 800-53 Security and Privacy Controls for Federal Information Systems and Organizations, which is fitting.",
          ],
        },
      ],
    },
    {
      name: "A4: IMPLEMENTATION PROPOSAL",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "A5: OUTCOMES",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B1: PROJECT SCOPE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B2: PROJECT RATIONALE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B3: PROBLEM SUMMARY",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B4: PROBLEM BACKGROUND",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "Lack of compliance is suitably detailed. The background of the problem within the greater context is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The Problem Background section explains that the county government is not PCI DSS compliant and presents historical insights into the reasons that contributed to the emergence of the problem in the context of current needs.",
          ],
        },
      ],
    },
    {
      name: "B5: NEED FOR THE SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B6: REASON FOR APPROACH",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The need for the approach clearly includes the lack of skilled personnel. A logical discussion, juxtaposing alternate solutions, with the strengths and weaknesses of each, is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A succinct justification for the selected approach that includes hiring of a chief security officer, is provided.",
          ],
        },
      ],
    },
    {
      name: "B7: PROSPECTUS ORGANIZATION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The Prospectus Organization clearly lists the sections to follow. Content summaries for each of the sections are not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Succinct content outlines of the Problem Statement and the Technology Solution segments that comprise the remainder of the prospectus, are provided.",
          ],
        },
      ],
    },
    {
      name: "C1: BACKGROUND INFORMATION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The ability to currently only accept cash and check is described, which is valid. Adequate detail for the background information is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "An adequate summary of the context in which the problem exists that situates the problem and provides direction to the project, is provided.",
          ],
        },
      ],
    },
    {
      name: "C2: CAUSES",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The lack of security is described logically. Adequate detail for the causes of the problem is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The lack of an employee with security assurance responsibility is presented as the primary reason behind the problem in an adequate root cause analysis.",
          ],
        },
      ],
    },
    {
      name: "C3: BUSINESS IMPACTS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "Several impacts are listed, which is fitting. Adequate detail for the business impacts of the problem is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The impact fo the problem on the country officials are adequately outlined. ",
          ],
        },
      ],
    },
    {
      name: "C4: COST ANALYSIS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "An estimated cost for salary is listed, which is clear. Adequate detail for a source-supported cost analysis for all the associated costs is not evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The salary of the chief security officer is presented as the primary factor contributing to the costs of the project.",
          ],
        },
      ],
    },
    {
      name: "C5: RISK ANALYSIS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "A number of risks are identified, which is valid. A logical identification for each of the risks, with level and likelihood for each, is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Reputational and financial risks associated with the proposed solution are discussed. ",
          ],
        },
      ],
    },
    {
      name: "C6: ASSUMPTIONS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "This aspect can be more accurately assessed once the other aspects have been revised to meet standards.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission clearly assumes that the county has the infrastructure and the financial resources to compconste the project.",
          ],
        },
      ],
    },
    {
      name: "C7: LIMITATIONS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "This aspect can be more accurately assessed once the other aspects have been revised to meet standards.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The limited throughput of the CSO that will be hired is presented as a constraint the project will be subjected to during it execution.",
          ],
        },
      ],
    },
    {
      name: "C8: TERMS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "XX terms are clearly listed and expanded. Source-supported definitions for all the technical terms used in the prospectus are not evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Adequate expansions and explanations of seven technical acronyms, including CSO, VLAN, and PII, are provided.",
          ],
        },
      ],
    },
    {
      name: "D: TECHNOLOGY SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "Several reasons for implementing a technology solution are soundly provided. A logical explanation, with adequate detail, for why a technology solution is needed, is not evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The proposed solution and the gaps it intends to fill are summarized in the introductory section of the Technology Solution segment.",
          ],
        },
      ],
    },
    {
      name: "D1: BUSINESS DRIVERS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "Three business drivers are included, which is clear. Adequate detail for the business drivers is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The provision of better services to the citizens by the county is described as the primary driver behind the proposed solution.",
          ],
        },
      ],
    },
    {
      name: "D1A: JUSTIFICATION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "Succinct explanations of the significance of the business drivers are presented.",
          ],
        },
      ],
    },
    {
      name: "D2: NO SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "D3: SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The solution includes the priority to hire a CSO, which is insightful. Adequate detail for the solution within business priorities is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The significance of the project to the county and NIST, PCI DSS, and other standards, are discussed in the concluding section of the prospectus.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "A Capstone Prospectus that describes a PCI DSS compliance project for a county government is presented in the submission. the work provides adequate descriptions of the problem under investigation and the proposed technology solution, and includes adequate root cause, costs, risk, business impact, business drivers, and no-solution scenario analyses. All sections of the work, including Causes, are compconste and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission presents the Capstone Proposal for PCI Compliance for a County Government. Some aspects of the submission, such as the clear rationale for the need to provide compliance, are compconste and meet standards. Adequate detail is not observed for the following aspects: Problem Background, Reason for Approach, Prospectus Organization, Background Information, Causes, Business Impacts, Cost Analysis, Risk Analysis, Terms, Technology Solution, Business Drivers, as well as the Solution.",
          ],
        },
      ],
    },
  ],
};

const crdDDMTask2 = {
  name: "DDM Task 2", //CRD name as it appears in EMA
  tsname: "MSISA Capstone Prospectus", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: ["The work is mechanically sound and free of major errors."],
        },
      ],
    },
    {
      name: "A1: PROBLEM",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "A2: PLAN",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "A3: METHODOLOGY",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The methodology will follow the National Institute of Standards and Technology (NIST) Special Publication 800-53 Security and Privacy Controls for Federal Information Systems and Organizations, which is fitting.",
          ],
        },
      ],
    },
    {
      name: "A4: IMPLEMENTATION PROPOSAL",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "A5: OUTCOMES",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B1: PROJECT SCOPE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B2: PROJECT RATIONALE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B3: PROBLEM SUMMARY",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B4: PROBLEM BACKGROUND",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "Lack of compliance is suitably detailed. The background of the problem within the greater context is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The Problem Background section explains that the county government is not PCI DSS compliant and presents historical insights into the reasons that contributed to the emergence of the problem in the context of current needs.",
          ],
        },
      ],
    },
    {
      name: "B5: NEED FOR THE SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B6: REASON FOR APPROACH",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The need for the approach clearly includes the lack of skilled personnel. A logical discussion, juxtaposing alternate solutions, with the strengths and weaknesses of each, is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A succinct justification for the selected approach that includes hiring of a chief security officer, is provided.",
          ],
        },
      ],
    },
    {
      name: "B7: PROSPECTUS ORGANIZATION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The Prospectus Organization clearly lists the sections to follow. Content summaries for each of the sections are not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Succinct content outlines of the Problem Statement and the Technology Solution segments that comprise the remainder of the prospectus, are provided.",
          ],
        },
      ],
    },
    {
      name: "C1: BACKGROUND INFORMATION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The ability to currently only accept cash and check is described, which is valid. Adequate detail for the background information is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "An adequate summary of the context in which the problem exists that situates the problem and provides direction to the project, is provided.",
          ],
        },
      ],
    },
    {
      name: "C2: CAUSES",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The lack of security is described logically. Adequate detail for the causes of the problem is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The lack of an employee with security assurance responsibility is presented as the primary reason behind the problem in an adequate root cause analysis.",
          ],
        },
      ],
    },
    {
      name: "C3: BUSINESS IMPACTS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "Several impacts are listed, which is fitting. Adequate detail for the business impacts of the problem is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The impact fo the problem on the country officials are adequately outlined. ",
          ],
        },
      ],
    },
    {
      name: "C4: COST ANALYSIS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "An estimated cost for salary is listed, which is clear. Adequate detail for a source-supported cost analysis for all the associated costs is not evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The salary of the chief security officer is presented as the primary factor contributing to the costs of the project.",
          ],
        },
      ],
    },
    {
      name: "C5: RISK ANALYSIS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "A number of risks are identified, which is valid. A logical identification for each of the risks, with level and likelihood for each, is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Reputational and financial risks associated with the proposed solution are discussed. ",
          ],
        },
      ],
    },
    {
      name: "C6: ASSUMPTIONS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "This aspect can be more accurately assessed once the other aspects have been revised to meet standards.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission clearly assumes that the county has the infrastructure and the financial resources to compconste the project.",
          ],
        },
      ],
    },
    {
      name: "C7: LIMITATIONS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "This aspect can be more accurately assessed once the other aspects have been revised to meet standards.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The limited throughput of the CSO that will be hired is presented as a constraint the project will be subjected to during it execution.",
          ],
        },
      ],
    },
    {
      name: "C8: TERMS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "XX terms are clearly listed and expanded. Source-supported definitions for all the technical terms used in the prospectus are not evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Adequate expansions and explanations of seven technical acronyms, including CSO, VLAN, and PII, are provided.",
          ],
        },
      ],
    },
    {
      name: "D: TECHNOLOGY SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "Several reasons for implementing a technology solution are soundly provided. A logical explanation, with adequate detail, for why a technology solution is needed, is not evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The proposed solution and the gaps it intends to fill are summarized in the introductory section of the Technology Solution segment.",
          ],
        },
      ],
    },
    {
      name: "D1: BUSINESS DRIVERS",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "Three business drivers are included, which is clear. Adequate detail for the business drivers is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The provision of better services to the citizens by the county is described as the primary driver behind the proposed solution.",
          ],
        },
      ],
    },
    {
      name: "D1A: JUSTIFICATION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "Succinct explanations of the significance of te3h business drivers are presented.",
          ],
        },
      ],
    },
    {
      name: "D2: NO SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "D3: SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Approaching",
          text: [
            "The solution includes the priority to hire a CSO, which is insightful. Adequate detail for the solution within business priorities is not found.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The significance of the project to the county and NIST, PCI DSS, and other standards, are discussed in the concluding section of the prospectus.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "A Capstone Prospectus that describes a PCI DSS compliance project for a county government is presented in the submission. the work provides adequate descriptions of the problem under investigation and the proposed technology solution, and includes adequate root cause, costs, risk, business impact, business drivers, and no-solution scenario analyses. All sections of the work, including Causes, are compconste and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission presents the Capstone Proposal for PCI Compliance for a County Government. Some aspects of the submission, such as the clear rationale for the need to provide compliance, are compconste and meet standards. Adequate detail is not observed for the following aspects: Problem Background, Reason for Approach, Prospectus Organization, Background Information, Causes, Business Impacts, Cost Analysis, Risk Analysis, Terms, Technology Solution, Business Drivers, as well as the Solution.",
          ],
        },
      ],
    },
  ],
};

const crdLQTTask4 = {
  name: "LQT2 Task 4", //CRD name as it appears in EMA
  tsname: "Oral Presentation: Multimedia Presentation", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: ["The work is mechanically sound and free of major errors."],
        },
      ],
    },
    {
      name: "A1. INTRODUCTION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A succinct summary of the candidate's academic and professional background is presented.",
          ],
        },
      ],
    },
    {
      name: "A2. OVERVIEW",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The salient points of the compconsted project are intelligently outlined in the oral defense.",
          ],
        },
      ],
    },
    {
      name: "A3. DISCUSSION",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Discussion aspect will be assessed once a link to the Panopto recording of the oral defense of the capstone project is in place.",
          ],
        },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "Adequate summaries of the learnings from the capstone experience in the major security domains are presented.",
          ],
        },
      ],
    },
    {
      name: "B. LINK TO PANOPTO RECORDING",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Link to Panopto Recording aspect will be assessed once a link to the Panopto recording of the oral defense of the capstone project is in place.",
          ],
        },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The work presents the following live link to the oral defense of the capstone project: PANOPTO_LINK",
          ],
        },
      ],
    },
    {
      name: "C. COPY OF MULTIMEDIA PRESENTATION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A clear copy of a XX-slide PowerPoint presentation is presented.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission provides a multimedia presentation and a link to a XX-minute recording of the oral defense of the capstone project that describes the implementation of Cyber Threat Intelligence in an organizational context. The assessment outlines the candidate's background, the project and its phases, and the learning from the capstone experience. All sections of the assessment, including Overview, are compconste and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission provides a clear copy of a multimedia presentation to support the oral defense of the capstone project. A link to the Panopto recording of the oral defense cannot be located. A link to the recording is needed to assess most of the aspects of the work.",
          ],
        },
      ],
    },
  ],
};

const crdAKM1Task1 = {
  name: "AKM1 Task 1", //CRD name as it appears in EMA
  tsname: "AKM1 Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C740%20Fundamentals%20of%20Data%20Analytics%20(AAE2,%20AKM1,%20IVP2)",
  aspects: [
    {
      name: "A: Dataset Preparation",
      grades: [
        {
          name: "Approaching",
          text: [
            "A reduced dataset of 1,046 events is provided in the submission. The dataset includes an observation that is missing information about District/Sector. A cleaned dataset with appropriate handling of all missing or unnecessary data is needed to meet requirements.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A dataset that provides attributes of [Number of events] that adequately support the distribution analysis of the incidents captured from the 911 calls to the Seattle Police Department is provided.",
          ],
        },
      ],
    },
    {
      name: "B: Data Preparation Explanation",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission explains why a reduction in dimensionality was performed on the provided dataset. An explanation of how the missing sector data is handled is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The work presents satisfactory justifications of the dimensionality reduction and the [row removal OR the missing sector data imputation] that resulted in the dataset that supports the distribution analysis of the incidents.",
          ],
        },
      ],
    },
    {
      name: "C: Data Sheets",
      grades: [
        {
          name: "Competent",
          text: [
            "Accurate tables and clear bar charts effectively support the distribution analysis of the events represented in the cleaned dataset by date, type, or sector.",
          ],
        },
      ],
    },
    {
      name: "D: Data Sheets Observations Summary",
      grades: [
        {
          name: "Competent",
          text: [
            "Relevant observations from the visual inspection of each datasheet are presented.",
          ],
        },
      ],
    },
    {
      name: "E: Fit",
      grades: [
        {
          name: "Competent",
          text: [
            "A sound analysis of the fit of the model to its data that observes an accurately calculated [coefficient of determination OR other detail] is provided.",
          ],
        },
      ],
    },
    {
      name: "F: Outliers",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents an adequate description of the impact of the outliers on the regression model that notes the change of the [coefficient of determination that results from the removal of the outliers from consideration OR other detail].",
          ],
        },
      ],
    },
    {
      name: "G: Residuals",
      grades: [
        {
          name: "Approaching",
          text: [
            "A reasonable recommendation to remove the outliers from consideration to improve the fit of the linear regression model is presented. A residual plot that shows the residuals on the vertical axis and the independent constiable on the horizontal axis, cannot be located.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A clear residual plot and a reasonable recommendation to [remove the outliers to improve the fit of the model to its data OR other detail] are provided.",
          ],
        },
      ],
    },
    {
      name: "H: Current Qualification",
      grades: [
        {
          name: "Competent",
          text: [
            "The work presents a thorough justification for the assessment of the precinct’s current ineligibility for funding based on the comparison of the average number of officers at the scene from the cleaned dataset and the funding threshold.",
          ],
        },
      ],
    },
    {
      name: "I: Precautions or Behaviors",
      grades: [
        {
          name: "Approaching",
          text: [
            "Outlines of general behaviors to be exercised when working with sensitive data are presented. The specific precautions the Seattle Police Department is to exercise when working with the given sensitive data are unclear.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Descriptions of reasonable precautions the Seattle Police Department is to exercise when working with and communicating about its sensitive data, such as [one example; e.g. sharing the data with authorized parties], are provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents sound analyses of the distribution of [how many] events captured from the 911 calls to the Seattle Police Department by date, type, and sector; the given linear regression model and the behavior of its outliers and residuals; the eligibility of the precinct for additional state funding; and the specific precautions the department is to exercise when working with and communicating about its sensitive data. All aspects of the work, including Fit, are presented in satisfactory detail and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission presents sound analyses of the distribution of 1,046 events captured from the 911 calls to the Seattle Police Department by date, type, and sector; the given linear regression model and the behavior of its outliers and residuals; and the eligibility of the precinct for additional state funding. Adequate descriptions of the specific precautions the department is to exercise when working with and communicating about its sensitive data are not observed. A revision of the response to the task prompt Precautions or Behaviors is needed to meet standards. ",
          ],
        },
      ],
    },
  ],
};

const crdGWA2Task3 = {
  name: "GWA2 Task 3",
  tsname: "GWA2 Task 3",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C498%20MS%20IT%20Management%20Capstone%20(HIT2,%20GWA2)",
  aspects: [
    {
      name: "Program Outcome 1",
      grades: [
        {
          name: "Competent",
          text: [
            "A summary of the project to develop and implement a threat intelligence framework for SunTrust Bank to combat cybercrime is provided with excellent technical detail in the submission.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 2",
      grades: [
        {
          name: "Competent",
          text: [
            "The included timeframe that clearly identifies tasks dependent on previous tasks supports the ability to manage activities in the development.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents the report for a software evaluation for Virtualization and Automation. All aspects of the submission, including diagrams such as the Virtual Machine Build Workflow to document the design, are compconste and meet standards.",
            "The submission presents a thorough Capstone Report which describes implementing a threat intelligence framework solution to mitigate cyber attacks for SunTrust Bank and includes a compelling presentation that highlights the most salient aspects of the project. All aspects of the submission are compconste and meet standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdGWA2Task2 = {
  name: "GWA2 Task 2",
  tsname: "GWA2 Task 2",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C498%20MS%20IT%20Management%20Capstone%20(HIT2,%20GWA2)",
  aspects: [
    {
      name: "Program Outcome 1",
      grades: [
        {
          name: "Competent",
          text: [
            "Adequate summaries of dissemination plan for the results of the project are presented.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 2",
      grades: [
        {
          name: "Competent",
          text: [
            "Adequate summaries of the management of the project and its stakeholders are presented. A clear project plan is presented.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 4",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents succinct descriptions and assessments of the risks associated with the proposed implementation of the technology solution.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 5",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents an adequate summary and a clear justification of the proposed technology solution.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 6",
      grades: [
        {
          name: "Competent",
          text: [
            "A succinct explanation for how the proposed project will demonstrate Outcome 6 is provided. The support of the project of the organization's business priorities is summarized.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 7",
      grades: [
        {
          name: "Competent",
          text: [
            "Adequate summaries of the infrastructure problem under investigation and the proposed technology solution are provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents a thorough Capstone Prospectus that outlines the plan to develop a technology solution for <ORG>. The work presents an adequate summary of the problem under investigation, the proposed technology solution, and the salient points of the project, including its risks. The competencies supporting each of the program objectives are adequately demonstrated and the submission meets the requirements of the task.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdEYP1Task1 = {
  name: "EYP1 Task 1", //CRD name as it appears in EMA
  tsname: "EYP Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C769%20IT%20Capstone%20Written%20Project%20(EYP1)",
  aspects: [
    {
      name: "A. TOPIC APPROVAL FORM",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor cannot be located.",
          ],
        },
        {
          name: "Competent",
          text: ["The Topic Approval Form is signed by a Course Instructor."],
        },
      ],
    },
    {
      name: "B. CAPSTONE RELEASE FORM",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Capstone Release Form aspect will be assessed once a compconsted Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A compconsted and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided.",
          ],
        },
      ],
    },
    {
      name: "C. HUMAN SUBJECTS FAQ QUIZ",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Competent",
          text: [
            "A clear copy of the results from the successfully compconsted Human Subjects FAQ Quiz is presented.",
          ],
        },
      ],
    },
    {
      name: "D. IRB COMPLIANCE",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The IRB Compliance aspect will be assessed once a compconsted Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The proposal complies with IRB standards for exemption status.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The Waivers, IRB Quiz and Compliance, as well as the Topic Approval form are all compconste and meet standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdEYP1Task2 = {
  name: "EYP1 Task 2", //CRD name as it appears in EMA
  tsname: "EYP Task 2", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C769%20IT%20Capstone%20Written%20Project%20(EYP1)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: ["The work is mechanically sound and free from major errors."],
        },
      ],
    },
    {
      name: "TECHNICAL WRITING STYLE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The proposal exhibits a sound technical writing style and appropriate use of terminology.",
          ],
        },
      ],
    },
    {
      name: "APA FORMATTING",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The formatting of the document generally aligns with the conventions of the American Psychological Association.",
          ],
        },
      ],
    },
    {
      name: "A1. PROBLEM",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "A2. IT SOLUTION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: ["The solution aptly describes <SOLUTION>."],
        },
      ],
    },
    {
      name: "A3. PLAN OF IMPLEMENTATION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B. REVIEW OF OTHER WORK",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B1. RELATION OF ARTIFACT TO PROJECT DEVELOPMENT",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "C. RATIONALE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "D. CURRENT PROJECT ENVIRONMENT",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "E. METHODOLOGY",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "<METHODOLOGY> is appropriately selected as the proposed project methodology.",
          ],
        },
      ],
    },
    {
      name: "F1. GOALS, OBJECTIVES, AND DELIVERABLES TABLE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "F2. GOALS, OBJECTIVES, AND DELIVERABLES DESCRIPTIONS",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A sufficient discussion of the goals, objectives and deliverables is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "G. PROJECT TIMELINE WITH MILESTONES",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A compconste project timeline with start/end dates and milestones is provided.",
          ],
        },
      ],
    },
    {
      name: "H. OUTCOME",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission describes a capstone proposal for developing <SOLUTION>. All aspects of the capstone proposal including the solution and timeline are compconste with excellent detail and meet task requirements.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdEYP1Task3 = {
  name: "EYP1 Task 3", //CRD name as it appears in EMA
  tsname: "EYP Task 3", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C769%20IT%20Capstone%20Written%20Project%20(EYP1)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: ["The work is mechanically sound and free from major errors."],
        },
      ],
    },
    {
      name: "TECHNICAL WRITING STYLE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The proposal exhibits a sound technical writing style and appropriate use of terminology.",
          ],
        },
      ],
    },
    {
      name: "APA FORMATTING",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The formatting of the document generally aligns with the conventions of the American Psychological Association.",
          ],
        },
      ],
    },
    {
      name: "A. SUMMARY",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The submission presents a thorough description of the <COMPANY> <SOLUTION> project.",
          ],
        },
      ],
    },
    {
      name: "B. REVIEW OF OTHER WORK",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "C. CHANGES TO PROJECT ENVIRONMENT",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "Changes such as XX and XX are discussed thoroughly in the submission.",
          ],
        },
      ],
    },
    {
      name: "D. METHODOLOGY",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "E. PROJECT GOALS AND OBJECTIVES",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "F. PROJECT TIMELINE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A compconste timeline with milestones and start/end dates is provided.",
          ],
        },
      ],
    },
    {
      name: "G. UNANTICIPATED REQUIREMENTS",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "H. CONCLUSION",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "I. PROJECT DELIVERABLES",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents a thorough capstone report which describes the implementation of a <SOLUTION> for <COMPANY>. All aspects of the work, such as the Summary and Timeline, are compconste and meet task standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdDDT1Task1 = {
  name: "DDT1 Task 1", //CRD name as it appears in EMA
  tsname: "DDT1 Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C435%20Technical%20Writing%20(DDT1)",
  aspects: [
    {
      name: "A. IT CAPSTONE WAIVER",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A compconsted and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided.",
          ],
        },
      ],
    },
    {
      name: "B. IT CAPSTONE THIRD-PARTY RELEASE TEMPLATE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "As the project is not based upon and does not include Restricted Information, an IT Capstone Third-Party Release constter is not required.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission that includes a declaration that the capstone project is not based upon and does not include Restricted Information in a digitally signed IT Capstone Waiver/Release Form is compconste and meets standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdDDT1Task2 = {
  name: "DDT1 Task 2", //CRD name as it appears in EMA
  tsname: "DDT1 Task 2", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C435%20Technical%20Writing%20(DDT1)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: ["The submission has overall sound articulation."],
        },
      ],
    },
    {
      name: "A. TOPIC",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            'The submission identifies the topic as "<TOPIC>" and aligns with the Software Development degree program.',
          ],
        },
      ],
    },
    {
      name: "B1. COVER SHEET",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            "The proposal begins with a clear cover sheet which includes all four required elements.",
          ],
        },
      ],
    },
    {
      name: "B2. INTRODUCTION",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            "The proposal introduction presents a detailed overview of the <SUBMISSION SPECIFIC> process and proposed solution for <COMPANY>.",
          ],
        },
      ],
    },
    {
      name: "B3. REVIEW OF OTHER WORK",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B4. RATIONALE",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B5A. SYSTEMS ANALYSIS",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B5B. METHODOLOGY",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            "<METHODOLOGY> is an appropriate method of execution for the proposed development.",
          ],
        },
      ],
    },
    {
      name: "B6. PROJECT GOALS AND OBJECTIVES",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B7. PROJECT DELIVERABLES",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B8. PROJECT TIMELINE WITH MILESTONES",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            "A compconste timeline with milestones and start/end dates is provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission represents a capstone proposal to develop and implement a <SUBMISSION SPECIFIC> application for <COMPANY>. All aspects of the capstone proposal including the solution and timeline are compconste with excellent detail and meet task requirements",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdENT1Task1 = {
  name: "ENT1 Task 1", //CRD name as it appears in EMA
  tsname: "ENT1 Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C436%20IT%20Capstone%20Written%20Project%20(ENT1)",
  aspects: [
    {
      name: "A. IT CAPSTONE WAIVER",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A compconsted and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided.",
          ],
        },
      ],
    },
    {
      name: "B. IT CAPSTONE THIRD-PARTY RELEASE TEMPLATE",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "As the project is not based upon and does not include Restricted Information, an IT Capstone Third-Party Release constter is not required.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission that includes a declaration that the capstone project is not based upon and does not include Restricted Information in a digitally signed IT Capstone Waiver/Release Form is compconste and meets standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdENT1Task2 = {
  name: "ENT1 Task 2", //CRD name as it appears in EMA
  tsname: "ENT1 Task 2", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C436%20IT%20Capstone%20Written%20Project%20(ENT1)",
  aspects: [
    {
      name: "ARTICULATION OF RESPONSE",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: ["The submission has overall sound articulation."],
        },
      ],
    },
    {
      name: "A. TOPIC",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            'The submission identifies the topic as "<TOPIC>" and aligns with the Software Development degree program.',
          ],
        },
      ],
    },
    {
      name: "B1. COVER SHEET",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            "The proposal begins with a clear cover sheet which includes all four required elements.",
          ],
        },
      ],
    },
    {
      name: "B2. INTRODUCTION",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            "The proposal introduction presents a detailed overview of the <SUBMISSION SPECIFIC> process and proposed solution for <COMPANY>.",
          ],
        },
      ],
    },
    {
      name: "B2A. DESCRIPTION OF PROJECT",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B2B. REVIEW OF OTHER WORK",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B2C. RATIONALE",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            "The <RATIONALE/TOOL> is logically explained in the submission.",
          ],
        },
      ],
    },
    {
      name: "B2D. SYSTEMS ANALYSIS AND METHODOLOGY",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B3. PROJECT GOALS AND OBJECTIVES",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        {
          name: "HIGHLY COMPETENT",
          text: [
            "The explanation for the XX goal and XX associated objectives are logically detailed with clear, identified outcomes for each.",
          ],
        },
      ],
    },
    {
      name: "B3A. GOALS AND OBJECTIVES LIST",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B4. PROJECT TIMELINE",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B5. PROJECT DEVELOPMENT",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "B6. EVIDENCE OF PROJECT DELIVERABLES",
      grades: [
        { name: "UNSATISFACTORY/NOT PRESENT", text: [""] },
        { name: "DOES NOT MEET STANDARD", text: [""] },
        { name: "MINIMALLY COMPETENT", text: [""] },
        { name: "COMPETENT", text: [""] },
        { name: "HIGHLY COMPETENT", text: [""] },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents a thorough Capstone Report which describes the implementation of <SOLUTION>. All aspects of the submission, including the exemplary screenshots in the Appendices to document the development and implementation, are compconste and meet standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdIXPTask1 = {
  name: "IXP Task 1",
  tsname: "IXP Task 1",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C744%20Data%20Mining%20and%20Analytics%20II%20(ACE3,%20IXP2)",
  aspects: [
    {
      name: "A. Tool Selection: Benefits",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission presents a succinct comparative justification for the selection of [SAS OR R OR Python] for the analysis of the churn of the customers of the telecom company over [CHOOSE THE OTHER TWO: Python AND/OR R AND/OR SAS].",
          ],
        },
      ],
    },
    {
      name: "B. Tool Selection: Aims",
      grades: [
        {
          name: "Competent",
          text: [
            "The goal of the analysis to [AS STATED IN THE WORK] is adequately outlined.",
          ],
        },
      ],
    },
    {
      name: "C. Tool Selection: Prescribed Analysis",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission clearly identifies [Logistic Regression] as a non-descriptive technique to use on the given data. While [frequency analysis] is proposed, an appropriate descriptive technique cannot be located. Please identify a method that performs an appropriate descriptive function.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission clearly identifies [METHOD] as a descriptive, and [METHOD] as a non-descriptive method to support the analysis of the customer attrition.",
          ],
        },
      ],
    },
    {
      name: "D. Data Exploration and Preparation: Target constiable",
      grades: [
        {
          name: "Competent",
          text: ["The target constiable Churn is accurately identified."],
        },
      ],
    },
    {
      name: "E. Data Exploration and Preparation: Independent predictor",
      grades: [
        {
          name: "Competent",
          text: [
            "[constIABLE NAME OR NAMES] [IS/ARE] appropriately identified as predictors represented in the given dataset.",
          ],
        },
      ],
    },
    {
      name: "F. Data Exploration and Preparation: Goal",
      grades: [{ name: "Competent", text: [""] }],
    },
    {
      name: "G. Data Exploration and Preparation: Statistical Identity",
      grades: [
        {
          name: "Competent",
          text: [
            "The work describes the data in the given dataset and succinctly outlines the phenomenon to be predicted.",
          ],
        },
      ],
    },
    {
      name: "H. Data Exploration and Preparation: Cleaning",
      grades: [
        {
          name: "Competent",
          text: [
            "The work presents an adequate overview of the code that is used to prepare the data for the application of the selected methods and provides the cleaned dataset in a separate file.",
          ],
        },
      ],
    },
    {
      name: "I. Data Analysis: Uniconstiate Statistics",
      grades: [
        {
          name: "Competent",
          text: [
            "Accurate [histograms OR other types of visualizations] effectively support the uniconstiate distribution analysis of the constiables represented in the given dataset.",
          ],
        },
      ],
    },
    {
      name: "J. Data Analysis: Biconstiate Statistics",
      grades: [
        {
          name: "Competent",
          text: [
            "Accurate [types of visualizations used] effectively support the biconstiate analysis of the interrelationship between the predictors and the target constiable.",
          ],
        },
      ],
    },
    {
      name: "K. Data Analysis: Methods",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission applies and annotates [Logistic Regression] to explain customer churn. The application and interpretation of an appropriate descriptive method cannot be located.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Annotated and clear applications of the chosen methods, [Logistic Regression and Principal Components Analysis] are applied on the cleaned dataset to explain customer churn.",
          ],
        },
      ],
    },
    {
      name: "L. Data Analysis: Justification",
      grades: [
        {
          name: "Competent",
          text: [
            "A clear explanation for why the selected methods are appropriate to be used on the given dataset is presented.",
          ],
        },
      ],
    },
    {
      name: "M. Data Analysis: Visual Representation",
      grades: [
        {
          name: "Competent",
          text: [
            "The work provides succinct justification for the selection of visualization elements to support the analysis of the customer churn, including [LIST EXAMPLES OF VISUALIZATIONS, such as histograms].",
          ],
        },
      ],
    },
    {
      name: "N. Data Summary: Phenomenon",
      grades: [{ name: "Competent", text: [""] }],
    },
    {
      name: "O. Data Summary: Detection",
      grades: [
        {
          name: "Competent",
          text: [
            "The work clearly identifies [LIST OF constIABLES] as the predictors that most significantly influence the churn of the customer.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents an analysis of the attrition phenomenon among the customers of a telecom company that relies on the [LIST THE TWO METHODS, e.g. Principal Component Analysis and Logistic Regression] methods. The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the [SAS or R OR Python] code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary: Detection, are compconste and meet standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdJNPTask2 = {
  name: "JNP Task 2",
  tsname: "JNP Task 2",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
  aspects: [
    {
      name: "A: RESEARCH QUESTION",
      grades: [
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A clear summary of the hypothesis that country of origin is statistically significant in determining whether a wine rating is in the upper or lower 50% of wine ratings is presented.",
          ],
        },
      ],
    },
    {
      name: "B: DATA COLLECTION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Competent",
          text: [
            "The work clearly identifies the Wine Enthusiast dataset found on Kaggle.com as the data sources and outlines the data collection procedures using SAS.",
          ],
        },
      ],
    },
    {
      name: "C: DATA EXTRACTION AND PREPARATION",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Competent",
          text: [
            "The work clearly identifies the U.S. Census website as the data sources and outlines the data collection procedures.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents an analysis of the relationship between poverty and employment in the Mountain State region and provides clear directions for further research, The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the R code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary and Implications, are compconste and meet standards.",
            "The submission presents an analysis of the significance of wine origin and constiety in review scoring that relies on Chi-Squared tests and regression methods. The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the SAS code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary and Implications, are compconste and meet standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdAEE2Task1 = {
  name: "AEE2 Task 1", //CRD name as it appears in EMA
  tsname: "AEE2 Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
  aspects: [
    {
      name: "A. TOPIC APPROVAL FORM",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor cannot be located.",
          ],
        },
        {
          name: "Competent",
          text: ["The Topic Approval Form is signed by a Course Instructor."],
        },
      ],
    },
    {
      name: "B. CAPSTONE RELEASE FORM",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Capstone Release Form aspect will be assessed once a compconsted Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A compconsted and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The Topic Approval Form and Capstone Release Form are all compconste and meet task requirements.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdMDP1Task1 = {
  name: "MDP1 Task 1", //CRD name as it appears in EMA
  tsname: "MDP1 Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C964%20Computer%20Science%20Capstone%20(MDP1)",
  aspects: [
    {
      name: "A. Topic Approval Form",
      grades: [
        {
          name: "Not Evident",
          text: [
            "This aspect will be evaluated once a signed Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: ["The Topic Approval Form is signed by a Course Instructor."],
        },
      ],
    },
    {
      name: "B. Capstone Release Form",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Capstone Release Form aspect will be evaluated once a signed Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A compconsted and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided.",
          ],
        },
      ],
    },
    {
      name: "C. IRB Form",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The IRB Form aspect will be evaluated once a signed Topic Approval Form is in place.",
          ],
        },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The submission includes a compconsted IRB Form an email that aptly confirms the compconstion of the Human Subjects FAQ Quiz.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The Topic Approval Form and Capstone Release Form are all compconste and meet task requirements.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor is not observed.",
          ],
        },
      ],
    },
  ],
};

const crdKYP2Task1 = {
  name: "KYP2 Task 1", //CRD name as it appears in EMA
  tsname: "KYP2 Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C796%20Cybersecurity%20Graduate%20Capstone%20(KYP2)",
  aspects: [
    {
      name: "A. Topic Approval Form",
      grades: [
        {
          name: "Not Evident",
          text: [
            "This aspect will be evaluated once a signed Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission provides a Topic Approval Form is signed by a Course Instructor and documentation that confirms the compconstion of the Human Subjects FAQ Quiz.",
          ],
        },
      ],
    },
    {
      name: "B. Capstone Release Form",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Capstone Release Form aspect will be evaluated once a signed Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A compconsted and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The Topic Approval Form and Capstone Release Form are compconste and meet task requirements.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor is not observed.",
          ],
        },
      ],
    },
  ],
};

const crdAEE2Task2 = {
  name: "AEE2 Task 2",
  tsname: "AEE2 Task 2",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
  aspects: [
    {
      name: "A: RESEARCH QUESTION",
      grades: [
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "A clear summary of the hypothesis that country of origin is statistically significant in determining whether a wine rating is in the upper or lower 50% of wine ratings is presented.",
          ],
        },
      ],
    },
    {
      name: "B: DATA COLLECTION",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The work clearly identifies the [DATASET] found on [DATASET_LOCATION] as the data sources. A logical discussion with adequate details to describe the advantages and disadvantages of the data-gathering methodology used and details about any challenges encountered during the process of collecting the data are not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The work clearly identifies the Wine Enthusiast dataset found on Kaggle.com as the data sources and outlines the data collection procedures using SAS.",
          ],
        },
      ],
    },
    {
      name: "C: DATA EXTRACTION AND PREPARATION",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The work clearly identifies the required libraries and the import command used. An adequate explanation of the tools and techniques used for data extraction and data preparation, the justification for using the described tools and techniques, including any advantages or disadvantages of these when used with your data-extraction and -preparation methods, is not evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The work clearly identifies the U.S. Census website as the data sources and outlines the data collection procedures.",
          ],
        },
      ],
    },
    {
      name: "E: DATA SUMMARY AND IMPLICATIONS",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission provides a conclusion with summary statistics which is fitting. An adequate summary of the implications of the data analysis in the context of the research question, a recommend a course of action based on the results, and two proposed directions or approaches for future study of the data set are not evident in the work.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents an analysis of the relationship between poverty and employment in the Mountain State region and provides clear directions for further research, The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the R code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary and Implications, are compconste and meet standards.",
            "The submission presents an analysis of the significance of wine origin and constiety in review scoring that relies on Chi-Squared tests and regression methods. The stages of the analytical process are overviewed with satisfactory detail and include adequate explanations of the SAS code, interpretations of the results, and visualizations. All sections of the assessment, including Data Summary and Implications, are compconste and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission presents a Data Analytics Report that thoroughly describes the analysis of important factors contributing to employee attrition using Logistic Regression, Decision Tree, and Random Forest on the IBM Employee Attrition and Performance Dataset. The work provides a clear summary of the research question, intelligent analysis, and many salient points of the project. Some aspects are present with limited details. The Data Collection, Data Extraction And Preparation, and Data Summary And Implications aspects need further development to meet task requirements.",
          ],
        },
      ],
    },
  ],
};

const crdJNPTask3 = {
  name: "JNP Task 3",
  tsname: "JNP Task 3",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
  aspects: [
    {
      name: "A: EXECUTIVE SUMMARY AND IMPLICATIONS",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B1: PRESENTATION: ORGANIZATION AND PROFESSIONALISM",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panopto presentation is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission presents professionally delivered presentation of the salient points of <SUBJECT> in a Panopto recording.",
          ],
        },
      ],
    },
    {
      name: "B2: PRESENTATION: CONTENT",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panopto presentation is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The presentation aptly discusses the problem under investigation and the analysis of <SUBJECT>.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents a link to a Panopto recordings that discuss the analysis of <SUBJECT> and outline the salient points of the project. All aspects of the work, including Presentation: Content, are presented in adequate detail and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panoptu presentation is not observed. This area needs further development to meet task requirements.",
          ],
        },
      ],
    },
  ],
};

const crdAEE2Task3 = {
  name: "AEE2 Task 3",
  tsname: "AEE2 Task 3",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C772%20Data%20Analytics%20Graduate%20Capstone%20(AEE2,%20JNP2)",
  aspects: [
    {
      name: "A: EXECUTIVE SUMMARY AND IMPLICATIONS",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        { name: "Competent", text: [""] },
      ],
    },
    {
      name: "B1: PRESENTATION: ORGANIZATION AND PROFESSIONALISM",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panopto presentation is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission presents professionally delivered presentation of the salient points of <SUBJECT> in a Panopto recording.",
          ],
        },
      ],
    },
    {
      name: "B2: PRESENTATION: CONTENT",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panopto presentation is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The presentation aptly discusses the problem under investigation and the analysis of <SUBJECT>.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents a link to a Panopto recordings that discuss the analysis of <SUBJECT> and outline the salient points of the project. All aspects of the work, including Presentation: Content, are presented in adequate detail and meet standards.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "The submission includes the PowerPoint presentation, the Executive Summary, and the required waiver forms. A link to the Panoptu presentation is not observed. This area needs further development to meet task requirements.",
          ],
        },
      ],
    },
  ],
};

const crdNIPTask2 = {
  name: "NIP1 Task 2",
  tsname: "NIP1 Task 2",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C951%20Introduction%20to%20Artificial%20Intelligence%20(NIP1)",
  aspects: [
    {
      name: "A: Problem",
      grades: [
        {
          name: "Competent",
          text: [
            "Environmental modifications, such as [OBSTACLE 1] and [OBSTACLE 2] that simulate the aftermath of [DISASTER ENVIRONMENT], are succinctly outlined.",
          ],
        },
      ],
    },
    {
      name: "B: Improved Disaster Recovery",
      grades: [
        {
          name: "Competent",
          text: [
            "A detailed explanation of the robot's functional support in the modified environment, such as [HOW], is evident.",
          ],
        },
      ],
    },
    {
      name: "C: Architecture",
      grades: [
        {
          name: "Competent",
          text: [
            "Summaries of [HOW MANY] significant modifications of the BubbleRob, including [EXAMPLE OF MODIFICATION], are provided. ",
          ],
        },
      ],
    },
    {
      name: "D: Goal Seeking",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission adequately explains how the implemented optimization principles impact the prototype’s reasoning, knowledge, representation, uncertainty, and intelligence, such as using sensor input to [EXAMPLE OF: reasoning, knowledge, representation, uncertainty, or intelligence].",
          ],
        },
      ],
    },
    {
      name: "E: Advantages and Limitations",
      grades: [
        {
          name: "Competent",
          text: [
            "The advantages and limitations, including when the robot performs optimally and when it underperforms, are adequately described.",
          ],
        },
      ],
    },
    {
      name: "F: Testing and Implementation Plan",
      grades: [
        {
          name: "Competent",
          text: [
            "Adequate justification for test cases, reasonable scenarios, and a description of the acceptance criterion for each is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "G: Improving the Prototype",
      grades: [
        {
          name: "Competent",
          text: [
            "Reasonable summaries of further optimization efforts using Reinforced Learning, such as [SUMMARIES, e.g. application of reinforced learning, how the robot can learn what areas are safe terrain, and how the learnings are used to improve the robot’s abilities] are provided.",
          ],
        },
      ],
    },
    {
      name: "H: Code",
      grades: [
        {
          name: "Competent",
          text: [
            "A clear copy of the code of the modified BubbleRob agent is provided in a separate file.",
          ],
        },
      ],
    },
    {
      name: "I: Panopto Recording",
      grades: [
        {
          name: "Competent",
          text: [
            "A live link to a [HOW LONG]-minute Panopto recording that demonstrates the actions of the robot in the modified simulated environment, is provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission provides a demonstration of a disaster recovery robot's goal-seeking actions within [DISASTER ENVIRONMENT] and an analysis of the [HOW MANY] significant modifications implemented on the BubbleRob agent. The work outlines the sensory repertoire of the robotic agent and its limitations, as well as the testing, implementation, and optimization phases of the project. All aspects of the work, including Improving the Prototype, are presented with satisfactory support and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdNIPTask1 = {
  name: "NIP1 Task 1",
  tsname: "NIP1 Task 1",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20Data%20Analytics/CRDs/C951%20Introduction%20to%20Artificial%20Intelligence%20(NIP1)",
  aspects: [
    {
      name: "A: Description",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission adequately discusses how the chatbot meets the needs of a career advisor.",
          ],
        },
      ],
    },
    {
      name: "B: Other Works",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission aptly summarizes the article <FROM_SUBMISSION> and provides a description of how it relates to the project. A summary of a second third-party work could not be located. Make sure to update the references section in the report once the second summary is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "An adequate summary of [HOW MANY] recently published third-party artifacts that contextualize the problem and inform the development of the chatbot is provided.",
          ],
        },
      ],
    },
    {
      name: "C: Job Types",
      grades: [
        {
          name: "Competent",
          text: [
            "[HOW MANY] job types, including [EXAMPLE], are identified for interaction with the chatbot.",
          ],
        },
      ],
    },
    {
      name: "D: Training",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission adequately discusses the training cases used to find additional patterns for the chatbot to recognize.",
            "The submission adequately describes how the chatbot’s AIML rules-based decision tree architecture uses [AIML TAGS OR JOB TRAINING WEBSITES] that determine the most appropriate response to user inputs.",
          ],
        },
      ],
    },
    {
      name: "E: Optimization",
      grades: [
        {
          name: "Competent",
          text: [
            "An adequate explanation of the optimization process for the chatbot is provided.",
            "The submission adequately explains how the [AIML TAGS] tags were used to optimize the AIML script.",
          ],
        },
      ],
    },
    {
      name: "F: Installation Manual",
      grades: [
        {
          name: "Competent",
          text: [
            "An easy-to-follow installation manual is provided in a separate file.",
          ],
        },
      ],
    },
    {
      name: "G: Effectiveness of the Bot",
      grades: [
        {
          name: "Competent",
          text: [
            "A concise explanation for how the chatbot will be monitored and maintained by adding new response categories to reduce incorrect responses is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "H: Challenges during Development",
      grades: [
        {
          name: "Competent",
          text: [
            "Concise descriptions of using the UL and LI AIML elements to streamline choices are provided in the work.",
          ],
        },
      ],
    },
    {
      name: "I: The Bot Development Environment",
      grades: [
        {
          name: "Competent",
          text: [
            "A succinct analysis of the strengths and weaknesses of the development environment are presented.",
            "The submission identifies [ONE EXAMPLE] as a strength, and [ONE EXAMPLE] as the weakness of the given environment.",
          ],
        },
      ],
    },
    {
      name: "J: Panopto Recording",
      grades: [
        {
          name: "Competent",
          text: [
            "A live link to a [HOW LONG]-minute Panopto recording that demonstrates the actions of the chatbot in interacting with a user, is provided.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents a finalized report about an advisory chatbot developed with a [rules-based decision tree architecture OR OTHER METHOD] that handles Computer Science students’ career-based questions, an instructive installation manual, and a [HOW LONG]-minute Panopto screen capture featuring a narrated interactive session with the chatbot. The work provides detailed summaries of the use of the AIML tags used to train and optimize the chatbot’s interactions with the user, a reasonable evaluation framework, and thoughtful discussions of the challenges faced during the development phases. All sections of the work, including Optimization, are compconste and meet standards.",
          ],
        },
      ],
    },
  ],
};

const crdGWA2Task1 = {
  name: "GWA2 Task 1",
  tsname: "GWA2 Task 1",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C498%20MS%20IT%20Management%20Capstone%20(HIT2,%20GWA2)",
  aspects: [
    {
      name: "Topic Approval Form",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The submission presents an MSITM Capstone Topic Approval Form that is signed by the course instructor.",
          ],
        },
      ],
    },
    {
      name: "Capstone Waiver Form",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "An MSITM Capstone Waiver Form that states the project is not based upon and does not include restricted information is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "IRB Form",
      grades: [
        { name: "Not Evident", text: [""] },
        { name: "Approaching", text: [""] },
        {
          name: "Competent",
          text: [
            "The submission includes an email that aptly confirms the compconstion of the Human Subjects FAQ Quiz.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission provides an appropriate Topic Approval Form, Waiver Form, and Human Subjects FAQ Quiz. All sections are compconste and meet task requirements.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdDDMTask1 = {
  name: "DDM Task 1",
  tsname: "DDM Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
  aspects: [
    {
      name: "Timeline Form",
      grades: [
        {
          name: "Competent",
          text: [
            "A CAWA MSISCA Written Capstone Timeline Form that states the prospectus will be compconsted by <DATE> is aptly provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "Capstone Waiver Release Form",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission includes a compconsted Capstone Waiver Release Form that is digitally signed and dated.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "A compconsted Timeline Form and Capstone Waiver Release Form are provided in the submission.",
          ],
        },
      ],
    },
  ],
};

const crdLQTTask1 = {
  name: "LQT2 Task 1",
  tsname: "LQT2 Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/LQT2%20MS%20Information%20Security%20and%20Assurance%20Capstone%20Project%20(DDM1,%20LQT2)",
  aspects: [
    {
      name: "Timeline Form",
      grades: [
        {
          name: "Competent",
          text: [
            "A CAWA MSISCA Written Capstone Timeline Form that states the prospectus will be compconsted by <DATE> is aptly provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "Capstone Waiver Release Form",
      grades: [
        {
          name: "Competent",
          text: [
            "The submission includes a compconsted Capstone Waiver Release Form that is digitally signed and dated.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "A compconsted Timeline Form and Capstone Waiver Release Form are provided in the submission.",
          ],
        },
      ],
    },
  ],
};

const crdNHPTask1 = {
  name: "NHP1 Task 1",
  tsname: "NHP1 Task 1",
  crd: "",
  aspects: [
    {
      name: "A: Algorithm Selection",
      grades: [
        {
          name: "Competent",
          text: [
            "The [SELECTED ALGORITHM] is logically identified and can perform the task to meet all requirements.",
          ],
        },
      ],
    },
    {
      name: "B1: Logic Comments",
      grades: [
        {
          name: "Approaching/Not Evident",
          text: [
            "A brief description of [?] is provided in the submission. An overview using pseudocode with comments to explain the algorithm is not readily evident. Please provide an overview similar to the example in the Sample Core Algorithm Overview.docx file that is located in the Supporting Documents section of the task instructions.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission provides pseudocode and comments that accurately explain the logic applied to the solution.",
          ],
        },
      ],
    },
    {
      name: "B2: Application of Programming Models",
      grades: [
        {
          name: "Approaching/Not Evident",
          text: [
            "The submission appropriately identifies the Greedy Algorithm. A discussion that includes details to describe how the program exchanges data and of the host environment where the application runs is not readily evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission clearly describes the communication protocol used to exchange data with the CSV file and demonstrates the application of programming models in the provided code.",
          ],
        },
      ],
    },
    {
      name: "B3: Space-Time and Big-O",
      grades: [
        {
          name: "Competent",
          text: [
            "The work clearly states the overall time complexity is [ALGORITHM COMPEXITY] and provides space-time complexity analysis for all blocks of code.",
          ],
        },
      ],
    },
    {
      name: "B4: Adaptability",
      grades: [
        {
          name: "Competent",
          text: [
            "The work concisely describes that the number of packages on a truck is a key limitation, but, that the algorithm can scale within that limitation.",
          ],
        },
      ],
    },
    {
      name: "B5: Software Efficiency and Maintainability",
      grades: [
        {
          name: "Competent",
          text: [
            "An adequate description of the object-oriented approach is provided to support the stated assertion that the software is efficient and maintainable.",
          ],
        },
      ],
    },
    {
      name: "B6: Self-Adjusting Data Structures",
      grades: [
        {
          name: "Competent",
          text: [
            "An adequate description of the [DATA STRUCT TYPE] data structure used is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "C: Original Code",
      grades: [
        {
          name: "Competent",
          text: [
            "Original code is provided that clearly shows all packages are delivered on time with [NUM MILES] miles on all trucks.",
          ],
        },
      ],
    },
    {
      name: "C1: Identification Information",
      grades: [
        {
          name: "Approaching",
          text: [
            "The initial comment is appropriately provided on the first line of the file [FILE NAME]. The initial comment is not observed in the remaining Python files.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The submission appropriately includes the initial code comment on the first line of all files.",
          ],
        },
      ],
    },
    {
      name: "C2: Process and Flow Comments",
      grades: [
        {
          name: "Competent",
          text: [
            "Appropriate process and flow comments are provided to explain the role and actions of each block of code within the program.",
          ],
        },
      ],
    },
    {
      name: "D: Data Structure",
      grades: [{ name: "Competent", text: [""] }],
    },
    {
      name: "D1: Explanation of Data Structure",
      grades: [
        {
          name: "Competent",
          text: [
            "An adequate description of the [DATA STRUCT TYPE] data structure is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "E: Hash Table",
      grades: [
        {
          name: "Competent",
          text: [
            "A hash table with an insertion function is clearly present in the [CODE FILE NAME] file.",
          ],
        },
      ],
    },
    {
      name: "F: Look-Up Function",
      grades: [
        {
          name: "Competent",
          text: [
            "A look-up function named lookup_package that aligns with the given data elements and returns correct data is appropriately provided.",
          ],
        },
      ],
    },
    {
      name: "G: Interface",
      grades: [
        {
          name: "Not Evident",
          text: [
            "A program that clearly runs to compconstion without errors is provided. An interface to allow a user to input data to view the status of any package at any time is not readily evident.",
          ],
        },
      ],
    },
    {
      name: "G1: First Status Check",
      grades: [
        {
          name: "Not Evident",
          text: [
            "[WHAT] is clearly provided in the submission. A screenshot for the First Status Check is not readily evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A screenshot that clearly shows the status of all packages on each truck at [TIME] is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "G2: Second Status Check",
      grades: [
        {
          name: "Not Evident",
          text: [
            "[WHAT] is clearly provided in the submission. A screenshot for the Second Status Check is not readily evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A screenshot that clearly shows the status of all packages on each truck at [TIME] is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "G3: Third Status Check",
      grades: [
        {
          name: "Not Evident",
          text: [
            "[WHAT] is clearly provided in the submission. A screenshot for the Third Status Check is not readily evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            " A screenshot that clearly shows the status of all packages on each truck at [TIME] is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "H: Screenshots of Code Execution",
      grades: [
        {
          name: "Not Evident",
          text: [
            "[WHAT] is clearly provided in the submission. A screenshot to capture a compconste execution of the code is not readily evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A screenshot that clearly captures a compconste execution of the code is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "I1: Strengths of the Chosen Algorithm",
      grades: [
        {
          name: "Competent",
          text: [
            "Reasonable space-time complexity and incremental processing are logically described as the key advantages of the algorithm.",
          ],
        },
      ],
    },
    {
      name: "I2: Verification of Algorithm",
      grades: [
        {
          name: "Competent",
          text: [
            "The algorithm clearly shows all packages are delivered on time with [NUM MILES] miles on all trucks.",
          ],
        },
      ],
    },
    {
      name: "I3: Other Possible Algorithms",
      grades: [
        {
          name: "Competent",
          text: [
            "[ALGORITHM 1] and [ALGORITHM 2] are clearly identified as alternative algorithms.",
          ],
        },
      ],
    },
    {
      name: "I3a: Algorithm Differences",
      grades: [
        {
          name: "Competent",
          text: [
            "A discussion that juxtaposes [ALGORITHM 1] and [ALGORITHM 2] with the [SELECTED ALGORITHM] algorithm is provided in the submission.",
          ],
        },
      ],
    },
    {
      name: "J: Different Approach",
      grades: [
        {
          name: "Competent",
          text: [
            "The work logically describes the alternative approach of [DIFFERENT APPROACH].",
          ],
        },
      ],
    },
    {
      name: "K1: Verification of Data Structure",
      grades: [
        {
          name: "Competent",
          text: [
            "The algorithm clearly shows the total miles on all trucks to be [NUM MILES], all packages are delivered on time, and the hash table look-up function is present.",
          ],
        },
      ],
    },
    {
      name: "K1a: Efficiency",
      grades: [
        {
          name: "Approaching",
          text: [
            "The work clearly describes the space-time complexity of the data structure. A description of the efficiency that includes what type of data is being used and how that data is being used is not observed.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The description of the speed of the [DATA STRUCT] and the ability to minimize collisions suitably supports the data structure efficiency.",
          ],
        },
      ],
    },
    {
      name: "K1b: Overhead",
      grades: [
        {
          name: "Approaching",
          text: [
            "A description of how hashing by address impacts space complexity is provided. An explanation that addresses the computational time and bandwidth overhead when handling data is not readily evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The low processing time, minimal memory use, and minimal bandwidth use with the chosen approach are suitably explained.",
          ],
        },
      ],
    },
    {
      name: "K1c: Implications",
      grades: [
        {
          name: "Approaching",
          text: [
            "The work briefly notes that the size of the data structure will increase with more packages. A description that addresses the implications of increasing packages, trucks, and cities, including the idea of control when different or numerous sub-applications or subsystems are incorporated in the expansion, is not readily evident.",
          ],
        },
        {
          name: "Competent",
          text: [
            "Implications of scaling the application for increased packages, trucks, and cities are concisely described in the [ALGORITHM] analysis.",
          ],
        },
      ],
    },
    {
      name: "K2: Other Data Structures",
      grades: [
        {
          name: "Competent",
          text: [
            "[DATA STRUCT 1] and [DATA STRUCT 2] are appropriately identified as alternative data structures.",
          ],
        },
      ],
    },
    {
      name: "K2a: Data Structure Differences",
      grades: [
        {
          name: "Competent",
          text: [
            "An adequate comparative analysis of [DATA STRUCT 1], [DATA STRUCT 2], and the provided hash table is present.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The submission presents an algorithm that is clearly designed to provide an optimal route and delivery solution for the Western Governors University Parcel Service. The work provides a sound space-time complexity analysis, concise process and flow comments. All sections of the work are compconste and meet task requirements.",
          ],
        },
        {
          name: "Not Passing",
          text: [
            "An algorithm to provide a route and delivery solution for the Western Governors University Parcel Service (WGUPS) is clearly provided in the submission. The work provides adequate [1?], [2?], and [3?]. A pseudocode overview with comments and user interface are not readily evident; the screenshots for the status checks and compconste code execution could not be found; and descriptions for the data structure efficiency, overhead, and implications that aligns with the points outlined in the rubric are not observed.",
          ],
        },
      ],
    },
  ],
};

const crdEZP1Task1 = {
  name: "EZP1 Task 1", //CRD name as it appears in EMA
  tsname: "EZP Task 1", //CRD name as it appears in TaskStream
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C868%20Software%20Development%20Capstone%20(EZP1)",
  aspects: [
    {
      name: "A. TOPIC APPROVAL FORM",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The submission provides a summary of the proposed capstone project. A Topic Approval Form that is signed by a Course Instructor cannot be located.",
          ],
        },
        {
          name: "Competent",
          text: ["The Topic Approval Form is signed by a Course Instructor."],
        },
      ],
    },
    {
      name: "B. CAPSTONE RELEASE FORM",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The Capstone Release Form aspect will be assessed once a compconsted Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "A compconsted and digitally signed IT Capstone Waiver/Release Form that declares that the project is not based upon and does not include Restricted Information is provided.",
          ],
        },
      ],
    },
    {
      name: "C. HUMAN SUBJECTS FAQ QUIZ",
      grades: [
        { name: "Not Evident", text: [""] },
        {
          name: "Competent",
          text: [
            "A clear copy of the results from the successfully compconsted Human Subjects FAQ Quiz is presented.",
          ],
        },
      ],
    },
    {
      name: "D. IRB COMPLIANCE",
      grades: [
        {
          name: "Not Evident",
          text: [
            "The IRB Compliance aspect will be assessed once a compconsted Topic Approval Form is in place.",
          ],
        },
        {
          name: "Competent",
          text: [
            "The proposal complies with IRB standards for exemption status.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Passing",
          text: [
            "The Waivers, IRB Quiz and Compliance, as well as the Topic Approval form are all compconste and meet standards.",
          ],
        },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

const crdKYP2Task2 = {
  name: "KYP2 Task 2",
  tsname: "KYP2 Task 2",
  crd:
    "https://westerngovernorsuniversity.sharepoint.com/:f:/r/sites/ITTeamcopy/Shared%20Documents/B.%20CAPSTONES%20and%20PROGRAMMING/Capstones%20CRDs/C796%20Cybersecurity%20Graduate%20Capstone%20(KYP2)",
  aspects: [
    {
      name: "Program Outcome 1",
      grades: [
        {
          name: "Approaching",
          text: [
            "Inability to store Controlled Unclassified Information (CUI) and Controlled Defense Information (CDI) is presented as the primary problem which is fitting, a concise statement is provided for analysis of systems and/or processes which describes using laptops for principal investigators and reconfiguring a fileserver to be compliant to store CDI and CUI, and, a list of project requirements is present in the work. A logical discussion with adequate details to summarize the problem, its severity, solutions to the problem, expected results, and the goal and objectives which the project will accomplish are not observed. The root cause analysis of the problem is present with limited details. The audit details, problem statement, problem causes, business impacts, cost analysis, risk analysis are not evident in the analysis of systems and processes. The functional (end-user) requirements, detailed requirements, and existing gaps which a successful project will fill are not clear in the project requirements section.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 2",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission provides concise descriptions of the information technology infrastructure to ensure confidentiality, integrity, and availability; and notes that lack of awareness of cyberlaw, regulations, and compliance is a primary factor that causes the problem. An adequate description of the deliverables associated with the design and development of the technology solution is not observed; the strategy for the implementation, phases of the rollout with a timeline in chronological order, details of the go-live, project task dependencies, deliverables, and training plan for users are not evident in the strategy for implementing the solution and anticipated outcomes from the project; a quality assurance plan, including formative and summative evaluation plans, plans for revision, the justification for test cases and scenarios, acceptance criteria are not observed; an adequate assessment of risks associated with the implementation with a discussion of the quantitative and qualitative risks and the cost/benefit relationships related to the project is not evident; and the resources assigned to each task is not evident in the project timeline.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 3",
      grades: [
        {
          name: "Approaching",
          text: [
            "The technology environments, tools, human resources, and costs needed to execute each project phase are presented in a clear list in the submission. A logical discussion with adequate details for the points listed under the Technology Environment, Cost, & Resources section is not observed.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 4",
      grades: [
        {
          name: "Approaching",
          text: [
            "An adequate description of the post-implementation systems and process analysis is provided including a diagram of the ACME SSRE Network Topology. A post-implementation risk assessment is not evident in the documentation for the developed solution.",
          ],
        },
      ],
    },
    {
      name: "Program Outcome 5",
      grades: [
        {
          name: "Approaching",
          text: [
            "The submission provides a discussion describing the compliance logs that will be created to track the research organization’s responses to NIST controls which is fitting. The description of the data that needs to be collected to support the project is present with limited details.",
          ],
        },
      ],
    },
    {
      name: "Overall Comment",
      grades: [
        {
          name: "Not Passing",
          text: [
            "The submission presents a Cybersecurity Graduate Capstone Design and Development prospectus that thoroughly describes a security realignment project for ACME Research Group to upgrade the technology infrastructure to permit storage of Controlled Unclassified Information (CUI) and Controlled Defense Information (CDI). The submission provides a thorough description of the framework that will be used to assess the success of the technology solution and many salient points of the project. Some aspects are present with limited details. The Program Outcome 1, 2, 3, 4 and 5 aspects need further development to meet task requirements.",
          ],
        },
      ],
    },
  ],
};

//Template CRD Object
const crdXXXTaskX = {
  name: "CRDX Task X", //CRD name as it appears in EMA
  tsname: "CRD Task X", //CRD name as it appears in TaskStream
  aspects: [
    {
      name: "AspectName", //Repeat the aspect object for as many aspect as there on the page. AspectName is what appears on the context menu.
      grades: [
        //Repeat the grade object for as many (or few) grades as needed. "name" is what appears on the context menu.
        { name: "Not Evident", text: [""] }, //The text property for a grade is an array so you can have multiple text on the menu.
        { name: "Approaching", text: [""] }, //If you only have one text for a grade, I hook the text to the grade on the menu to save a an extra click.
        { name: "Competent", text: [""] },
      ],
    },
    //The sources aspects are define elsewhere and reused in multiple locations. Its worth it to mention this could be done
    //with other aspects, like PC, that are shared with multiple CRDs as well. There is a placeholder object for PC above, pcAspect,
    //it just needs to be fleshed out.
    {
      name: "Overall Comment",
      grades: [
        { name: "Passing", text: [""] },
        { name: "Not Passing", text: [""] },
      ],
    },
  ],
};

export const CRD = [
  crdBOMTask1,
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
  crdADETask1,
  crdAEE2Task3,
  crdAEE2Task2,
  crdAEE2Task1,
  crdKYP2Task2,
  crdKYP2Task1,
  crdMDP1Task1,
  sourcesAspectEMA,
  cIReferral,
];
