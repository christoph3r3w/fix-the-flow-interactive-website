var abort = document.querySelector(".abort");
var formBtn = document.getElementById("submit");
let background = document.querySelector('.glass');
let pointer = document.getElementById('cursor');
const layDescribe = document.querySelector('section.layout-description');
const describeText = document.querySelectorAll('[description-text]');

if (formBtn) {
    var dialog = document.querySelector("dialog");
    formBtn.addEventListener('click', validateForm);

    function validateForm() {
        //check if all required fields are filled
        const requiredFields = document.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
            }
        });

        //if all required fields are filled, show the dialog
        if (isValid) {
            dialog.showModal(); //show the success dialog
        } else {
            alert('Please fill out all required fields.'); // Alert the user
        }
    }
    console.log('Function executed on this page.');
}

//mouse follow effect (for cursor)
if (background && pointer) {
    background.addEventListener('mouseenter', mouse);

    function mouse() {
        pointer.classList.add('follow');
        background.addEventListener('mousemove', (e) => {
            pointer.style.setProperty('--y', e.pageY);
            pointer.style.setProperty('--x', e.pageX);
        });
    }

    background.addEventListener('mouseleave', () => {
        pointer.classList.remove('follow');
    });
}



