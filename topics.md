# ![Backend - Topics][banner-topics]

The last weeks of back-end (team project) you'll pick (at minimum, but you can do multiple for a higher grade) 1 topic to work on for the team assessment. So apart from 'just' building the application and making a coherent application from all the individual features you do a deep dive in one topic related to back-end. These topics range from security enhancements, application structure to performance optimizations.

So we give you a starting point but you do your own research. In A2 you show the code of the topic; **implementation** but also the **research** in your wiki. 

* We assess the quality of the code of the topic, how complex it is? What of the topics did you implement? 
* We also look at the research were you document your research. What sources, articles etc. did you read? Did you explain your topic in your own words? Can you offer alternatives?

## Topic

**Think about a back-end related topic you'll want to work on during the team project.** Maybe there is something special you wanted to implement in your individual feature. Or you read an article while you were working on your feature and found something interesting but didn't have the time to implement yet.

## Inspiration

If you're not sure what to work on. Here are topics _we as teachers came up with._ We prefer if you come up with your own topic and learn something you always wanted to learn related to back-end. If you're not sure or don't know where to start, feel free to look at this list for inspiration.

### Production

| #1 - Build and structure your node.js application (MVC Model) |
|---|
| Work on the 'architecture' of your application. In node.js applications we often use the MVC model (model, view, controller). You can for example split up your route logic into seperate modules. |

| #2 - Compress assets that get send to the client |
|---|
| With compression (such as gzip) you can greatly decrease the size of the response body and hence increase the speed of a web app. There are many packages for express available that offer middleware for compression algorithms. |

| #3 - Minify assets that get send to the client |
|---|
| Set-up a small build chain that minifies code that get sends to the client. For example you can use UglifyJS or CSSNano to minify JavaScript or CSS. |

| #4 - Work on proper error handling |
|---|
| Learn about how to handle errors in a Node Project and implement those. There is lots of resources online on error handling in node (error object, try / catch, throw, promises). Look where error-handling is especially usefull in your application (submitting forms for example).  |

| #5 - Pre-processors and Post Processors |
|---|
| You can use node.js to build an 'asset pipeline'. Have a look at some preprocessors like sass, postcss or anything similar and implement those into the team project. |

| #6 - Bundlers |
|---|
| Have a look at some of the popular bundlers. Maybe you'll want to write your own webpack config or tinker around with more complicated build scripts. Maybe rollup is something you'll want to implement in the project. |


### Security

| #7 - Use helmet to set HTTP Headers  |
|---|
| Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately. |

| #8 - Use rate-limiter to protect against brute-force attacks  |
|---|
| You can implement rate-limiting on your forms to prevent brute forcing. For example you can limit how many times a user can try to login in a given time window. |

| #9 - Hash the passwords you store in the database |
|---|
| Transform the text passwords into a string of fixed length using a hash function (similar to encryption). It is a common practice to store passwords as Hash Value in the database and not in Plain Text. |

### API's

| #10 - Fetch a _public_ external API from the server and render that data |
|---|
| You can find a public API related to the concept of your application and fetch() data. For example loading image data to show game covers, profile pictures etc. |

| #11 - Fetch an external API from the server that _requires OAUTH_ and render that data |
|---|
| This is practically the same topic as the above but instead of calling a 'public' API you can call a API that has some form of authentication. So the fetching of the data will be more complex but since the user is logged into you can ask for more specific data.  |

### Testing

| #12 - Implement Continous Integration (deployment) |
|---|
| As your application becomes 'larger' it's common to add an extra build step to your application usually to automatically build and testing code changes, providing immediate feedback on the success of the change. Travis CI can be a good starting point.  |

| #13 - Implement Unit Testing |
|---|
| As your application becomes 'larger' it's common to add an extra testing step. Basically unit testing is checking that a function by itself, separate from everything around, should do what it is intended to do. Mocha (a JavaScript test framework) can be a good starting point. |

### Database

| #14 - Use Mongoose to object model your database |
|---|
| Mongoose makes it easier to interface with your databse. By offering additional interface features like MongoDB validation, schema's and constructing better documents. It's an abstraction layer on top of MongoDB.|

| #15 - Implement user authentication with passport.js |
|---|
| Passport is authentication middleware for Node. It offers more detailed support for authentication using a username and password but also external login methods like Facebook, Twitter. |

| #16 - Implement real-time data with socket.io |
|---|
| Socket.IO enables real-time, bidirectional and event-based communication. Very useful if you want to enable users to communicate (chat) with eachother. |

| #17 - Implement an Headless CMS |
|---|
| Let users dynamically add data to your application by implementing a CMS. Headless CMSes (like Strapi.io, Sanity etc.) are good choices for node.js applications. |

| #18 -  Try to implement some sort of 'relational database' in MongDB |
|---|
| MongoDB is document based by nature. Instead of being relational like MySQL. You can try to do some data moddeling by restructuring your database for allowing basic relationships or references. Like embedded relationships or referenced relationships. |

[banner-topics]: https://cmda-bt.github.io/be-course-20-21/assets/banner-topics.svg