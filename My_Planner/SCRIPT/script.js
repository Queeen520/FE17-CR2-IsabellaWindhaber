// parse from JSON file 
const myPlanner = JSON.parse(Planner);        

// output object
console.log(typeof myPlanner);        
console.table(myPlanner);      

const date = new Date();
console.log(date);


   
let myPlannerTask = document.querySelector(".card-group");
  
  for (let task of myPlanner) {
    myPlannerTask.innerHTML += `
    <div class="card card-group">
        <img class="card-img-top mt-2 px-3" src="./IMG/${task.image}" alt="${task.taskName}">
            <div class="card-body px-3 py-0">
                <h5 class="card-title">${task.taskName}</h5>
                <p class="card-text">${task.description}</p>
                <div class="card-footer">Oct. 2022</div>
                <div class="card-footer"><button onclick="changeColor()" type="button" class="btn btn-light">Importance Level ${task.importance}</button></div>
            </div>
        </div>
    `;
    let myButton = document.querySelectorAll(".btn btn-light");
    
    function changeColor() {
  
      if (task.importance < 5) 
      myButton.setAttribute("class", "btn btn-secondary");
    
      else if (task.importance > 5) {
      myButton.setAttribute("class", "btn btn-danger");
      }
    
      else {
      myButton.setAttribute("class", "btn btn-warning");
      }
    }
};



/*
let myButton = document.querySelectorAll(".btn");

    function changgeColor() {
  
      if (task.importance < 5) 
      myButton.setAttribute("class", "btn btn-secondary");
    
      else if (task.importance > 5) {
      myButton.setAttribute("class", "btn btn-danger");
      }
    
      else {
      myButton.setAttribute("class", "btn btn-warning");
      }
    };
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