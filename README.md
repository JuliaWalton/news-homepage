# News homepage - Frontend Mentor

![Design preview for the News homepage coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out my solution for this challenge!

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Your challenge is to build out this news website homepage and get it looking as close to the design as possible.

Your users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Links

Live Site URL: [https://juliawalton.github.io/news-homepage/](https://juliawalton.github.io/news-homepage/)

### Built with

- Semantic HTML5 markup
- CSS preprocessed with SASS
- SASS variables
- Flexbox
- CSS Grid
- JavaScript

## What I learned

This project helped reinforce my understanding of building responsive nav bars along with being nice layout practice.

```js
const media = window.matchMedia("(width < 800px)");

function setupNav(e) {
  if (e.matches) {
    // console.log('is mobile');
    nav.className = "nav";
    sidebarBtn.style.display = "flex";
    console.log(nav.className);
  } else {
    // console.log('is desktop');
    nav.className = "desktop-nav";
    sidebarBtn.style.display = "none";
  }
}
```

## Author

- Website - [Julia's Portfolio](https://juliawalton.github.io/portfolio/)
- LinkedIn - [Julia Walton](https://www.linkedin.com/in/juliawalton/)
