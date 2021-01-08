# ![Backend - Topics][banner-topics]

The last weeks of back-end (team project) you'll pick (at minimum, but you can do multiple for a higher grade) 1 topic to work on for the team assessment. So apart from 'just' building the application and making a coherent application from all the individual features you do a deep dive in one topic related to back-end. These topics range from security enhancements, application structure to performance optimizations.

So we give you a starting point but you do your own research. In A2 you show the code of the topic; **implementation** but also the **research** in your wiki. 

* We assess the quality of the code of the topic, how complex it is? What of the topics did you implement? 
* We also look at the research were you document your research. What sources, articles etc. did you read? Did you explain your topic in your own words? Can you offer alternatives?

> These are _20 topics we as teachers came up with_ but if you always wanted to learn something that's not on the list below pitch it to your teacher! If you have a good idea for a topic to work you can always message your teacher on MS Teams with your plan.

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
| Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately. https://expressjs.com/en/advanced/best-practice-security.html#use-helmet |

| #7 - Use rate-limiter to protect against brute-force attacks  |
|---|
| https://blog.risingstack.com/node-js-security-checklist/ |

| #8 - Has the passwords you store in the database |
|---|
| Password hashing |





## API's

| #8 - Fetch a _public_ external API from the server and render that data |
|---|
| https://www.youtube.com/watch?v=tc8DU14qX6I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=3 |

| #9 - Fetch an external API from the server that _requires 0AUTH_ and render that data |
|---|
| https://www.youtube.com/watch?v=tc8DU14qX6I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=3 |

## Testing

| #10 - Implement continous deployment |
|---|
| Travis |

| #11 - Implement unit Testing |
|---|
| Moccha |

## Database

| #13 - Use Mongoose to object model your database |
|---|
| Moccha |

| #14 - Implement user authentication with passport.js |
|---|
| http://www.passportjs.org |

| #15 -  Try to implement some sort of relation database in mongdb |
|---|
| MongoDB is document based |





[banner-topics]: https://cmda-bt.github.io/be-course-20-21/assets/banner-topics.svg