 function navSlide () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links-header');

    burger.addEventListener('click', () => {
        nav.classList.toggle('links-header-active')
    })
}

navSlide ();