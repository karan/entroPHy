function showNext() {
  $('#hitit').text('...');
  $.get('/give/-1', function(data) {
    console.log(data);
    $('#loader').load(data['url'], function(){
      $('#hitit').text('Next');
    });
  });
};

(function() {

  
});
