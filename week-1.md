# Week 1 

> Always bet on JavaScript.
>
> — [**@BrendanEich**][quote-author]

[![][inspiration-cover]][inspiration-link]

> Visualisation of npm dependencies by [**@anvaka**][inspiration-author].

## Table of Contents

* [Slides](#slides)
* [Theory](#theory)
* [Playground](#playground)
* [Assignments](#assignments)
* [Hand in](#hand-in)

## Slides
* [Lab-1][lab1]

## Theory
Before you start you'll probably want to read a bit about **Node,** the **JavaScript engine,** and **client vs. server-side**. We'll cover this in the lab but make sure you fully understand these concept, the resources below can help.

* [_Introduction to Node.js_][intro-node]
* [_Differences between Node.js and the Browser_][node-browser]
* [_An introduction to the npm package manger_][node-npm]
* [_Frontend vs Backend_][fe-be]

[🎦 _Watch a video_ about the browser versus Node.js.][videonode]  
[🎦 _Watch a video_ about NPM.][videonpm]

## Playground
You can do these exercises before you start working on the assignments to get comfortable with the topics covered in class. The below are interactive, self guided lesson modules, from [freeCodeCamp](https://www.freecodecamp.org). If you feel a bit more adventurous you can try the [NodeSchool workshoppers](https://nodeschool.io).

* [freeCodeCamp - Managing Packages with NPM (exercises)](https://www.freecodecamp.org/learn)
* [How to NPM (workshopper)](https://github.com/workshopper/how-to-npm)

## Assignments

### Package
![Package Banner](assets/banners/package.jpg)
>Learn the basics of node modules and npm packages and setup a boilerplate for your own feature.


#### Synopsis

*  **Time**: 6:00h
*  **Goals**: subgoal 1, subgoal 2
*  **Due**: before week 2

1. Create the boilerplate for the matching app you are going to create. Include a `package.json` with a correct name, version, dependencies, and other metadata. See npm’s documentation on [`package.json`](https://docs.npmjs.com/files/package.json).
For examples of `package.json` files, see
[`repeat-string`](https://github.com/jonschlinkert/repeat-string/blob/master/package.json),
[`longest-streak`](https://github.com/wooorm/longest-streak/blob/master/package.json),
or [`skin-tone`](https://github.com/sindresorhus/skin-tone/blob/master/package.json).

2. Look trough the NPM registry and install a package from [npm][npmjs] that would be helpful for your job story and try it out in `index.js`. Not sure what package to pick? You can try playing around with [`camelcase`][camelcase] or [`lodash`][lodash] to get comfortable requiring packages and using them.

3. Improve the _developer experience_ of your application. Look for so called 'developer dependencies' on NPM. [`nodemon`](https://nodemon.io/) is a good example, it will monitor for any changes in your source and automatically restart your server. Perfect for development.

4. Create some [`run scripts`](https://docs.npmjs.com/misc/scripts) in your `package.json` to **start**, **serve** or **build** your application.

5. Some files and folders NPM create don't have to be on GitHub (e.g. node_modules). Create a [`.gitignore`](https://docs.github.com/en/github/getting-started-with-github/ignoring-files), and add files and folders you don't want to push to your GitHub repository. [This][github-node-gitignore] is the standard GitHub gitignore for Node.js applications. Keep your gitignore concise, only put files and folders in there that need to be ignored.

> 💡 Configuration files like dotfiles, package.json or server.js are created in the [`root`](https://en.wikipedia.org/wiki/Root_directory) of your repository. There is no need to put them in subfolders.

**Ask yourself upon completion:**
* How does  `require` work under the hood?
* What's the difference between `dependencies` and `devDependencies`?
* What are the differences between `global` and `local` dependencies?
* What tasks can you run with `npm run scripts`?

**Additional resources**
* [Introduction to NPM Scripts][intro-npm]
* [Npm global or local packages][global]

[🎦 _Watch a live demo_ about NPM and packages.][videopackage]  

## Hand-in

1. **Push your changes:**  
Commit your progess in your repository on GitHub under your username in your own matching-app repository.

2. **Create an issue:**  
Mark this assignment as complete by opening an issue on our [GitHub issue tracker][issues]. Fill in the issue template of `week-1.md` with the correct information. Include what progress you made in the description of the issue.

3. **Feedback:**  
Let us know what you thought of the homework, what part you spend a lot of time on and give us any feedback. Your assignment will be reviewed by teachers and student assistants, so expect people to read it and be ready for tips and tops!

[quote-author]: https://twitter.com/BrendanEich
[inspiration-cover]: assets/images/npmgraph.png
[inspiration-link]: http://npm.anvaka.com/#/view/2d/express
[inspiration-author]: https://github.com/anvaka

[intro-node]: https://nodejs.dev/introduction-to-nodejs
[node-browser]: https://nodejs.dev/differences-between-nodejs-and-the-browser
[node-npm]: https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager

[npmjs]: https://www.npmjs.com/
[camelcase]: https://www.npmjs.com/package/camelcase
[lodash]: https://www.npmjs.com/package/lodash
[nodeschool]: https://nodeschool.io/
[intro-npm]: https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/
[global]: https://nodejs.dev/npm-global-or-local-packages
[issues]: https://github.com/cmda-bt/be-course-20-21/issues/new/choose
[fe-be]: https://zellwk.com/blog/frontend-vs-backend/
[github-node-gitignore]: https://github.com/github/gitignore/blob/master/Node.gitignore

[videonode]: https://www.youtube.com/watch?v=ZpiHUOM_Y-0
[videonpm]: https://www.youtube.com/watch?v=X8D5Ijpp824
[videopackage]: https://www.youtube.com/watch?v=shSB9BbK1gU

[lab1]: /slides/be_20-21_lab-1.pdf
