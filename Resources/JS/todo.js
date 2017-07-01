//Check-off specific items by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete item
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//Adding an item
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //grabbing new text
        var toDoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoText + "</li>")
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})
    
