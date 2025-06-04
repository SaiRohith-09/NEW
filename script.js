document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Sticky Header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Portfolio Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const videoItems = document.querySelectorAll('.video');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      videoItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Video Lightbox
  const viewButtons = document.querySelectorAll('.view-btn');
  const videoLightbox = document.querySelector('.video-lightbox');
  const closeLightbox = document.querySelector('.close-lightbox');
  const videoFrame = document.getElementById('portfolio-video');
  const videoTitle = document.getElementById('video-title');
  const videoDescription = document.getElementById('video-description');

  viewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const videoUrl = this.getAttribute('data-video');
      const itemTitle = this.parentElement.querySelector('h3').textContent;
      const itemCategory = this.parentElement.querySelector('.category').textContent;
      
      videoFrame.src = videoUrl;
      videoTitle.textContent = itemTitle;
      videoDescription.textContent = `Category: ${itemCategory}`;
      
      videoLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeLightbox.addEventListener('click', function() {
    videoLightbox.classList.remove('active');
    videoFrame.src = '';
    document.body.style.overflow = 'auto';
  });

  videoLightbox.addEventListener('click', function(e) {
    if (e.target === this) {
      videoLightbox.classList.remove('active');
      videoFrame.src = '';
      document.body.style.overflow = 'auto';
    }
  });

  // Initialize portfolio filter to show all items
  filterButtons[0].click();
});
