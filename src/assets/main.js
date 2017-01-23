$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/mazi_mazur.json',
    dataType: 'jsonp',
    success:function(response){
      $.each(response, function(index){
        $('#badges').appendTo('div').addClass('course');
      });
    }
  });

});
