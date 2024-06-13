document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
});

// time line

$(document).ready(function() {
    $('.process-step').on('click', function() {
        // Define the container and the element to scroll to
        var container = $('.process-wrapper'),
            scrollTo = $(this);

        // Calculate the position to scroll to
        var scrollPosition = scrollTo.offset().left - container.offset().left + container.scrollLeft();

        // Animate the scroll
        container.animate({
            scrollLeft: scrollPosition
        }, 1000);  // Duration of the animation in milliseconds
    });
});




function filterCourses(category, element) {
  const courses = document.querySelectorAll('.course-card');
  courses.forEach(course => {
    if (course.classList.contains(category)) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });

  const buttons = document.querySelectorAll('.category-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  element.classList.add('active');
}
