var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
var massiveAnchors = document.querySelectorAll('.nav__item-link');

document.getElementById('open-menu').addEventListener('click', function() {
    overlay.classList.add('show-menu');
    return false;
})

document.getElementById('close-menu').addEventListener('click', function() {
    overlay.classList.remove('show-menu');
    return false;
})

for (var i = 0; i<massiveAnchors.length; i++) {
    massiveAnchors[i].onclick = function() {
        overlay.classList.remove('show-menu');
    }
}
