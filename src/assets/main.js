$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/mazi_mazur.json',
    dataType: 'jsonp',
    success:function(response){
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      var $course = $('<div />', {
         'class': 'course'
       }).appendTo($badges);

     $('<h3 />', {
       text: course.title
     }).appendTo($course);
    })

  }

});
