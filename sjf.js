// var num_of_processes = prompt("Enter number of processes");
const arrival_time = [];
const burst_time = [];
var num = 1;
function showProcessNumber(){
    var p = document.getElementById("processNumber");
    p.innerHTML = "Process " + num + ": " ;  
}

function getData(){
    var num_of_processes = document.getElementById("num_of_processes").textContent;
    
    arrival_time = document.getElementById("arrival_time").textContent;
    
    burst_time = document.getElementById("burst_time").textContent;

    return num_of_processes, arrival_time, burst_time;
}

function SJF(jobs, burstTime) {
    let n = jobs.length;
    let completionTime = Array(n).fill(0);
    let waitingTime = Array(n).fill(0);
    let turnaroundTime = Array(n).fill(0);
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (burstTime[j] > burstTime[j + 1]) {
          let temp = burstTime[j];
          burstTime[j] = burstTime[j + 1];
          burstTime[j + 1] = temp;
          temp = jobs[j];
          jobs[j] = jobs[j + 1];
          jobs[j + 1] = temp;
        }
      }
    }
  
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        completionTime[i] = burstTime[i];
      } else {
        completionTime[i] = completionTime[i - 1] + burstTime[i];
      }
    }
  
    for (let i = 0; i < n; i++) {
      waitingTime[i] = completionTime[i] - burstTime[i];
    }
  
    for (let i = 0; i < n; i++) {
      turnaroundTime[i] = completionTime[i] - jobs[i];
    }
  
    return jobs, burstTime, completionTime, waitingTime,turnaroundTime;
  }
  
  var jobs = [1, 2, 3, 4];
  var burstTime = [3, 4, 2, 4];
  var result = SJF(jobs, burstTime);
  console.log(result);

function showTable(){

    var Result = document.getElementById("Result");
    
    for (let index = 0; index < jobs.length; index++) {

        var row = document.createElement("tr");
        Result.appendChild(row);
        
        var node = document.createElement("td");
        var TextNode = document.createTextNode(jobs[index]);

        var node2 = document.createElement("td");
        var TextNode2 = document.createTextNode(burstTime[index]);

        row.appendChild(node);
        row.appendChild(node2);

        node.appendChild(TextNode);
        node2.appendChild(TextNode2);


    }

  }
