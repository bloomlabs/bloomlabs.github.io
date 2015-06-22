(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('select').material_select();
    var options = [
    {selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
    {selector: '#staggered-test', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
    {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
    {selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")' }
  ];
  Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space