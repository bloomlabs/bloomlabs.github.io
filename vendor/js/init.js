(function($){
  $(function(){
  	$('.parallax').parallax();
    $('.button-collapse').sideNav();
    $('select').material_select();

    var options = [
        {selector: '#image-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
        {selector: '#image-test', offset: 100, callback: 'Materialize.fadeInImage("#image-test")' }
      ];
    Materialize.scrollFire(options);
  }); // end of document ready
})(jQuery); // end of jQuery name space