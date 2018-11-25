$(document).ready(function(){
  $('form').on('submit',function(){

    var item = $('form input[name=todo]');
    var todo = {todo: item.val()};
    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function(data){
        location.reload();
      }
    });
    return false;
  });
  $('.todo-item').on('click',function(){

    var todo = $(this).text();
    alert("Delete \""+todo+"\"");
    
    var item = todo.replace(/ /g,'-');

    $.ajax({
      type: 'DELETE',
      url: '/todo/'+item,
      success: function(data) {
        console.log(data);
        location.reload();
      }
    });
    //return false;
  });
});
