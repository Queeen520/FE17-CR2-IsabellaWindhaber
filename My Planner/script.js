let myPlanner = JSON.parse(Planner);

console.table(myPlanner);

for (let task of myPlanner) {

  document.getElementById("taskHere").innerHTML += `
  
  <div class="mydivclass">
  <p>${myPlanner.taskName}</p>
  <div><img src="MyPlanner/IMG/${myPlanner.image} width="100%"</div
  <p>${myPlanner.description}</p>
  <p>${myPlanner.importance}</p>
  </div>
  `;
}


/* 

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

*/

