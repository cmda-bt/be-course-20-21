# ![Backend - Getting Started][banner-guide]

## Table of Contents

*   [Description](#description)
*   [Prerequisites](#prerequisites)
*   [Installation](#installation)
*   [Communication](#communication)

## Description

👋 **Welcome to back-end!** 

This getting started guide will get you up and running with all the software and tools you need for this course. Throughout this guide there are additional video's that further explain important topics from lectures but also show you how to install certain technology. Look for a 🎦 emoji!

## Prerequisites

This guide assumes you already followed the **getting started guide from project-tech**. So you should already have a _Text Editor_, _GitHub account_ and _configured Git_.

## Installation

### Node

Open your **terminal**, and install [nvm](https://github.com/creationix/nvm) like
so:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

You can check if `nvm` correctly installed by typing:
```sh
nvm --version # Should print a version number
```

> There is a chance you get a `nvm command not found` error message. That means that there was a problem with installing NVM. In some cases you'll have to [manually load NVM in your profile](https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found).

Close and re-open your terminal and now run the following:

```sh
nvm install stable
```

Node is now installed (and npm with it). You can check it by running:

```sh
node -v # Should print 9.4.0 (or a higher version)
npm -v # Something like 5.6.0 (or a higher version)
```

[🎦 _Watch a video_ on how to install Node.][videonode]

You can use **nvm** to update Node in the future.  npm can update itself
(`npm install -g npm`).

> You might encouter an [`eaccess`][eacces] problem if you installed Node using the [installer][installer]. We do not recommend using a Node installer but the Node version manager (nvm) as stated above, since the Node installation process installs npm in a directory with local permissions and can cause permissions errors when you run npm packages globally.

### Additional tools (optional)
Installing Node and NPM is enough for the first couple of weeks. But additionally you can already install some tools we'll use from _week-4 and onwards._

#### MongoDB Cloud

You can already create a [MongoDB Cloud account](https://www.mongodb.com/cloud).  This is where will host our database. The sign-up process will mostly speak for itself. Follow the sign-up instructions on the MongoDB Cloud website. 

To make working with your database a little easier you can also install [MongoDB Compass](https://www.mongodb.com/products/compass), A GUI for MongoDB to visually explore your data. Install it and sign-up with your account.

## Communication

### Brightspace

We use our DLO Brightspace for schedulers and rubric feedback. Make sure you enroll to the **Back-end Development** course, you can do so by using the [HvA courseselector][course]. It's important to **select the right class** for teachers to give you feedback and grades. If you're not sure, ask your teacher to see if you are on the correct _classlist_.

### Microsoft Teams

Sign up for our _Blok-Tech_ MS Team. **You can find the sign-up code in the announcement on Brightspace.** Join the `#backend` channel in our team. Get your account set up properly, add your  **real name**, **a profile picture**, and you can even set your **GitHub username** as a status message. We’ll use this info to link your GitHub and MS Teams account to our administration files.

[🎦 _Watch a video_ on how to ask questions][videoask]

### GitHub

GitHub is a social platform so give this repository `be-course-20-21` [a ⭐ star][star] and start [following][follow] your teachers and fellow students!

**_Wow, you did it! You finished the getting started guide for back-end. Virtual high five! 🖐_**

[examples]: examples
[stackoverflow]: https://stackoverflow.com
[duckduckgo]: https://duckduckgo.com
[synopsis]: #synopsis
[banner-guide]: https://cmda-bt.github.io/be-course-20-21/assets/banner-guide.svg
[installer]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[eacces]: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
[notifications]: https://help.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications
[course]: https://courseselector.mijnhva.nl/nl#/CourseSelector/78076118-8f51-e911-a82e-000d3a29a761/2019-2020

[videonode]: https://www.youtube.com/watch?v=EQWyWQhphGw
[videoask]: https://www.youtube.com/watch?v=0CARthL2RPo
[star]: https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/saving-repositories-with-stars
[follow]: https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/following-people
