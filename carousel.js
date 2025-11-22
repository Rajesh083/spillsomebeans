class TestimonialsCarousel {
  constructor() {
    this.track = document.querySelector('.carousel-track');
    this.carouselContainer = document.querySelector('.carousel');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.indicatorsContainer = document.querySelector('.carousel-indicators');
    
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 6000; // 6 seconds
    
    this.init();
  }

  init() {
    this.renderTestimonials();
    this.renderIndicators();
    this.attachEventListeners();
    this.startAutoPlay();
    this.updateCarousel();
  }

  renderTestimonials() {
    this.track.innerHTML = '';
    testimonials.forEach((testimonial, index) => {
      const card = this.createTestimonialCard(testimonial, index);
      this.track.appendChild(card);
    });
  }

  createTestimonialCard(testimonial, index) {
    const card = document.createElement('article');
    card.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
    card.setAttribute('role', 'tabpanel');
    card.setAttribute('aria-roledescription', 'slide');
    card.setAttribute('aria-label', `Testimonial ${index + 1} of ${testimonials.length}`);
    
    const starsHTML = this.renderStars(testimonial.rating);
    
    card.innerHTML = `
      <div class="stars" aria-label="Rating: ${testimonial.rating} out of 5 stars">
        ${starsHTML}
      </div>
      <blockquote class="testimonial-quote">${this.escapeHtml(testimonial.quote)}</blockquote>
      <cite class="testimonial-author">${this.escapeHtml(testimonial.name)}</cite>
    `;
    
    return card;
  }

  renderStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;
      starsHTML += `<span class="star ${isFilled ? '' : 'empty'}" aria-hidden="true">★</span>`;
    }
    return starsHTML;
  }

  renderIndicators() {
    this.indicatorsContainer.innerHTML = '';
    testimonials.forEach((_, index) => {
      const button = document.createElement('button');
      button.className = `indicator ${index === 0 ? 'active' : ''}`;
      button.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
      button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      button.setAttribute('role', 'tab');
      button.addEventListener('click', () => this.goToSlide(index));
      button.addEventListener('keydown', (e) => this.handleIndicatorKeydown(e, index));
      this.indicatorsContainer.appendChild(button);
    });
  }

  attachEventListeners() {
    this.prevBtn.addEventListener('click', () => this.previousSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    
    this.prevBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.previousSlide();
      }
    });

    this.nextBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.nextSlide();
      }
    });

    // Pause on hover/focus
    this.carouselContainer.addEventListener('mouseenter', () => this.pauseAutoPlay());
    this.carouselContainer.addEventListener('mouseleave', () => this.startAutoPlay());
    this.carouselContainer.addEventListener('focusin', () => this.pauseAutoPlay());
    this.carouselContainer.addEventListener('focusout', () => this.startAutoPlay());

    // Keyboard navigation
    this.carouselContainer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.previousSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.nextSlide();
      }
    });
  }

  handleIndicatorKeydown(e, index) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.goToSlide(index);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % testimonials.length;
      this.goToSlide(nextIndex);
      document.querySelectorAll('.indicator')[nextIndex].focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + testimonials.length) % testimonials.length;
      this.goToSlide(prevIndex);
      document.querySelectorAll('.indicator')[prevIndex].focus();
    }
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + testimonials.length) % testimonials.length;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % testimonials.length;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  updateCarousel() {
    // Update cards visibility
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
      card.classList.remove('active', 'prev', 'next');
      if (index === this.currentIndex) {
        card.classList.add('active');
      } else if (index < this.currentIndex) {
        card.classList.add('prev');
      } else {
        card.classList.add('next');
      }
    });

    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      const isActive = index === this.currentIndex;
      indicator.classList.toggle('active', isActive);
      indicator.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update ARIA live region announcement
    const currentTestimonial = testimonials[this.currentIndex];
    const announcement = `Showing testimonial ${this.currentIndex + 1} of ${testimonials.length}. ${currentTestimonial.name} says: ${currentTestimonial.quote}`;
    this.announceToScreenReaders(announcement);
  }

  announceToScreenReaders(message) {
    const announcement = document.querySelector('[aria-live="polite"]') || this.carouselContainer;
    if (announcement) {
      announcement.textContent = message;
    }
  }

  startAutoPlay() {
    if (this.autoPlayInterval) return;
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resetAutoPlay() {
    this.pauseAutoPlay();
    this.startAutoPlay();
  }

  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}

class NewsSection {
  constructor() {
    this.newsList = document.querySelector('.news-list');
    this.init();
  }

  init() {
    this.renderNews();
  }

  renderNews() {
    this.newsList.innerHTML = '';
    newsItems.forEach((item, index) => {
      const newsCard = this.createNewsCard(item);
      this.newsList.appendChild(newsCard);
    });
  }

  createNewsCard(item) {
    const li = document.createElement('li');
    li.setAttribute('role', 'listitem');
    
    const card = document.createElement('article');
    card.className = 'news-card';
    
    const formattedDate = this.formatDate(item.date);
    
    card.innerHTML = `
      <div class="news-date" aria-label="Published on ${formattedDate}">${formattedDate}</div>
      <span class="news-category">${this.escapeHtml(item.category)}</span>
      <h3 class="news-title">
        <a href="#news-item-${item.id}" title="Read full article about ${this.escapeHtml(item.title)}">${this.escapeHtml(item.title)}</a>
      </h3>
      <p class="news-summary">${this.escapeHtml(item.summary)}</p>
      <a href="#news-item-${item.id}" class="news-read-more">Read More →</a>
    `;
    
    li.appendChild(card);
    return li;
  }

  formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new TestimonialsCarousel();
  new NewsSection();
});
