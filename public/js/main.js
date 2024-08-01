document.addEventListener("DOMContentLoaded", function() {
    const scrollIcon = document.getElementById("scroll-icon");
    const nextSection = document.getElementById("about");
  
    if (scrollIcon && nextSection) {
      scrollIcon.addEventListener("click", function() {
        nextSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    if (dropdownToggle && dropdownContent) {
      dropdownToggle.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('hidden');
        event.stopPropagation();
      });
  
      document.addEventListener('click', function(event) {
        if (!dropdownContent.contains(event.target) && !dropdownToggle.contains(event.target)) {
          dropdownContent.classList.add('hidden');
        }
      });
    }
  
    setTimeout(() => {
      const messageElement = document.getElementById('message');
      if (messageElement) {
        messageElement.style.display = 'none';
      }
    }, 5000);
  });
  