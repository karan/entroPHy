function showNext() {
  $('#hitit').text('...');
  $.get('/give/-1', function(data) {
    $("#loader").attr('src', data['url']);
    $("#showonph").data('ph', data['discussion_url']);
  });

  $("#loader").load(function() {
    $('#hitit').text('Next');
  });
}

function openLink() {
  console.log("open link clicked");
  console.log($("#showonph").data('ph'));
  window.open($("#showonph").data('ph'), '_blank');
}

showNext();
