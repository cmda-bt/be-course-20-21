# Week 4

> An SSL error has occurred and a secure connection to the server
> cannot be made.
>
> — [William Shakespeare][quote-author]

[![][inspiration-cover]][inspiration-link]

> [`qw3rtman/git-fire`][inspiration-link] by
> [**@qw3rtman**][inspiration-author].

## Table of Contents

- [Slides](#slides)
- [Theory](#theory)
- [Playground](#playground)
- [Assignments](#assignments)
- [Hand in](#hand-in)

## Slides

- [Lecture-4][lab4a]
- [Lab-4][lab4b]

## Theory

Before you start you'll probably want to read a bit about **Databases,** **JSON,** and **MongoDB**. We'll cover this in the lecture but make sure you fully understand these concept, the resources below can help.

* [_Introduction to MongoDB_][intro-mongo]
* [_Modern databases & their differences_][intro-database]
* [_Introduction to documents_][intro-documents]

## Playground

You can do these exercises before you start working on the assignments to get comfortable with the topics covered in class. The below are interactive self guided lesson modules from [freeCodeCamp](https://www.freecodecamp.org). If you feel a bit more adventurous you can try the [NodeSchool workshoppers](https://nodeschool.io).

- [freeCodeCamp MongoDB and Mongoose](https://www.freecodecamp.org/learn/)
- [learnouMongo workshopper (exercise)](https://github.com/evanlucas/learnyoumongo)

## Assignments

### Storage

![Storage banner](assets/banners/storage.jpg)

> Store user input in a MongoDB database instead of the server.

#### Synopsis

- **Time**: 8:00h
- **Goals**: subgoal 7, subgoal 8
- **Due**: before week 5

#### Description

A database will permanently store the data for you. A database is for persistence, store information apart from the server. Text is the easiest thing to store, media such as images, blobs or passwords require additional effort.

> Remember that in the previous assignment you've set-up a database connection with Atlas. Now we are going to connect the server (node.js) to the database.

```
1. Connecting to the URI of your database
2. Save data to the database
3. Query the database from the server
4. Display data from the server to the client
5. Updating data to the database
```

Then start storing the user input for your matching application in the database!

1. **Do some data modelling**. Think about how you are going to store the data. Every piece of data needs a `type`. e.g.
   - Likes can be stored as `true` or `false`
   - Are telephone numbers typeof `number` or are they strings?
   - Do you need seperate keys and values for firstname and lastname?
2. **Draw the structure of your database**. Include that diagram in your `readme.md` to explains what the structure is like. (**Hint**: use [Google Drawings][drawings] or [Excalidraw][excali]).
3. To test out if your database is connected properly you can first try to **add some data manually** using MongoDB compass and use `Find` to display that data in your application.
4. Then **Use MongoDB CRUD operations** to further interface with the database.
   1. Use `Find` to read data from the collection
   2. Use `Insert` to add data to collections
   3. Use `Update` to change data from the collection

> 💡In lots of online tutorials and video's you'll see people use _mongoose_ to connect to their database and perform crud operations. **We don't think that's the best way to get started** so we highly suggest you don't use mongoose when you are starting out. It's too much ✨ magic and you'll also need to learn about things like _schema's_. Only if you think you actually need it and can explain why it's useful for your project you'll want to consider it for your project.

> Remember that to pass A1 (assessment) a user needs to be able to **insert** or  **update** the data in the database trough the interface. A **find** is not enough.

**Tips**

- **Start small**. Don't try to store everything into the database at once.
- You can use the [`mongodb`](https://www.npmjs.com/package/mongodb) package inside node to interface with your database.
- You can use a [MongoDB GUI](https://www.mongodb.com/products/compass) to see and manipulate your data with a handy User Inerface.

## Hand-in

1. **Push your changes:**  
Commit your progess in your repository on GitHub under your username in your own matching-app repository.

2. **Create an issue:**  
Mark this assignment as complete by opening an issue on our [GitHub issue tracker][issues]. Fill in the issue template of `week-4.md` with the correct information. Include what progress you made in the description of the issue.

3. **Feedback:**  
Let us know what you thought of the homework, what part you spend a lot of time on and give us any feedback. Your assignment will be reviewed by teachers and student assistants, so expect people to read it and be ready for tips and tops!

[quote-author]: https://twitter.com/shatterfront/status/816065700577972224
[inspiration-cover]: assets/images/git-fire.jpg
[inspiration-link]: https://github.com/qw3rtman/git-fire
[inspiration-author]: https://github.com/qw3rtman
[pug]: https://pugjs.org/api/getting-started.html
[ejs]: https://ejs.co/
[handlebars]: https://handlebarsjs.com/
[guide]: https://expressjs.com/en/guide/routing.html
[workshopper]: https://github.com/azat-co/expressworks
[query]: https://www.youtube.com/watch?v=zDovsTG2a7g
[template]: https://expressjs.com/en/guide/using-template-engines.html
[issues]: https://github.com/cmda-bt/be-course-20-21/issues/new/choose
[body]: https://www.npmjs.com/package/body-parser
[multer]: https://www.npmjs.com/package/multer#readme
[drawings]: https://docs.google.com/drawings
[session]: https://github.com/expressjs/session
[env]: https://www.youtube.com/watch?v=17UVejOw3zA&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=19
[excali]: https://excalidraw.com

[intro-mongo]: https://docs.mongodb.com/manual/introduction/
[intro-database]: https://dev.to/maludecks/modern-databases-their-differences-294a
[intro-documents]: https://docs.mongodb.com/manual/core/document/

[lab4a]: /slides/be_20-21_lab-4a.pdf
[lab4b]: /slides/be_20-21_lab-4b.pdf
