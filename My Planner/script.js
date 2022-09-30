let myPlanner = JSON.parse(Planner);

console.log(myPlanner);



function addTask() {
    return `
    <img src="${myPlanner.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${myPlanner.taskName}</h5>
      <p class="card-text">${myPlanner.description}</p>
      <p class="card-text">${myPlanner.importance}</p>
  </div>
  `;
}

console.log(addTask());



/*
for (let task in myPlanner) {
  document.getElementById("taskHere").innerHTML = task.addTask();
}
*/
