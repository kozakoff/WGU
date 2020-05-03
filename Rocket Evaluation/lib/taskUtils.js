export function setCRDTask(task, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (task.includes(arr[i].name) || task.includes(arr[i].tsname)) {
      return arr[i];
    }
  }
}
