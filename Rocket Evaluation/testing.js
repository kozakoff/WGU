const models = require("./lib/models");
const taskUtils = require("./lib/taskUtils");

var atask = "NHP1 Task 1";

// for (var i = 0; i < Models.CRD.length; i++) {
//   if (
//     task.indexOf(Models.CRD[i].name) > -1 ||
//     task.indexOf(Models.CRD[i].tsname) > -1
//   ) {
//     t = Models.CRD[i];
//     break;
//   }
// }

// function setCRDTask(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (atask.indexOf(arr[i].name) > -1 || atask.indexOf(arr[i].tsname) > -1) {
//       return arr[i];
//     }
//   }
// }

// let t = taskUtils.setCRDTask(atask, models.CRD);

let t = models.CRD.find((el) => el.name == "Sources");

console.log(t);
