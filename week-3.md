# Week 3

> Any sufficiently advanced technology is indistinguishable from magic.
>
> — Arthur C. Clarke

[![][inspiration-cover]][inspiration-link]

> `dog-ceo-api` by [**@ElliottLandsborough**][inspiration-author].

## Table of Contents

*  [Slides](#slides)
*  [Theory](#theory)
*  [Playground](#playground)
*  [Assignments](#assignments)
*  [Hand in](#hand-in)

## Slides
* [Lab-3a][lab3a]
* [Lab-3b][lab3b]

## Theory

Before you start you'll probably want to read a bit about **HTTP,** **request methods,** and **middleware**. We'll cover this in the lecture but make sure you fully understand these concept, the resources below can help.

*  [_An overview of HTTP_](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
*  [_Anatomy of an HTTP Transaction_](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
*  [`httpstatuses.com`](https://httpstatuses.com)
*  [_Using middleware in Express.js_](https://expressjs.com/en/guide/using-middleware.html)

[🎦 _Watch a video_ about request and response.][videorequest]

## Playground

You can do these exercises before you start working on the assignments to get comfortable with the topics covered in class. The below are interactive self guided lesson modules from [freeCodeCamp](https://www.freecodecamp.org). 

* [freeCodeCamp - Basic Node and Express (exercises)](https://www.freecodecamp.org/learn)

## Assignments

### Input

![Input banner](assets/banners/input.jpg)
> Receive input from users on the server and manipulate that data for your own feature using HTTP request methods.


#### Synopsis

*  **Time**: 10:00h
*  **Goals**: subgoal 4, subgoal 5, subgoal 6
*  **Due**: before week 4

#### Description

So far we only send data (response) to the client with our server. A one-sided conversation. Now the fun starts, it's time to actually start receiving data from users. For example; users can enter something into an input field or submit whole forms with file uploads.

The description of this assignment is quite vague since the end result will be very specific to your Job Story. Make sure you at least spend the alloted hours on this and meet the minimum criteria. Take ± 10 hours to build out the feature of your matching-app were you'll receive **user input** and manipulate the incoming data. 

Think about the _movie example_ from the lecture:

*  You can make users fill in a form or upload images
*  Add new users to an overview list of people
*  Make users enter their hobbies and interests
*  Etc.

There are roughly _3 ways to send data from the client to the server_: 1) using query parameters 2) fetch from the client to the server 3) use HTTP request methods on a form. The last one (third) is probably the most common way and easiest way to get started. So roughly, a user submits a form the client posts the form using HTTP and the `body` of the form is received by the server.

1. You can use query and parameters but you'll probably want to use `HTTP request methods` such as `post` or `delete`. It's a good idea to create a form with your templating engine.
2. There are several packages from NPM that make working with data coming in from request (`req.body`) easier. We recommend the following:
   * [`body-parser`][body] parse incoming request bodies
   * [`multer`][multer] handles `multipart/form-data` use this for file uploads.
3. Start with _receiving input_ (`post`) and temporarily store it on the server (we'll cover storing that to a database next week). Then build from there, such as deleting (`delete`) or let the user edit (`update`).
4. If you have received the data server-side you can event send it back to the client again so the user can see. You'll need to `re-render the template` and _`'inject the data'`_ from the user dynamically into the template.

Remember that when you close (shut-off) your server the data the user entered will be lost. That's where a database comes in to permanently store that data. We'll cover that next week.

**Tips:**
* **Start small**. Start with one input field and try to make it work. You can then create more fields or types when you have time.
* **Commit your work early and often**. Push your work to GitHub. Don’t worry if it’s not perfect. Try and get as far as you can.
* **Look at tons of examples**. There are examples in this repo, there are examples in express guides and you can also ask your fellow students.

### Connect

![Connect banner](assets/banners/connect.jpg)

> Create a database and set-up your remote connection 

#### Synopsis

- **Time**: 2:00h
- **Goals**: subgoal 7, subgoal 8
- **Due**: before week 4

#### Description

We'll cover actually storing the user input and learning about databases the next lesson but what you already do is create a MongoDB atlas account and set-up your mongodb connection. 

All of your data is going to be stored in MongoDB. Take ± 2 hours to set-up your database and connect to it. There are roughly two options: go with a database as a service [DBaaS](https://www.mongodb.com/cloud/atlas) or use [MongoDB locally](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).

> We highly recommend you use the DBaaS option (MongoDB atlas) that's why we don't include any instruction on how to set-up mongodb locally.

**DBaaS**  
DBaaS stands for _database as a service_. Instead of having the database stored locally on your laptop, it saves your data to _the cloud_. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) is a great option since they offer a free plan for prototypes. These are not meant to be used in production environments but for this course it's good enough for a prototype.

Setting-up a database connection isn't 'difficult' but there are lots of small steps involved. **So read the guides carefully and follow each step.** If you make a small mistake somewhere then all other steps won't work.

> 💡There isn't realy a 'good' way to check if the database connection is working. We think the best way to check is to actually fill your database with dummy data and try a `find` and `console.log` that to the terminal. If you get a javascript like object in the terminal that's the same as the data you put in the database it has works!

> **Ask questions in the #back-end channel** if you are stuck! We try to link to relevant resources for common 'start-up' issues but if you encounter a specific problem don't try to fix it yourself but ask for help.

→ The best resource we found to set-up your database is the official ['connect to MongoDB' drive guide](https://docs.mongodb.com/guides/server/drivers/). Which roughly outline the following steps:

```
1. Make account
2. Make organization
3. Make cluster
4. Make database
5. Create dbUSer
6. Set-up connection
```

When you create your Cluster in Atlas you might need to [Whitelist your IP](https://docs.atlas.mongodb.com/security-whitelist/).

> **🚨 Never ever put your username, password or database URI directly in your code.**
> Store sensitive information such as your database URI, password and username in a `.env` using the [`dotenv`](https://www.npmjs.com/package/dotenv) package. Make sure you add the file to your `.gitignore`. If you commit your environment variables it's hard to undo!



**Additional resources**

- [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started)
- [Hiding API Keys with Environment Variables (dotenv)](env)

## Hand-in

1. **Push your changes:**  
Commit your progess in your repository on GitHub under your username in your own matching-app repository.

2. **Create an issue:**  
Mark this assignment as complete by opening an issue on our [GitHub issue tracker][issues]. Fill in the issue template of `week-3.md` with the correct information. Include what progress you made in the description of the issue.

3. **Feedback:**  
Let us know what you thought of the homework, what part you spend a lot of time on and give us any feedback. Your assignment will be reviewed by teachers and student assistants, so expect people to read it and be ready for tips and tops!



[inspiration-cover]: assets/images/dog-ceo.png
[inspiration-link]: https://dog.ceo
[inspiration-author]: https://github.com/ElliottLandsborough

[pug]: https://pugjs.org/api/getting-started.html
[ejs]: https://ejs.co/
[handlebars]: https://handlebarsjs.com/
[guide]: https://expressjs.com/en/guide/routing.html
[workshopper]: https://github.com/azat-co/expressworks
[query]: https://www.youtube.com/watch?v=zDovsTG2a7g
[template]: https://expressjs.com/en/guide/using-template-engines.html
[issues]: https://github.com/cmda-bt/be-course-18-19/issues/new/choose

[body]: https://www.npmjs.com/package/body-parser
[multer]: https://www.npmjs.com/package/multer#readme
[videorequest]: https://www.youtube.com/watch?v=IS3HRyUXJX0
[env]: https://www.youtube.com/watch?v=17UVejOw3zA

[lab3a]: /slides/be_20-21_lab-3a.pdf
[lab3b]: /slides/be_20-21_lab-3b.pdf
