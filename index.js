document.querySelector('form').addEventListener('submit',myToDo);
function myToDo(){
    event.preventDefault();
    var task=document.getElementById('task').value;
    var priority=document.getElementById('priority').value;
    console.log(task,priority);
    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    td1.innerText=task;
    var td2=document.createElement('td');
    td2.innerText=priority;
    if(priority=='High'){
        td2.style.backgroundColor='red';
    }
    else{
        td2.style.backgroundColor='green';
    }
    
    var td3=document.createElement('td');
    td3.innerText='Delete';
    td3.style.color='red';
    td3.addEventListener('click',deleteItem);
    tr.append(td1,td2,td3);
    document.querySelector('tbody').append(tr);
    
}
function deleteItem(){
    console.log(event.target);
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}