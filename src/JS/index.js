document.addEventListener('DOMContentLoaded', function () {

    const anchors = document.querySelectorAll("a[href*='#']");

    for (let anchor of anchors) {
        console.log(anchor);
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    const menuItems = document.querySelectorAll('.header-menu__link');
    const repModalBtns = document.querySelectorAll('.rep-modal__btns');

    menuItems.forEach(element => {
        element.addEventListener('click', () => {
            document.querySelector('.burger-menu__input').checked = false;
        })
    });

    repModalBtns.forEach(element => {
        element.addEventListener('click', () => {
            document.querySelector('.rep-modal').style.display = 'none';
        })
    });

    if (document.querySelector('.rep-modal')) {
        
    }
});