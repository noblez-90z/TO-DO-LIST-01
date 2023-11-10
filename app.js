const inputbx = document.querySelector('#inputbx');
const list = document.querySelector('#list');
inputbx.addEventListener('keyup',function(event){
    if(event.key == "Enter"){
        additem(this.value)
        this.value = "";
        
    }
}) 
const additem = function(inputbx){
    let listitem = document.createElement('li');
    listitem.innerHTML = `${inputbx}<i></i>`;
    


    listitem.addEventListener('click',function(){
        this.classList.toggle('done');
        
    })
    
    listitem.querySelector("i").addEventListener('click', function(){
        listitem.remove();
        saveData();
    })

    list.appendChild(listitem);
    
}
// function saveData(){
//     localStorage.setItem("data", list.innerHTML);
// }
// function showlist(){
//     list.innerHTML = localStorage.getItem("data");
// }
// showlist();