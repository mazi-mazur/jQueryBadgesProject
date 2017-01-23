$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/mazi_mazur.json',
    dataType: 'jsonp',
    success:function(response){
      $.each(response, function(course, i) {
        var aCourse = $('<div></div>');
        $('#badges').appendTo(aCourse);
        $('#badges div').addClass('course');
      });
      });
    }
  });

});
