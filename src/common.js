function toggleHamburger(element) {
    const mobileNavElements = document.getElementsByClassName('nav-links-mobile')[0];
    const isHidden = mobileNavElements.classList.contains('nav-links-mobile-hidden')

    if (isHidden) {
        mobileNavElements.classList.remove('nav-links-mobile-hidden');
        document.body.style.overflowY = 'hidden'
    } else {
        mobileNavElements.classList.add('nav-links-mobile-hidden');
        document.body.style.overflowY = 'auto'
    }

    element.classList.toggle("change");
}