// expand content

const sectionHeaders = document.querySelectorAll('.section-header');

sectionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        const sectionContent = header.parentNode.querySelector('.section-content');
        sectionContent.classList.toggle('show');
        header.querySelector('.expand-button').classList.toggle('upside-down');
    })
})