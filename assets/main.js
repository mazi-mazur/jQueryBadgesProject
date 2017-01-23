$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/mazi_mazur.json',
    dataType: 'jsonp',
    success:function(response){
      console.log('response', response.courses.completed);
      addCourses(response.courses.completed);
    }
  });
  function addCourses(courses) {
    var $badges = $('#badges');
    courses.forEach(function(course){
      $('<div></div>', {
         'class': 'course'
       }).appendTo($badges);
    })

  }

});
