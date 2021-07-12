var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var buttons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

function ModalAppear() {
    backdrop.style.display = 'block';
    // modal.style.display = 'block';
    modal.style.opacity = '1';
    modal.style.transform = 'translateY(0)';
    modal.style.transition = 'opacity 500ms, transform 500ms cubic-bezier(0.22, 0.26, 1, 2.5)';
}

function ModalDisAppear() {
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
    if (modal) {
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-3rem)';
        modal.style.transition = 'opacity 500ms, transform 500ms';
    }
}

function toggleAppear() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
}


backdrop.addEventListener('click', ModalDisAppear);

toggleButton.addEventListener('click', toggleAppear);