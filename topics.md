# ![Backend - Topics][banner-topics]

The last weeks of back-end (team project) you'll pick (at minimum, but you can do multiple for a higher grade) 1 topic to work on for the team assessment. So apart from 'just' building the application and making a coherent application from all the individual features you do a deep dive in one topic related to back-end. These topics range from security enhancements, application structure to performance optimizations.

So we give you a starting point but you do your own research. In A2 you show the code of the topic; **implementation** but also the **research** in your wiki. 

* We assess the quality of the code of the topic, how complex it is? What of the topics did you implement? 
* We also look at the research were you document your research. What sources, articles etc. did you read? Did you explain your topic in your own words? Can you offer alternatives?

> These are topics _we as teachers came up with_ but if you always wanted to learn something that's not on the list below pitch it to your teacher! If you have a good idea for a topic to work you can always message your teacher on MS Teams with your plan.

## Production

| #1 - Deploy your node app  and .env variables  |
|---|
| Deploy your application on a hosting platform so that there is a live version up and running of your project. There are many options out there for cloud hosting examples are; heroku, digitalocean and many more. |

| #2 - Build and structure your node.js application (MVC Model) |
|---|
| Work on the 'architecture' of your application. In node.js applications we often use the MVC model (model, view, controller). You can for example split up your route logic into seperate modules. |

| #3 - Compress assets that get send to the client |
|---|
| With compression (such as gzip) you can greatly decrease the size of the response body and hence increase the speed of a web app. There are many packages for express available that offer middleware for compression algorithms. |

| #4 - Minify assets that get send to the client |
|---|
| Set-up a small build chain that minifies code that get sends to the client. For example you can use UglifyJS or CSSNano to minify JavaScript or CSS. |

| #5 - Work on proper error handling |
|---|
| Learn about how to handle errors in a Node Project and implement those. There is lots of resources online on error handling in node (error object, try / catch, throw, promises). Look where error-handling is especially usefull in your application (submitting forms for example).  |

## Security

| #6 - Use helmet to set HTTP Headers  |
|---|
| Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately. |

| #7 - Use rate-limiter to protect against brute-force attacks  |
|---|
| You can implement rate-limiting on your forms to prevent brute forcing. For example you can limit how many times a user can try to login in a given time window. |

| #8 - Hash the passwords you store in the database |
|---|
| Transform the text passwords into a string of fixed length using a hash function (similar to encryption). It is a common practice to store passwords as Hash Value in the database and not in Plain Text. |

## API's

| #9 - Fetch a _public_ external API from the server and render that data |
|---|
| You can find a public API related to the concept of your application and fetch() data. For example loading image data to show game covers, profile pictures etc. |

| #9 - Fetch an external API from the server that _requires OAUTH_ and render that data |
|---|
| This is practically the same topic as the above but instead of calling a 'public' API you can call a API that has some form of authentication. So the fetching of the data will be more complex but since the user is logged into you can ask for more specific data.  |

## Testing

| #10 - Implement Continous Integration (deployment) |
|---|
| As your application becomes 'larger' it's common to add an extra build step to your application usually to automatically build and testing code changes, providing immediate feedback on the success of the change. Travis CI can be a good starting point.  |

| #11 - Implement Unit Testing |
|---|
| As your application becomes 'larger' it's common to add an extra testing step. Basically unit testing is checking that a function by itself, separate from everything around, should do what it is intended to do. Mocha (a JavaScript test framework) can be a good starting point. |

## Database

| #12 - Use Mongoose to object model your database |
|---|
| Mongoose makes it easier to interface with your databse. By offering additional interface features like MongoDB validation, schema's and constructing better documents. It's an abstraction layer on top of MongoDB.|

| #13 - Implement user authentication with passport.js |
|---|
| Passport is authentication middleware for Node. It offers more detailed support for authentication using a username and password but also external login methods like Facebook, Twitter. |

| #14 -  Try to implement some sort of 'relational database' in MongDB |
|---|
| MongoDB is document based by nature. Instead of being relational like MySQL. You can try to do some data moddeling by restructuring your database for allowing basic relationships or references. Like embedded relationships or referenced relationships. |


[banner-topics]: https://cmda-bt.github.io/be-course-20-21/assets/banner-topics.svg