# Rocket Evaluation

Rocket Evaluation is a **Chrome extension** designed for use by the WGU Evaluation Faculty. Installing this extension will accelarte the evaluation processes by standardizing the available evaluation texts.

If you have suggestions or feedback, please feel free to email me. -Thanks

## Installation

The following steps will walk you through installing Rocket Evaluation:

**Install in Developer mode:**

1. Download the project files to your local machine
   ![image](https://user-images.githubusercontent.com/38021615/80907547-fa5f7b80-8ccc-11ea-8217-50906248112c.png)
1. Open **Google Chrome** and navigate to the **extensions tab**.
1. Once you are at the extenstions tab, ensure **Developer mode** is enabled

   ![image](https://user-images.githubusercontent.com/38021615/80907626-693cd480-8ccd-11ea-87ee-4cec1c0b91b8.png)

1. After enabling **Developer mode** you'll see a button to **Load unpacked**, click that and select the location that you saved this project to

   ![image](https://user-images.githubusercontent.com/38021615/80907656-95585580-8ccd-11ea-9a62-1ab51a783d9c.png)

**Install from Chrome Web Store:**

1. Visit the [Rocket Evaluation](https://chrome.google.com/webstore/detail/rocket-evaluation/nebfnljbhmienkjgobfdehfkjhikchof?hl=en-US) Chrome Web Store.
1. Click the **Add to Chrome** button
   ![image](https://user-images.githubusercontent.com/38021615/80907689-d2bce300-8ccd-11ea-8878-7e13fbbd6e1d.png)

## Adding to the project

This project uses [webpack](https://webpack.js.org/) which requires any changes you make to be rebuilt, follow this process to do so.

1. Fork this repo
1. Download the forked project locally
1. Navigate to the `Rocket Evaluation` directory
1. Run `npm install` to download the webpack dependencies
1. Delete the `dist` folder
1. Make desired changes
1. Build the project with webpack, `NODE_ENV='production' npm run build`
1. Delete `node_modules`
1. **Load Unpacked** from Chrome extensions tab
1. Create a pull request from your forked repo back to this one, be sure to include documentation about your changes.

_If you know some Javascript and would like to help build this project, email me and I will add you as a contributor._

## Need a CRD added?

To add CRDs for use in the extension:

1. Edit the file `lib/models.js`.
1. Near the bottom of the file is a template CRD object named `crdXXXTaskX` with pretty good comments explaining what to add.
1. Be sure to rebuild the project following the **Adding to the project** instructions after adding a **CRD**

_If you email me the CRDs you want, I will include them in this project._
