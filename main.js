"use strict";
const toggleButton = document.querySelector('button');
const bodyContainer = document.querySelector('body');
toggleButton.addEventListener('click', () => {
    bodyContainer.classList.toggle('light');
    bodyContainer.classList.toggle('dark');
});
if (matchMedia('(prefers-color-scheme: light').matches) {
    bodyContainer.classList.add('light');
    bodyContainer.classList.remove('dark');
}
else {
    bodyContainer.classList.remove('light');
    bodyContainer.classList.add('dark');
}
matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (e.matches) {
        bodyContainer.classList.add('light');
        bodyContainer.classList.remove('dark');
    }
    else {
        bodyContainer.classList.remove('light');
        bodyContainer.classList.add('dark');
    }
});
