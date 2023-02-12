var jobs = [1, 2, 3, 4];
var burstTime = [3, 4, 2, 4];
var show = null;
var n = jobs.length;
var completionTime = Array(n).fill(0);
var waitingTime = Array(n).fill(0);
var turnaroundTime = Array(n).fill(0);


function SJF(jobs, burstTime) {
  
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (burstTime[j] > burstTime[j + 1]) {
          var temp = burstTime[j];
          burstTime[j] = burstTime[j + 1];
          burstTime[j + 1] = temp;
          temp = jobs[j];
          jobs[j] = jobs[j + 1];
          jobs[j + 1] = temp;
        }
      }
    }
  
    for (var i = 0; i < n; i++) {
      if (i === 0) {
        completionTime[i] = burstTime[i];
      } else {
        completionTime[i] = completionTime[i - 1] + burstTime[i];
      }
    }
  
    for (var i = 0; i < n; i++) {
      waitingTime[i] = completionTime[i] - burstTime[i];
    }
  
    for (var i = 0; i < n; i++) {
      turnaroundTime[i] = completionTime[i] - jobs[i];
    }
  
    return jobs, burstTime, completionTime, waitingTime,turnaroundTime;
  }
  

  
  
function showTable(){
    SJF(jobs, burstTime);

  var h2 = document.getElementById("h2");
  var table = document.getElementById("Result");
  var button = document.getElementById("show");

if(show == null){
  
  for (var index = 0; index < jobs.length; index++) {
    
    var row = document.createElement("tr");
    table.appendChild(row);
    
    var column1 = document.createElement("td");
    var TextNode = document.createTextNode(jobs[index]);

    var column2 = document.createElement("td");
    var TextNode2 = document.createTextNode(burstTime[index]);

    var column3 = document.createElement("td");
    var TextNode3 = document.createTextNode(completionTime[index]);
    
    var column4 = document.createElement("td");
    var TextNode4 = document.createTextNode(turnaroundTime[index]);

   var column5 = document.createElement("td");
   var TextNode5 = document.createTextNode(waitingTime[index]);   
   
   var column6 = document.createElement("td");
   var TextNode6 = document.createTextNode(Response[index]);

  
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column5);
  row.appendChild(column6);
  
  column1.appendChild(TextNode);
  column2.appendChild(TextNode2);
  column3.appendChild(TextNode3);
  column4.appendChild(TextNode4);
  column5.appendChild(TextNode5);
  column6.appendChild(TextNode6);
    

    
  }
  h2.style.visibility = "visible";
  table.style.visibility = "visible";
  
  button.textContent = "hide";
  show = false;
}
else if(show){
  h2.style.visibility = "visible";
  table.style.visibility = "visible";
  button.textContent = "hide";
  show = false;
}
else{
  h2.style.visibility = "hidden";
  table.style.visibility = "hidden";
  button.textContent = "show";
  show = true;
}

}
