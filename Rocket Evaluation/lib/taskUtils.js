function setCRDTask(task, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (task == arr[i].name || task == arr[i].tsname) {
      return arr[i];
    }
  }
}

module.exports = { setCRDTask };
