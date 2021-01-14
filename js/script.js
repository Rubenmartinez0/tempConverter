$(document).ready(function() {
    $("#celsiusI").on("input", function(){

        $("#kelvinI").val($(this).val()*1+273);
        $("#fahrenheitI").val($(this).val()*1.8+32);

        if($(this).val() === ''){
            $("#kelvinI").val('');
            $("#fahrenheitI").val('$');
        }
    });

});