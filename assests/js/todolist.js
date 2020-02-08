// check off Specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//creating the Todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text
        var newTodo = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        if(newTodo!==""){
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
        }
        else{
            alert("Invalid Input");
        }
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})