var n = 4;
var jobs = [1,2,3,4];
var burstTime = Array(n).fill(0);
var arrivalTime = Array(n).fill(0);
var show = null;
var completionTime = Array(n).fill(0);
var waitingTime = Array(n).fill(0);
var turnaroundTime = Array(n).fill(0);
var Response_Time = Array(n).fill(0);
var num = 0;


function showProcessNumber(){
  var p = document.getElementById("processNumber");

  if(num+2 <= n){
    p.innerHTML = "Process " + (num+2) + ": " ;
  }
}

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
      Response_Time[i] = completionTime[i] - waitingTime[i];
    }
    
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
    var TextNode2 = document.createTextNode(arrivalTime[index]);

    var column3 = document.createElement("td");
    var TextNode3 = document.createTextNode(burstTime[index]);

    var column4 = document.createElement("td");
    var TextNode4 = document.createTextNode(completionTime[index]);
    
    var column5 = document.createElement("td");
    var TextNode5 = document.createTextNode(turnaroundTime[index]);

   var column6 = document.createElement("td");
   var TextNode6 = document.createTextNode(waitingTime[index]);   
   
   var column7= document.createElement("td");
   var TextNode7 = document.createTextNode(Response_Time[index]);

  
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column5);
  row.appendChild(column6);
  row.appendChild(column7);
  
  column1.appendChild(TextNode);
  column2.appendChild(TextNode2);
  column3.appendChild(TextNode3);
  column4.appendChild(TextNode4);
  column5.appendChild(TextNode5);
  column6.appendChild(TextNode6);
  column7.appendChild(TextNode7);    

    
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

function getBurstTime(){
  var burst_text = document.getElementById("burst_time");
  var burst_value = parseInt(burst_text.value);
  burst_text.value = "";

  return burst_value;
}

function getArrivalTime(){
  var arrival_text = document.getElementById("arrival_time");
  var arrival_value = parseInt(arrival_text.value);
  arrival_text.value = "";

  return arrival_value;
}

function showInput(){
  num = 0;
  document.getElementById("input_menu").style.display = "initial";
}

function getInput(){
  if(num < n){
    showProcessNumber();
    arrivalTime[num] = getArrivalTime();
    burstTime[num] = getBurstTime(); 
    console.log(num);
    num++;

    if(num == n){

      document.getElementById("input_menu").style.display = "none";

      document.getElementById("show").style.display = "initial";

      alert("Input Entered\n Click Calculate Button");

    }
  }
}
