document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  const windowHeight = window.innerHeight;
  
  for (let i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-index', i);
  }

  function activateSection(sectionIndex) {
    const section = sections[sectionIndex];
    const bgPosition = sectionIndex % 2 === 0 ? '0' : '50%';
    section.style.backgroundPositionX = bgPosition;
    section.classList.add('active');
  }

  function deactivateSection(sectionIndex) {
    const section = sections[sectionIndex];
    section.style.backgroundPositionX = '';
    section.classList.remove('active');
  }

  function updateActiveSection() {
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop - windowHeight / 2;
      const sectionHeight = section.offsetHeight;
      const sectionIndex = parseInt(section.getAttribute('data-index'));

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        activateSection(sectionIndex);
      } else {
        deactivateSection(sectionIndex);
      }
    }
  }

  window.addEventListener('scroll', function() {
    updateActiveSection();
  });
