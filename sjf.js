var num_of_processes = prompt("Enter number of processes");

function showProcessNumber(){
    var p = document.getElementById("processNumber");
    p.innerHTML = "Process " + num + ": " ;  
}

function getData(){
    var num_of_processes = document.getElementById("num_of_processes").textContent;
    
    var arrival_time = document.getElementById("arrival_time").textContent;
    
    var burst_time = document.getElementById("burst_time").textContent;

    return num_of_processes, arrival_time, burst_time;
}


