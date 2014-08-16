function showNext() {
  console.log("clicked");
  $.get('/give/-1', function(data) {
    console.log(data);
    $("#loader").attr('src', data['redirect_url'])
  });
};

(function() {

  
});
