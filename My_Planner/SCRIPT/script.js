// parse from JSON file 
const myPlanner = JSON.parse(Planner);        

// output objecgr
console.log(typeof myPlanner);        
console.table(myPlanner);      

const date = new Date();
console.log(date);


// to have 3 columns in the HTML file i wrote it like this. i think its not the best way but anything else i tried didn't work ...
for (task in myPlanner) {                   
  if (task <= 2) {
  document.getElementById("taskhere1").innerHTML += `
  <div class="task-card-body">
  <div class="card-title card-title-style"> <button type="button" class="btn btn-info btn-task">Task</button> 
  <span class="iconspan"><i class="bi bi-bookmark"></i> <i class="bi bi-three-dots-vertical"></i></span></div>    <img src="FE17-CR2-IsabellaWindhaber/My_Planner/IMG/${myPlanner[0].image} class="card-img-top" width="100%" height="1.5cm" alt="task">
    <div class="card-body text-center">
    <h5 class="card-title">${myPlanner[task].taskName}</h5>
    <p class="card-text card-text-style">${myPlanner[task].description}</p>
    </div>
  <div class="card-footer">
  <span class="prior">Priority Level: <button type="button" class="btn btn-light">${myPlanner[task].importance}</button></span>
  <p> <i class="bi bi-calendar-date"> </i> Deadline: ${date}</p>
  </div>
  <div class="btn-box">
    "<button type="button" id="left-btn" class="btn btn-success"><i class="bi bi-check-square"></i> </i> DONE</button>
    <button type="button" class="btn btn-danger right-btn"><i class="bi bi-trash"> </i> DELETE</button>
  </div>
  </div>
  `;
}
else if (task <= 5) {
  document.getElementById("taskhere2").innerHTML += `
  <div class="task-card-body">
  <div class="card-title card-title-style"> <button type="button" class="btn btn-info btn-task">Task</button> 
  <span class="iconspan"><i class="bi bi-bookmark"></i> <i class="bi bi-three-dots-vertical"></i></span></div>    <img src="FE17-CR2-IsabellaWindhaber/My_Planner/IMG/${myPlanner[0].image} class="card-img-top" width="100%" height="1.5cm" alt="task">
    <div class="card-body text-center">
    <h5 class="card-title">${myPlanner[task].taskName}</h5>
    <p class="card-text card-text-style">${myPlanner[task].description}</p>
    </div>
  <div class="card-footer">
  <span class="prior">Priority Level: <button type="button" class="btn btn-light">${myPlanner[task].importance}</button></span>
  <p> <i class="bi bi-calendar-date"> </i> Deadline: ${date}</p>
  </div>
  <div class="btn-box">
  <button type="button" id="left-btn" class="btn btn-success"><i class="bi bi-check-square"> </i> DONE</button>
  <button type="button" class="btn btn-danger right-btn"><i class="bi bi-trash"> </i> DELETE</button>
  </div>
  </div>
  `;
}
else {
  document.getElementById("taskhere3").innerHTML += `
  <div class="task-card-body">
  <div class="card-title card-title-style"> <button type="button" class="btn btn-info btn-task">Task</button> 
  <span class="iconspan"><i class="bi bi-bookmark"></i> <i class="bi bi-three-dots-vertical"></i></span></div>                      
  <div class="img"><img src="FE17-CR2-IsabellaWindhaber/My_Planner/IMG/${myPlanner[0].image} class="card-img-top" width="100%" height="1.5cm" alt="task"></div> 
    <div class="card-body text-center">
    <h5 class="card-title">${myPlanner[task].taskName}</h5>
    <p class="card-text card-text-style">${myPlanner[task].description}</p>
    </div>
  <div class="card-footer">
  <span class="prior">Priority Level: <button type="button" class="btn btn-light">${myPlanner[task].importance}</button></span>
  <p> <i class="bi bi-calendar-date"> </i> Deadline: ${date}</p>
  </div>
  <div class="btn-box">
  <button type="button" id="left-btn" class="btn btn-success"><i class="bi bi-check-square"></i>> </i> DONE</button>
  <button type="button" class="btn btn-danger right-btn"><i class="bi bi-trash"> </i> DELETE</button>
  </div>
  </div>
  `;
}
}

/*

let myButton = document.getElementsByClassName("btn btn-light")[0];

function changgeColor() {
  document.getElementsByClassName("btn btn-light")[0].setAttribute("class");
  
  if (myPlanner[task].importance < 5) {
    myButton.setAttribute("class", "btn btn-secondary");
    else if (myPlanner[task].importance > 5) {
      myButton.setAttribute("class", "btn btn-danger");
    }
    else {
      myButton.setAttribute("class", "btn btn-warning")
    }

  }
}

*/

/*
document.getElementById("btn-sort").onclick = sortByImportanceValue;

function sortByImportanceValue() {
  myPlanner.sort();
  console.table(myPlanner);
};
*/



/*
document.getElementById("btn-sort").addEventListener = function () {
  myPlanner[task].importance++;
  document.getElementsByClassName("prior")[0].innerHTML = myPlanner[tasks].importance;
}


function importanceAdd (index) {
  myPlanner[index].importance++;

  document.getElementsByClassName("prior")[0].innerHTML = myPlanner[index].importanceAdd;
}


let sortButton = document.getElementById("btn-sort");

for(let i = 0; i < sortButton.length ; i++) {
  sortButton.addEventListener("click", function () {
    importanceAdd(i);
  })
}
*/




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