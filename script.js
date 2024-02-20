// expand content

const sectionHeaders = document.querySelectorAll('.section-header');



sectionHeaders.forEach((header) => {
    const sectionContent = header.parentNode.querySelector('.section-content');
    sectionContent.classList.toggle('show');
    
    header.addEventListener('click', () => {
        const sectionContent = header.parentNode.querySelector('.section-content');
        sectionContent.classList.toggle('show');
        header.querySelector('.expand-button').classList.toggle('upside-down');
    })
})

// submit and cancel button

const registrationForm = document.querySelector('#registration-form');
const cancelButton = document.querySelector('#cancel-button');
const submitButton = document.querySelector('#submit-button');

cancelButton.addEventListener('click', () => {
    registrationForm.reset();
    alert('Form reset!')
})

submitButton.addEventListener('click', () => {
    alert('Submitted!')
})