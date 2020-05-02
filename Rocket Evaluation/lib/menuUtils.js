function createParentMenu(title, ctx, id) {
  return chrome.contextMenus.create({
    title: title,
    contexts: ctx,
    id: id,
  });
}

function createMenuForTask(task) {
  chrome.contextMenus.create({
    title: "Open CRD folder for " + task.name,
    contexts: ["all"],
    id: "crd",
  });
}

function createSubMenu(aspect, id, gradeArr, ctx) {
  for (let g = 0; g < aspect.grades.length; g++) {
    const grade = aspect.grades[g];
    const gid = "g" + id + g;
    let txt;
    if (grade.text.length == 1) {
      txt = grade.text[0];
      chrome.contextMenus.create({
        title: grade.name + ": " + txt,
        parentId: id,
        contexts: ctx,
        id: gid,
      });
      gradeArr.push({ title: txt, id: gid });
    } else {
      chrome.contextMenus.create({
        title: grade.name,
        parentId: id,
        contexts: ctx,
        id: gid,
      });
      for (let e = 0; e < grade.text.length; e++) {
        txt = grade.text[e];
        const eid = "t" + gid + e;
        chrome.contextMenus.create({
          title: txt,
          parentId: gid,
          contexts: ctx,
          id: eid,
        });
        gradeArr.push({ title: txt, id: eid });
      }
    }
  }
}

module.exports = {
  createParentMenu,
  createMenuForTask,
  createSubMenu,
};
