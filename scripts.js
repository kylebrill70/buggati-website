document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');

  ctaButton.addEventListener('mouseover', function() {
      this.classList.add('pulse');
  });

  ctaButton.addEventListener('mouseout', function() {
      this.classList.remove('pulse');
  });
});