
var $newTask = $("#new-task");
var $incompletedTasks = $("#incomplete-tasks");
var $completedTasks = $("#completed-tasks");
var $addButton = $("#add-button");

//LÄGG TILL NY
var makeNewListItem = function(taskToAdd) {

  var $newListItem = $("<li></li>");
  var $newCheckbox = $("<input type='checkbox' class='checkbox'>");
  var $newLabel = $("<label></label>");
  var $newEditInput = $("<input type='text' class='edit-text'>");
  var $newEditButton = $("<button id='edit-button'class='btn btn-outline-info'>Edit</button>");
  var $newDeleteButton = $("<button id='delete-button' class='btn btn-outline-danger'>Delete</button>");

  $newListItem.append($newCheckbox)
  .append($newLabel.html(taskToAdd))
  .append($newEditInput)
  .append($newEditButton)
  .append($newDeleteButton);

  return $newListItem;
}



// LÄGG TILL KNAPP
$addButton.on( "click", function(e){
  e.preventDefault();
  $('#new-task').each (function(){
    if ($.trim(this.value)== ""){
      alert ('Enter a task!');
    }else{
      var listItemToAdd = makeNewListItem($newTask.val());
      $incompletedTasks.append(listItemToAdd);
      $newTask.val("");
  }
})
 
  
})

//RADERA KNAPP

$incompletedTasks.on( "click", "#delete-button", function(){
  $(this).parent().remove();  
})


$completedTasks.on( "click", "#delete-button", function(){
  $(this).parent().remove();  
})

//ÄNDRA KNAPP
var editTask = function (list, input, label){
 
   if (list.hasClass("editMode")) {
     list.removeClass("editMode");
     label.text(input.val());
   } else {
     list.addClass("editMode");
     input.val(label.text());
   }
 }
 
//COMPLETE/INCOMPLETE
 $incompletedTasks.on( "click", "#edit-button", function(){
  
   var $list = $(this).parent();  
   var $input = $(this).prev();
   var $label = $input.prev();

   editTask($list, $input, $label);
 })
 
 
 $completedTasks.on( "click", "#edit-button", function(){
   var $list = $(this).parent();  
   var $input = $(this).prev();
   var $label = $input.prev();
   editTask($list, $input, $label);
 })

 //CHECKBOX

$incompletedTasks.on( "click", "input.checkbox", function(){

  var listItem = $(this).parent();

  $completedTasks.append(listItem);
 })
 

 $completedTasks.on( "click", "input.checkbox", function(){

  var listItem = $(this).parent();
 
  $incompletedTasks.append(listItem);
 })