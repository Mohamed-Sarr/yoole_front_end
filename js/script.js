$(document).ready(function(){

    $("ul,li").on('click',function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

    $("div.carte").on('click',function(){
        $(this).addClass('active_2').siblings().removeClass('active_2');
    })

    $("#samaInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $(" .carte").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

});