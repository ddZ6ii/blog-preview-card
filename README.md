# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Getting started](#getting-started)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Deployed with](#deployed-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

- Phone:
  ![](./screenshots/phone.png)

- Desktop:
  ![](./screenshots/desktop.png)

### Links

- Solution URL: [frontend-mentor-solution](https://www.frontendmentor.io/solutions/responsive-card-with-interactive-elements--VyBb-nheP)
- Live Site URL: [blog-preview-card](https://blog-preview-card-ochre-chi.vercel.app/)

## Getting started

Clone the project and run the following command:

```console
yarn install
```

This will initialize the project by installing all the required dependencies.

## My process

### Built with

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Parcel bundler
- Mobile-first workflow

### Deployed with

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### What I learned

How to style a parent when hovering one of it descendent in Tailwind 🚀

```html
    <article
      class="shadow-base [&:has(a:hover)]:shadow-thicker transition-all"
    >
    <!-- ... -->
      <div>
        <h2 class="mb-2 text-xl font-bold">
          <a
            href="#"
            class="hover:text-primary outline-primary inline-block w-full"
            >HTML & CSS foundations</a
          >
        </h2>
      </div>
    <!-- ... -->

    </article>
```

### Useful resources

- [Github discussions](https://github.com/tailwindlabs/tailwindcss/discussions/10206) - A big up 👍 to *martinszeltins* and *wongjn*

## Author

- Github - [@ddZ6ii](https://github.com/ddZ6ii)
- Frontend Mentor - [@ddZ6ii](https://www.frontendmentor.io/profile/ddZ6ii)
- Linkedin - [@denis-dezest](https://www.linkedin.com/in/denis-dezest/)
