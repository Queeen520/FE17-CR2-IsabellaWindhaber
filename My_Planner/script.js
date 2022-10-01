let myPlanner = JSON.parse(Planner);

console.log(typeof myPlanner);
console.table(myPlanner);

var mytask = document.getElementById("taskhere");


for (task of myPlanner) {
  console.log(task);
  mytask.innerHTML += `
  <div class="col mydivclass">
    <img src="/FE17-CR2-IsabellaWindhaber/My Planner/${myPlanner.image} class="card-img-top" width="100%" alt="task">
    <div class="card-body">
    <h5 class="card-title">${myPlanner.taskName}</h5>
    <p class="card-text">${myPlanner.description}</p>
    </div>
  <div class="card-footer">
    <small class="text-muted">Priority Level: <button type="button" class="btn-importance btn btn-dark">${myPlanner.importance}</button></small>
  </div>
  <div>
    <button type="button" class="btn btn-success left-btn">green DONE</button>
    <button type="button" class="btn btn-danger right-btn">red DELETE</button>
  </div>
  </div>
  `;
}

document.getElementsByClassName("btn")[0].addEventListener = function () {
  myPlanner[0].importance++;
  document.getElementsByClassName("btn-importance")[0].innerHTML = myPlanner[0].importance;
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