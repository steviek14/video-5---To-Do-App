let id = 0;

//To add new tasks - once created it will add the task in the table with its start/end date and the task input and the option to delete the task 
document.getElementById("add").addEventListener('click', () =>{
   //what we want to happen once the task button is clicked 
    let createDate = new Date();
    //reference to table for logging tasks 
    let table = document.getElementById('list')
    //create new row in the table once input is added 
    let row = table.insertRow(1);
    //each row will gets its own id 
    row.setAttribute('id', `item-${id}`)
    //set the value of the first cell - Task - this is in the task row in the table - we grab the input that will go inside by its id and then its value 
    row.insertCell(0).innerHTML = document.getElementById('new-task').value 
    //second value for date created row in table - the year, month and full date 
    row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth()+ 1}-${createDate.getDate()}`; 
    //third value for start date 
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    //fourth value for end date 
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    //actions button 
    let actions = row.insertCell(4);
    //append a button this the actions cell - take a function and pass in the id it will delete -- see above the let id = 0 it will ++ each time the next to-do is created 
    actions.appendChild(createDeleteButton(id++));
    //sets task input to blank for good user experience 
    document.getElementById('new-task').value = ''
})
//function to delete: 
//this function creates a button 
//binds a method to the button (onclick)    
    //when it is clicked to will delete the row that the button is assigned to (since each new row will have its own delete button and ID)
    //once method is called - it returns the button to appendChild to our 5th cell "Actions"
function createDeleteButton(id){
    let btn = document.createElement('button'); //creating the delete button 
    btn.className = "btn btn-primary"; //styling the button
    btn.id = id; //the buttons id will equal the current id which is zero 
    btn.innerHTML = 'Delete'; //the inner text will say delete 
   //adding an eventlistener function to the button 
    btn.onclick = () => {
        console.log(`Deleting row with id: test-${id}`); //log out the row we will delete 
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete); //find the parent of the element we want to delete -> call the remove child method and pass in the elementToDelete 

    };
    return btn; 
}
