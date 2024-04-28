# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Solution URL: https://github.com/kenkkui/room-homepage/tree/master
- Live Site URL: https://www.frontendmentor.io/solutions/responsive-homepage-of-room-using-react-w-animation-ACR5q71zQ9

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS animation
- CSS Grid
- Flexbox
- Mobile and Desktop workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The only thing I learned here is how to make a Carousel. Uhm, I also learned how to loop how to loop throught the carousel using JS

```jsx
<div
  className={`carousel ${page >= 1 ? "curr1" : ""} ${
    page === 2 ? "curr2" : ""
  }`}
>
  <ul>
    <li className="slide">
      <img src={image1} alt="Our furniture" data-desktop-img="true" />
      <img src={mobileImg1} alt="Our furniture" data-mobile-img="true" />
    </li>
    <li className="slide">
      <img src={image2} alt="Our furniture" data-desktop-img="true" />
      <img src={mobileImg2} alt="Our furniture" data-mobile-img="true" />
    </li>
    <li className="slide">
      <img src={image3} alt="Our furniture" data-desktop-img="true" />
      <img src={mobileImg3} alt="Our furniture" data-mobile-img="true" />
    </li>
  </ul>
</div>
```

```js here is the looping
setPage((pageNum) => (pageNum - 1 + 3) % 3);
```

## Author

- Frontend Mentor - [@kenkkui](https://www.frontendmentor.io/profile/kenkkui)
