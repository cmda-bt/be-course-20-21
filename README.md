 # ![Backend - Course 2020-2021][banner]

> **Note**: Back-end has concluded for 2020/2021. Next year will be a new, changed, curriculum. Have a look at the [`/examples`](/examples) folder to see some results from this year. A big thank you to our all our students, student assistants and teachers!

## Table of Content

*   [Synopsis](#synopsis)
*   [Description](#description)
*   [Communication](#communication)
*   [Goals](#goals)
*   [Grade](#grade)
*   [Programme](#programme)
*   [Conduct](#conduct)
*   [Statements](#statements)
*   [License](#license)

## Synopsis

The course **Back-end** is given at [**@CMDA**][cmda] in 2021 between February 3 and June 26.

*   **Course**: [Backend Development][course] (`2000BAD_16`)
*   **Coordinator**: [Danny de Vries][dangit] - d.de.vries4@hva.nl
*   **Lecturers**:
    [Danny de Vries][dangit] ([**@dandevri**][danweb]),
    [Sonja Rouwhorst][songit] ([**@rouws**][songit]) and [Ioannis Kapritsias][jangit] ([**@turiguilano**][janweb])
*   **Credit**: 3 ECTS
*   **Academic year**: 2020-2021
*   **Period**: Quarter 3 (spring)
*   **University**: [Amsterdam University of Applied Sciences][university]
*   **Programme**: [Communication and Multimedia Design][cmd] (full time bachelor CROHO: `34092`)
*   **Faculty**: [Digital Media and Creative Industries][faculty]
*   **Language**: Dutch instructions and English resources
*   **Entry requirements**: N/A

## Description
In Back-end we peek behind the curtains and inspect what’s behind the web. You build web apps with [Node.js][node], communicate with [HTTP][http], and store data in a database with [MongoDB][mongodb]. In this course you’ll advance your web dev skills. You’ll learn to use computers to actually make what you design work: people can actually fill in forms, like things, and upload files.

Back-end is an elective course given in Quarter 3 (spring) after the core curriculum of our programme, building further on knowledge acquired in *Internetstandaarden*, *Inleiding Programmeren*, and *Blok Web*. This course is chosen alongside **Frontend 2** and **Project Tech**, together making up Block Tech. 

If you’d like to continue with web development after this course, do a tech internship, choose the [Tech Track][track] for the fall semester next year, and pick [Minor Everything Web][minor] in the spring semester after that. Just a quick check if anyone actually reads this: if you see this, please send your teacher a picture of your favorite animal.

_Back-end is part of the  CMD Amsterdam **design & build space** (technical course) that focusses on   Conceptualizing (2), Imagining and creating (3), Multidisciplinary collaboration (5) & Research (9) competences._ 

## Communication

*   [GitHub][gh] — Main source of information, slides, assignments and more
*   [Microsoft Teams][teams] — General chatter and Q&A
*   [Brightspace][brightspace] — Schedulers, rubrics and grading
  

If you have questions:

*   Read the manual for the technology in question
    ([Git](https://git-scm.com/docs),
    [GitHub](https://guides.github.com),
    [Node](https://nodejs.org/api/),
    [npm](https://docs.npmjs.com),
    [express](http://expressjs.com/en/4x/api.html),
    [MongoDB](https://docs.mongodb.com))
*   [Browse examples][examples]
*   [Search StackOverflow][stackoverflow]
*   [Use a search engine like DuckDuckGo][duckduckgo]
*   [Ask questions on MS Teams][teams]

> This course doesn't have office hours. Teachers have limited time to help you outside of class. Attendance to class is not compulsory. 80% of success in this course is showing up, so show up and come prepared with your questions. Don't hesitate to ask questions or feedback during class.

## Goals

### Main goals

The main goals in this course:

* You can build web apps with Node and use packages from NPM
* You can communicate over HTTP and understand the client / server flow
* You can render data server-side with a templating engine
* You can store data in a database and update that data
* You can write documentation that other developers understand
* You can explain your code and the cohesion (flow) of your application

### Sub goals

In practice you’ll learn to:

* <a name="subgoal-1"></a>
    Understand Node principles ([**week 1**][w1])
*  <a name="subgoal-2"></a>
    Use packages from npm ([**week 1**][w1])
* <a name="subgoal-3"></a>
    Use web frameworks like express ([**week 2**][w2])
* <a name="subgoal-4"></a>
    Communicate over HTTP ([**week 2**][w2])
* <a name="subgoal-5"></a>
    Render data server-side with templating ([**week 2**][w2])
* <a name="subgoal-6"></a>
    Upload data and files to servers ([**week 3**][w3])
* <a name="subgoal-7"></a>
    Request data from clients ([**week 3**][w4])
* <a name="subgoal-8"></a>
    Store and update data in a MongoDB database ([**week 4**][w4])
* <a name="subgoal-9"></a>
    Use localStorage to store data client-side ([**week 4**][w4])
* <a name="subgoal-10"></a>
    _Pick your own topic to work on (deploy, security etc.)_ ([**week 5+**][w5])

The below table breaks down the general time needed per week.

| Week | Effort | Topic            | Activities                                             |
| ---- | -----: | ---------------- | ------------------------------------------------------ |
| 0    |  NaN   | getting started  | [getting started][gs]                                  |
| 1    |  9:20h | node & express   | [lab][w1lab], [lecture][w1lec], [assignments][w1a]     |
| 2    |  9:20h | query & template | [lab][w2lab], [lecture][w2lec], [assignments][w2a]     |
| 3    |  9:20h | http             | [lab][w3lab], [lecture][w3lec], [assignments][w3a]     |
| 4    |  9:20h | database         | [lab][w4lab], [lecture][w4lec], [assignments][w4a]     |
| 5    |  NaN   | assessment 1     | [a1 (oral test)][grading]                              |
| 6    | 13:20h | topic          | [lab][w6lab],  work on prototype                       |
| 7    | 13:20h | topic        | [lab][w6lab],  work on prototype                       |
| 8    |  NaN   | assessment 2     | [a2 (oral test)][grading]                              |  

> Check [`rooster.hva.nl`][class] for exact class dates

## Grade

| Task                                |   Weight |
| ----------------------------------  | -------: |
| [Assessment 1][grading] (individual)|      60% |
| [Assessment 2][grading] (team)      |      40% |
| **Total**                           | **100%** |


```js
if (!a1 && !a2) {
  grade = 'GR'
} else if (a1 < 5.5 || a2 < 5.5) {
  grade = 1
} else {
  grade = (a1 * 0.6) + (a2 * 0.4)
}
```

## Programme

This course is given at [Communication and Multimedia Design][bachelor], a
design bachelor focused on interactive digital products and services.  CMD is
part of the [Faculty of Digital Media and Creative Industries][faculty] at the
[Amsterdam University of Applied Sciences][university].

Our curriculum and course material are publicly available on the Block Tech (github.com/cmda-bt) GitHub organization. We follow the global trend to make teaching materials accessible to everyone inspired by the [Open Education Global][oec].

## Conduct

This course has a [Code of Conduct][coc].  Anyone interacting with this repository, organisation, or community is bound by it. Staff and students of the Amsterdam University of Applied Sciences (Hogeschool
van Amsterdam) are additionally bound by the [Regulation Undesirable
Conduct][ruc] ([Regeling Ongewenst Gedrag][rog]).

## Statements

We are dedicated to provide you with a learning environment that is _rigorous, respectful and supportive_ so you can engage in the free exchange of ideas and commit yourself fully to the study of your discipline. To that end we are committed to enforce important AUAS policies. You can find our policies and statements (e.g. accessibility, health, plagiarism) in the `docs` folder.

## License

[MIT][] © [Danny de Vries][dangit], docs and images are [CC-BY-4.0][].

[banner]: https://cmda-bt.github.io/be-course-20-21/assets/banner.svg
[cmd]: https://www.cmd-amsterdam.nl/english/
[cmda]: https://github.com/cmda
[dangit]: https://github.com/dandevri
[danweb]: https://github.com/dandevri
[songit]: https://github.com/rouws
[jangit]: https://github.com/TuriGuilano
[janweb]: https://www.softsquare.nl
[node]: https://nodejs.org/en/
[mongodb]: https://www.mongodb.com/
[http]: https://tools.ietf.org/html/rfc2068
[minor]: https://cmda.github.io/minor-everything-web/
[track]: https://github.com/cmda-tt
[gh]: https://github.com/cmda-be/course-18-19
[examples]: /examples
[teams]: http://teams.microsoft.com
[brightspace]: https://dlo.mijnhva.nl/d2l/home/192551
[examples]: examples
[stackoverflow]: https://stackoverflow.com
[duckduckgo]: https://duckduckgo.com
[synopsis]: #synopsis
[grading]: /grading
[bachelor]: https://www.cmd-amsterdam.nl/english/
[faculty]: https://www.amsterdamuas.com/faculty/fdmci/faculty-of-digital-media-and-creative-industries.html
[university]: https://www.amsterdamuas.com
[coc]: code-of-conduct.md
[ruc]: https://www.amsterdamuas.com/practical-matters/algemeen/hva-breed/juridische-zaken/legal-affairs/regulation-undesirable-conduct/regulation-undesirable-conduct.html#anker-3-complaints-authority
[rog]: https://www.hva.nl/praktisch/algemeen/hva-breed/juridische-zaken/loket-beroep-bezwaar-en-klacht/regeling-ongewenst-gedrag/regeling-ongewenst-gedrag.html?origin=gbS4rg%2FDTZuxQ6lGVF%2BN1A
[author]: https://dandevri.es
[mit]: license.md#code
[cc-by-4.0]: license.md#documentation-and-images
[faq]: https://dlo.mijnhva.nl/d2l/lms/faq/view_faq.d2l?ou=32096
[class]: https://rooster.hva.nl/
[course]: https://studiegids.hva.nl/#/cmd-vt/1/010624
[oec]: https://www.oeglobal.org

[gs]: getting-started.md

[w1]: week-1.md
[w2]: week-2.md
[w3]: week-3.md
[w4]: week-4.md
[w5]: week-5.md
[w6]: week-6.md
[w7]: week-7.md

[w1lec]: week-1.md#lecture
[w2lec]: week-2.md#lecture
[w3lec]: week-3.md#lecture
[w4lec]: week-4.md#lecture
[w5lec]: week-5.md#lecture
[w6lec]: week-6.md#lecture

[w1lab]: week-1.md#lab
[w2lab]: week-2.md#lab
[w3lab]: week-3.md#lab
[w4lab]: week-4.md#lab
[w5lab]: week-5.md#lab
[w6lab]: week-6.md#lab

[w1a]: week-1.md#assignments
[w2a]: week-2.md#assignments
[w3a]: week-3.md#assignments
[w4a]: week-4.md#assignments
