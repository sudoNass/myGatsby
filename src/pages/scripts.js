document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    for (let i = 0; i < sections.length; i++) {
        sections[i].setAttribute('data-index', i);
    }

    window.addEventListener('scroll', function() {
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop - window.innerHeight / 2;
            const sectionIndex = parseInt(section.getAttribute('data-index'));

            if (window.scrollY >= sectionTop) {
                const bgPosition = sectionIndex % 2 === 0 ? '0' : '50%';

                section.style.backgroundPositionX = bgPosition;
            }
        }
    });
});
