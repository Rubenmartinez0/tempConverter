$(document).ready(function() {
    $("#celsius").on("input", function(){
        var kelvinValue = ($(this).val()*1+273.15);
        $("#kelvin").val(kelvinValue);

        var fahrenheitI = $(this).val()*1.8+32;
        $("#fahrenheit").val(fahrenheitI.toFixed(2));
    });

    $("#kelvin").on("input", function(){
        var celsiusValue = $(this).val()*1-273.15
        $("#celsius").val(celsiusValue.toFixed(2));

        var fahrenheitValue = $(this).val()*1.8-459.67;
        $("#fahrenheit").val(fahrenheitValue.toFixed(2));
    });

    $("#fahrenheit").on("input", function(){
        var celsiusValue = ($(this).val()*1-32)*(5/9);
        $("#celsius").val(celsiusValue.toFixed(2));

        var kelvinValue = ($(this).val()*1+459.67)*(5/9);
        $("#kelvin").val(kelvinValue.toFixed(2));
    });
    
    // Reset to placeholders when an input has now value.
    $("#celsius, #kelvin, #fahrenheit").on("input", function(){
        if($(this).val() === ''){
            $("#celsius, #kelvin, #fahrenheit").val('');
        }
    });
});