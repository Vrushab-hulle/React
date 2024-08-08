# >>>>>>>>>>>>>>>>>>>> I hope, i will complete this react course <<<<<<<<<<<<<<<<<

# Configuring the Project:

> > npm init
> > to instailize the package.json file

# Bundlers

A bundler is a tool that bundles our app, packages our app so that it can be shipped to production.
Examples of Bundlers:

- Webpack
- Vite
- Parcel
  📢 NOTE: In create-react-app, the bundler used is webpack

# Package Manager:

Bundlers are packages. If we want to use a package in our code, we have to use a package manager.
We use a package manager known as npm or yarn

# Parcel

> > npm install -D parcel
> > what parcel do

- DEV build
- local server
- HMR = hot module replacement
- file watching algorithm -> written in C++
- caching - Faster builds
- Image optimization
- Minification
- bundling

# there are 2 types of packages we can install

1- DEV dependencies (generally required for development phase)
for example to add dev dependencies we can write (npm install -D parcel)

2- Normal dependencies (can be used for production also)

# package.json

> > Package.json keeps the approx. version of packages being used in the project.
> > Dependencies: Lists the libraries (and their approx versions) that the project directly depends on. These can be in dependencies and devDependencies sections.

# package-lock.json

> > Package-lock.json locks the exact version of packages being used in the project.
> > It locks the dependencies to a specific version. This file ensures that the same versions of dependencies (and their dependencies) are installed on all environments, providing consistency across different installations.

# node_modules

1 - it kind of like database/collection where all our dependencies exists
2 - for example when we install parcel a lot of folders get created inside node_modules because
parcel itself needs lot of other dependencies to work that's why we can see so many folders just
by installing parcel

# npm vs npx

> > npm to install packages related to npm
> > npx is used to execute the packages

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > (Episode 2)

# parcel-cache

- Parcel caches code all the time.
- When we run the application, a build is created which takes some time in ms.
- If we make any code changes and save the application, another build will be triggered which might take even less time than the previous build.
- This reduction of time is due to parcel cache.
- Parcel immediately loads the code from the cache every time there is a subsequent build.
- On the very first build parcel creates a folder parcelcache where it stores the caches in binary codeformat.
- Parcel gives faster build, faster developer experience because of caching.

# dist folder use

> > npx parcel index.html

- This will create a faster development version of our project and serves it on the server.

> > npx parcel build index.html

- It creates a lot of things, minify your file. And the parcel will build all the production files to the dist folder.

# browserlist

it is used to make our website work on different version of the browser
link - https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

# Tree Shaking:

Tree shaking is a process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

# Assignment 2

# Theory Assignment:

● - What is `NPM`?
● - What is `Parcel/Webpack`? Why do we need it?
● - What is `.parcel-cache`
● - What is `npx` ?
● - What is difference between `dependencies` vs `devDependencies`
● - What is Tree Shaking?
● - What is Hot Module Replacement?
● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
● - What is `.gitignore`? What should we add and not add into it?
● - What is the difference between `package.json` and `package-lock.json`
● - Why should I not modify `package-lock.json`?
● - What is `node_modules` ? Is it a good idea to push that on git?
● - What is the `dist` folder?
● - What is `browserlists`
Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
● Read about Script types in html (MDN Docs)

# Project Assignment:

- In your existing project
  ● - intialize `npm` into your repo
  ● - install `react` and `react-dom`
  ● - remove CDN links of react
  ● - install parcel
  ● - ignite your app with parcel
  ● - add scripts for “start” and “build” with parcel commands
  ● - add `.gitignore` file
  ● - add `browserlists`
  ● - build a production version of your code using `parcel build`

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > (Episode 3)

"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html",
"test": "jest"
}

- To start project we only need to type npx start or npx run start

# JSX

- JSX is not HTML in JS instead it's more HTML-like or XML-like syntax
- JSX is transpiled before it reaches the JS engine -> PARCEL(job of parcel to make use of babel) to convert JSX into browser understandable language

<!-- React.createElement => ReactElement.JS object => HTMLElement(render) -->
<!-- JSX => React.createElement => ReactElement - JS object => HTMLElement(render) -->

# React Component

- Class based Component - (OLD)
- Functional based Component - (NEW ) - react functional component is just a JS function which return a jsx code

# what is component composition

- when we put component inside under another component is nothing but component composition
