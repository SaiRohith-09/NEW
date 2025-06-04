document.addEventListener('DOMContentLoaded', function() {
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

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          
            filterButtons.forEach(btn => btn.classList.remove('active'));
        
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    const videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.innerHTML = `
        <div class="video-modal-content">
            <span class="close-modal">&times;</span>
            <div class="video-container">
                <iframe id="embedded-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="video-info">
                <h3 id="video-modal-title"></h3>
                <p id="video-modal-description"></p>
            </div>
        </div>
    `;
    document.body.appendChild(videoModal);

    document.querySelectorAll('.video-thumbnail, .play-overlay, .view-btn').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            
            const portfolioItem = this.closest('.portfolio-item');
            const videoId = portfolioItem.querySelector('.view-btn').getAttribute('data-video-id');
            const title = portfolioItem.querySelector('.view-btn').getAttribute('data-title');
            const description = portfolioItem.querySelector('.view-btn').getAttribute('data-description');
     
            document.getElementById('embedded-video').src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            document.getElementById('video-modal-title').textContent = title;
            document.getElementById('video-modal-description').textContent = description;

            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });


    document.querySelector('.close-modal').addEventListener('click', function() {
        videoModal.classList.remove('active');
        document.getElementById('embedded-video').src = '';
        document.body.style.overflow = 'auto';
    });

 
    videoModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.getElementById('embedded-video').src = '';
            document.body.style.overflow = 'auto';
        }
    });

    filterButtons[0].click();
    document.addEventListener("DOMContentLoaded", () => {
        const videoItems = document.querySelectorAll(".portfolio-item");
        const lightbox = document.querySelector(".video-lightbox");
        const closeBtn = document.querySelector(".close-btn");
        const lightboxVideo = document.getElementById("lightbox-video");
    
        videoItems.forEach(item => {
            item.addEventListener("click", () => {
                const videoId = item.getAttribute("data-video-id"); 
                if (videoId) {
                    lightboxVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                    lightbox.classList.add("active");
                }
            });
        });
    
        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("active");
            lightboxVideo.src = "";
        });
    });
    
});