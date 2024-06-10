var list=document.getElementById("list")
var input=document.getElementById("input");


function addItem(){
       var listitem=document.createElement("listitem")
      listitem.textContent=input.value
      ul.append(listitem)

}
function deleteItem(event){
             event.target.parentElement.remove()
}