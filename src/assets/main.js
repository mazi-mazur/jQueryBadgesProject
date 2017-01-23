$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/mazi_mazur.json',
    dataType: 'jsonp',
    success:function(response){
      $.each(response.courses.completed, function(index){
        $('#badges').appendTo('div');
        $('#badges div').addClass('course')
      });
    }
  });

});
