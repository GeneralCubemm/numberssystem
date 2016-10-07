      
    $("#startCalc").on("click", function() {
    
     var m = $(".generalcube .infoclass-1").val(); //wartowść user insert
     var k = $(".generalcube .infoclass-2").val(); //wartowść user insert
     var x = $(".generalcube .infoclass-3").val(); //wartowść user insert
     
     m = m.replace(/szesnastkowy/g, '16');
     m = m.replace(/dziesiętny/g, '10');
     m = m.replace(/binarny/g, '2');
     
     k = k.replace(/szesnastkowy/g, '16');
     k = k.replace(/dziesiętny/g, '10');
     k = k.replace(/binarny/g, '2');
     
     if (
       m == null || m == "" ||
       k == null || k == "" ||
       x == null || x == ""
     ) {
       alert("uzupełnij wszystkie pola");
       return false;
     }
function isNaturalNumber ( stringToTest ) {
    var patternShape = /^(0|([1-9]\d*))$/;
    return patternShape.test( stringToTest );
}
        if(!isNaturalNumber(k)){
   alert("Systemy docelowy w liczbach naturalnych");
       return false;
}
        if(!isNaturalNumber(m)){
   alert("Systemy bazowy w liczbach naturalnych");
       return false;
}
        if(!isNaturalNumber(m)){
   alert("Systemy bazowy w liczbach naturalnych");
       return false;
}

function convertBase(value, from_number_system, to_number_system) {
    
  var new_value = '';
  var charsetArea = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz+/';
  var slitRange = charsetArea.split('');
  var from_range = charsetArea.slice(0, from_number_system);
  var to_range = charsetArea.slice(0, to_number_system);
  var dec_value = value.split('').reverse();
    
    // charset validation - if valid val given
    
  dec_value = dec_value.reduce(function (holdOn, symbol, iPower) {
      
    if (from_range.indexOf(symbol) === -1) {
        alert( 'Nie poprawny znak ' + symbol + ' dla systemu ' + from_number_system + ' proszę podać właściwy.' );
    }
    return holdOn += from_range.indexOf(symbol) * (Math.pow(from_number_system, iPower));
      
  }, 0);
  
    //finaly calc result
    
  while ( dec_value > 0 ) {
    new_value = to_range[dec_value % to_number_system] + new_value;
    dec_value = ( dec_value - (dec_value % to_number_system) ) / to_number_system;
  }
  return new_value || '0';
}

document.getElementById("final-sulution").value = convertBase( x, m, k );

});