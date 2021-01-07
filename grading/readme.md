# ![Backend - Grading][banner]

## Table of Contents

*   [Grading](#grade)
*   [Goals](#lgoals)
*   [Assessments](#assesments)
*   [Publishing](#publishing)
*   [Plagiarism](#plagiarism)

## Grading

| Task                                |   Weight |
| ----------------------------------  | -------: |
| [Assessment 1][a1] (individual)        |      60% |
| [Assessment 2][a2] (team)            |      40% |
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

> You can find your feedback and final calculated grade in Brightspace under `administration > grades`.

## Goals

The main goals in this course:

* You can build web apps with Node and use packages from NPM
* You can communicate over HTTP and understand the client / server flow
* You can render data server-side with a templating engine
* You can store data in a database and update that data
* You can write documentation that other developers understand
* You can explain your code and the cohesion (flow) of your application

## Assessments

### A1 - Feature (Individual)
This is an *oral test* where you individually present the **feature you created** for back-end. You will answer questions in such a way as to demonstrate sufficient knowledge of our goals.

→ [Rubric of assessment 1][a1]

### A2 - Application (Team)
This is an *oral test* where you **present your prototype with your team**. You will show how you contributed to the project and explain if you reached your own goals you've set at the beginning of the project.

→ [Rubric of assessment 2][a2]

## Plagiarism

Plagiarism is presenting someone else’s work as though it were your own. We report it to our assessment committee
([examencommissie](https://moodle.cmd.hva.nl/mod/page/view.php?id=1738) in Dutch). For more on plagiarism read our [_statement of academic integrity_](https://github.com/cmda-bt/be-course-20-21/blob/main/docs/plagiarism.md).


## Publishing
Grades will be published and communicated in _Brightspace_ and/or _MS Teams_. We also publish grade lists on _Brightspace_ based on student numbers.

* Final grades will be **published** ~_one week_ after test date.
* Final grades will be put in **SIS** ~_two weeks_ after test date.

> After the first oral test you can request **viewing time** for additional feedback, this can be useful for a resit. Feel free to [contact your lecturer trough _MS Teams_](/readme#synopsis) if you want to do so.

[a1]: https://github.com/cmda-bt/be-course-20-21/blob/master/grading/a1.md
[a2]: https://github.com/cmda-bt/be-course-20-21/blob/master/grading/a2.md
[banner]: https://cmda-bt.github.io/be-course-18-19/assets/banner-grading.svg
[grading]: /grading/readme.md