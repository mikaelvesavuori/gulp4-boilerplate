# Gulp 3 Boilerplate

## Current version
Version: 1.0.0 (20170417)

## Author
[Mikael Vesavuori](http://www.mikaelvesavuori.se), 2017

## What does the boilerplate provide?
- [Gulp 3](http://gulpjs.com) which is today's de facto standard frontend build platform
- [Browser-sync](https://www.browsersync.io) which runs a local webserver, which is then live-reloaded through Gulp's watch tasks
- [Sass](http://sass-lang.com) and [PostCSS](https://github.com/postcss/postcss) (with [PreCSS](https://github.com/jonathantneal/precss) and [cssnext](http://cssnext.io)) so you can run super-sweet CSS whether you feel the traditional preprocessor love or you'd rather want futuristic not-yet-seen wizardry
- [Babel](https://babeljs.io) which compiles your JS ES2015 code to ES5 which will run on pretty much any browser these days

## Install instructions
All of these instructions are for commands in the Terminal (Mac) or similar command-line interface on your system of choice.

You may of course also download the boilerplate as a zip, into your own project. Just don't forget to add the dependencies from package.json!

### 0a. Do you have Git installed?
Might seem like a silly question if you are reading this on GitHub but just in case :) Get it from the [Git site](https://git-scm.com/downloads) if you don't have it.

### 0b. Do you have Node installed?
Download Node from the [NodeJS site](https://nodejs.org/en/) if you haven't already.

### 0c. Do you have NPM or Yarn installed globally?
If not: ```npm install npm -g``` or ```brew install yarn```

### 1. Clone Gulp 3 Boilerplate to your computer
In your working folder, run: ```git clone https://github.com/mikaelvesavuori/gulp3-boilerplate.git```

### 2. Install dependencies
In the repository folder, run: ```npm``` or ```yarn```

### 3. Ready to go!
That's it! Now you are ready to rock that build platform like a boss.

## How do I use it?
The main commands you may want to run are outlined below.

`gulp` — Runs the default task, `build:development`.

`gulp build:development` — Does Sass and JS linting, optimization and compilation, erases the contents of the dist/ folder, outputs fresh files in the dist/ folder and then finally starts the Browser-sync local web server (live-reloading whenever you update files).

`gulp build:production` — Does all of the above but skips the local web server.

The rest of the tasks can be run separately (their function/task names are the same as their file names), but in this particular boilerplate all of them pretty much work chained and in tandem with each other. It makes more sense than individually running, for example, the Sass task.

## Logging and messages
You will see what tasks run in the command line interface and also get some messaging especially from the linting tools. I've placed a couple of minor thingamabobs that will trigger warnings – nothing bad, but just so you see that the linting tools are doing their job.

## Configuration
The collection of tools contained in this package are very, very extensible so it's natural that a fair bit of configuration needs to happen. Luckily for you, I've done most of the hard bits! Make sure to browse through all of these before really beginning to use the boilerplate, just so you know what happens and where, and that it does what you want it to do (with the right files! It's really easy to do something stupid that erases or overwrites the wrong stuff x___x).

### Gulp (gulp/config.js)
Most of the paths and settings that Gulp uses are specified in this config.js file. Make it a habit to outsource all of this to one location rather than having to hunt through all of the task files to find pathways and whatnot.

### Babel (.babelrc)
*May be hidden depending on your system settings.*

This file just sets Babel to grok ES2015. You will want to add some presets for React (and similar) in this file as well later, if you want to use stuff like that.

### Stylelint (.stylelintrc.js)
*May be hidden depending on your system settings.*

Includes a whole range of linting checks. You may love or hate this particular configuration but that's entirely your own call and preference.

### ESLint (.eslintrc.js)
*May be hidden depending on your system settings.*

This configuration is extended from the recommended ESLint linting settings. It also accepts JSX files – as with Babel you will probably want to add/extend to this file in case you use something like React.
