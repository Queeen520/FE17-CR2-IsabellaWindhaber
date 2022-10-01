let myPlanner = JSON.parse(Planner);

console.log(typeof myPlanner);
console.table(myPlanner);

var mytask = document.getElementsByClassName("mydiv")[0];


for (task in myPlanner) {
  mytask.innerHTML = `
  <div class="mydivclass">
  <img src="MyPlanner/IMG/${myPlanner[0].image} class="card-img-top" width="100%" alt="task">
  <div class="card-body">
    <h5 class="card-title">${myPlanner[0].taskName}</h5>
    <p class="card-text">${myPlanner[0].description}</p>
  </div>
  <div class="card-footer">
    <small class="text-muted"><p>${myPlanner[0].importance}</p></small>
  </div>
  `;
}









/* 
function addTask() {
mytask.innerHTML += `
<div class="mydivclass">
<div><img src="MyPlanner/IMG/${myPlanner.image} class="card-img-top" width="100%" alt="task"></div
<div class="card-body">
<h5>${myPlanner.taskName}</h5>
<p>${myPlanner.description}</p>
</div>
<div class="card-footer mycardfooter">
<small class="text-muted">${myPlanner.importance}</small>
</div>
`;
}
*/

/* 

function addTask() {

  document.getElementById("div1").innerHTML += `
  <div class="mydivclass">
  <img src="/MyPlanner/IMG/${myPlanner.image} class="card-img-top" width="100%" alt="task">
  <div class="card-body">
    <h5 class="card-title">${myPlanner.taskName}</h5>
    <p class="card-text">${myPlanner.description}</p>
  </div>
  <div class="card-footer">
    <small class="text-muted"><p>${myPlanner.importance}</p></small>
  </div>
  `;
}

*/