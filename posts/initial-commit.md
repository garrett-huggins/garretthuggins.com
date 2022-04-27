---
title: "Initial Commit"
date: "April 26, 2022"
excerpt: "Welcome to my very first personal website!"
---

Welcome to my very first personal website!

### Summary

This will be the home to many of my portfolio projects as well as my resume. This is my first attempt at creating a React/Next.js website from start to finish using everything I have been able to learn _for free_ from the internet.

This website was created using [Next.js](https://nextjs.org/) as the foundation and was styled using [Chakra UI](https://chakra-ui.com/) alongside [Style Components](https://emotion.sh/docs/styled), hosted by [Vercel](https://vercel.com/).

## Project Structure

```
GarrettHuggins.com/#Root
│
├── pages/#Page files
│   │
│   ├── index/#Home page
│   │
│   ├── resume/#Resume page
│   │
│   └── blog/#Blog page and markdown generator
│
├── components/#React component files
│
├── data/#Project data
│
├── posts/#Blog posts
│
├── public/#Static files for images and resume
│   │
│   ├── favicon/#Favicons
│   │
│   └── images/#Images
│
└── theme/#Chakra theme and global components
```

### Next.js

**Preface:**
I initially started my journey into web development with a little-known frontend library called React. I remember spending countless hours a week attempting to learn the fundamentals of JSX, React components, and just trying to wrap my head around what the heck a prop is. The silver lining in the “tutorial hell” I had found myself in was the React tutorial series by [John Smilga](https://www.johnsmilga.com/), which finally made my understanding of the library really click.

So why am I using Next.js and not just vanilla React? Well, as I am sure many have experienced for themselves, Next.js is – _simply put_ – the natural progression of someone developing with React. It introduces a hybrid approach of multiple server rendering methods, which in this case grants an improved search engine optimization while keeping the speed and appeal of component-based static generation. I also can’t forget to mention that Next.js provides its own router, making navigation seamless.

### Chakra UI

**Preface:**
I have never been a very creative individual and staring at a blank CSS file wondering how I am going to get this button to look exactly like I imagine it has been the bane of my existence for far too long. Only recently have I started using styling frameworks, throwing together projects using Bootstrap and Tailwind as proof of concepts, eventually taking advantage of React components by using MUI, but in the end I wanted something different.

Enter Chakra UI, a minimalistic React component-based library. Each component is able to be styled by simply passing props; no more inline CSS, but instead a more intuitive system of passing styles as individual props. Chakra UI chooses to opt for a simplistic approach to UI libraries, consisting of layout components with very little styling and an emphasis on giving full control to the user. The library also provides a multitude of utility hooks to be used in conjunction with their components, which has made dynamic and conditional rendering a breeze. While I do have little experience using MUI, Chakra UI has been able to – _in my most humble opinion_ – create one of the most intuitive UI building experiences I have ever had.

### Future

I gave myself a deadline of exactly one week to complete this website, start to finish, and having completed it in eight days the exhaustion is starting to kick in. While there are many improvements I would like to make, I know if I kept refining everything until it was perfect, I would have nothing to show – _much like 90% of what is in my projects folder_. Going forward the next items on the list are converting to Typescript and adding more “completed” projects.

#### Special Thanks

I would like to give a special thanks to Ryan Lalchand for his wise words and warm welcome into YCC, and Joe Duncko for inspiration and the confidence to create this website in the first place.
