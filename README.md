# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot
![Dark mode screenshot](./images/dark_mode.png)
![light mode screenshot](./images/light_mode.png)

### Links

- Solution URL: [Github](https://github.com/efosu/Social-media-dashboard)
- Live Site URL: [Site preview](https://efosu.github.io/Social-media-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned
Using matchMedia to change the style of the webpage based on the theme of the user's system.
```js
if (matchMedia('(prefers-color-scheme: light)').matches) {
    bodyContainer.classList.add('light');
    bodyContainer.classList.remove('dark');
}
else {
    bodyContainer.classList.remove('light');
    bodyContainer.classList.add('dark');
}
```

### Useful resources

- [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) - This helped on how to use the matchMedia method.


## Author
- Frontend Mentor - [@efosu](https://www.frontendmentor.io/profile/efosu)


## Acknowledgments
I really thank the mdn team for providing such comprehensive resources for me and also really thank the frontend mentor contributors.


