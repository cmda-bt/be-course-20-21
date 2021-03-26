# Week 2

> what kind of train does node take on its commute\
> \
> express
>
> — [@netlify](https://twitter.com/netlify/status/1304316244749844481)

[![][inspiration-cover]][inspiration-link]

> HTTP cat by [**@girlie_mac**][inspiration-author].

## Table of Contents

*  [Slides](#slides)
*  [Theory](#theory)
*  [Playground](#playground)
*  [Assignments](#assignments)
*  [Hand in](#hand-in)

## Slides
* [Lab-2a][lab2a]
* [Lab-2b][lab2b]

## Theory
Before you start you'll probably want to read a bit about **express,** **routing,** and **templating**. We'll cover this in the lecture but make sure you fully understand these concept, the resources below can help.

* [_Introducing Express on MDN_][intro-express]
* [_Express Routing guide_][intro-routing]
* [_Using template engines with Express_][intro-templating]

[🎦 _Watch a video_ about routing and express.][videoexpress]  
[🎦 _Watch a video_ about request and response.][videorequest]

## Playground

You can do these exercises before you start working on the assignments to get comfortable with the topics covered in class. The below are interactive self guided lesson modules from [freeCodeCamp](https://www.freecodecamp.org). If you feel a bit more adventurous you can try the [NodeSchool workshoppers](https://nodeschool.io).

* [freeCodeCamp - Basic Node and Express (exercises)](https://www.freecodecamp.org/learn)
* [Express.js (workshopper)][workshopper]

## Assignments

### Serve

![Hello World Server banner](assets/banners/serve.jpg)
> In this assignment you’ll build a static file server with a little help from Express.

#### Synopsis

*  **Time**: 4:00h
*  **Goals**: subgoal 3, subgoal 4
*  **Due**: before week 3

#### Description
We'll add more features to our server. It should handle routes and serve static files. Make sure it does (atleast) the following three things:

1. **Basic routing:** Have a couple of different `routes` (e.g. `/about` `/login`) that are useful for your matching-application.
2. **Error handling:** Respond with a `404 Not Found` if you go to a route that doesn't exist.
3. **Serve `static files`:** such CSS but also media files such as images, video's or audio files.

**Ask yourself upon completion:**
* How does the `app instance` work? What makes it possible you can do things like `app.get` or `app.listen`?
* What are the `req` and `res` parameters?

**Additional resources**
* [Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
* [Static Files](https://expressjs.com/en/starter/static-files.html)

### Templating
![Templating Banner](assets/banners/templating.jpg)

> Learn how to use a templating engine to dynamically render data and create components for your matching application.

#### Synopsis

*  **Time**: 6:00h
*  **Goals**: subgoal 4
*  **Due**: before week 3

#### Description

We are slowly going to build the interface and components for your matching application. You already have a server up an running, now it's time to actually send dynamic HTML to the client using a templating engine.

1. Research different [templating engines](https://expressjs.com/en/resources/template-engines.html) and read there documentation such as [`pug`][pug], [`ejs`][ejs]. Document your research in your wiki. Pick one, explain why you chose it, and install it in your project. 

> 💡 Some templating engines can be a little bit hard to set-up (looking at you 👀 handlebars). So carefully read their documentation and try out a couple of different ones. If you can't get yours working, look for students who are working with the same templating engine.
   
2. Then, **create views and try to render a page** using the templating engine. Start with 'simple' HTML pages and make sure you get different .html for each route.

3. Then, **render dynamic data** using your templating engine. So instead of you writing the .html insert some dynamic data. For example; you can store and array or object on the server and _inject_ data into the view. Later we'll look at how to insert data from a database.
  
4. **Use the features** of your templating engine. Try out atleast the following:
   * Use[`includes`](https://ejs.co/#includes); to insert contents of files into another.
   * Use [`conditionals`](https://pugjs.org/language/conditionals.html); if statements to render html conditionally
   * Use [`mixins`](https://pugjs.org/language/mixins.html); create small reusable blocks of html

5. **Start building out your components** for your matching application feature. You can create different partials and [lay-outs](https://pugjs.org/language/inheritance.html) (includes) for components of your page e.g. header, footer or a form.

> 💡 It's very common to create a consistent naming convention and folder structure for your components. Most people base it on the [Atomic Design method](https://atomicdesign.bradfrost.com/chapter-2/) by Brad Frost. [Here's an example](https://github.com/iSirThijs/Player2) with different partials and lay-out components.

**Ask yourself upon completion:**
* How does express combine the data from the server with the templating engine?
* How do partials work? Can you create a folder structure for all the components?

**Additional resources**
* [Using template engines with Express][template]

## Hand-in

1. **Push your changes:**  
Commit your progess in your repository on GitHub under your username in your own matching-app repository.

2. **Create an issue:**  
Mark this assignment as complete by opening an issue on our [GitHub issue tracker][issues]. Fill in the issue template of `week-2.md` with the correct information. Include what progress you made in the description of the issue.

3. **Feedback:**  
Let us know what you thought of the homework, what part you spend a lot of time on and give us any feedback. Your assignment will be reviewed by teachers and student assistants, so expect people to read it and be ready for tips and tops!

[inspiration-cover]: https://http.cat/403
[inspiration-link]: https://http.cat
[inspiration-author]: https://twitter.com/girlie_mac

[pug]: https://pugjs.org/api/getting-started.html
[ejs]: https://ejs.co/
[handlebars]: https://handlebarsjs.com/
[guide]: https://expressjs.com/en/guide/routing.html
[workshopper]: https://github.com/azat-co/expressworks
[query]: https://www.youtube.com/watch?v=zDovsTG2a7g
[template]: https://expressjs.com/en/guide/using-template-engines.html
[issues]: https://github.com/cmda-bt/be-course-20-21/issues/new/choose

[intro-express]: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_express
[intro-routing]: http://expressjs.com/en/guide/routing.html
[intro-templating]: http://expressjs.com/en/guide/using-template-engines.html

[videorequest]: https://www.youtube.com/watch?v=IS3HRyUXJX0
[videoexpress]: https://www.youtube.com/watch?v=SRHQ3FM39Qg

[lab2a]: /slides/be_20-21_lab-2a.pdf
[lab2b]: /slides/be_20-21_lab-2b.pdf
