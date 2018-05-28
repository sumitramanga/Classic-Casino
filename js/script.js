(function() { // IIFE BEGINS
  $(document).ready(function() { // DOCUMENT.READY BEGINS

    var randomNum = Math.floor((Math.random() * 10) + 1);
    var el = document.getElementById('info');
    el.innerHTML = '<p id="number" class="number">' + randomNum + '</p>'

    $('#reveal').click(function(){
      $('#number').slideDown('slow');
      $('#number').addClass('numberShow');

    });
  }); // DOCUMENT.READY ENDS
}()); //IIFE ENDS
