function showNext() {
  $('#hitit').text('...');
  $.get('/give/-1', function(data) {
    $("#loader").attr('src', data['url']);
    $("#showonph").data('ph', data['discussion_url']);
  });

  $("#loader").load(function() {
    $('#hitit').text('Next (N)');
  });
}

function openLink() {
  console.log($("#showonph").data('ph'));
  window.open($("#showonph").data('ph'), '_blank');
}

(function() {
  showNext();

  $(document).keypress(function(e) {
    if (e.which == 110 || e.keyCode == 110 || window.event.keyCode == 110) {
      showNext();
    } else if (e.which == 115 || e.keyCode == 115 || window.event.keyCode == 115) {
      openLink();
    }
  });
})();
