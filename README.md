> ######  DEV BUILD
> #######  Please note this is a work in progress. It is currently untested, and edited as a fork from kurtisdunn/Drupal-8-Starter-Gulp-SASS, with a major overhaul to the Gulp workflow.

# Drupal 8 Webpack Starter
A starter theme for Drupal 8 using Drush CLI, KSS, Gulp + BrowserSync for automation.


### Assumptions

- A new [Drupal 8](https://www.drupal.org/drupal-8.0.2-release-notes) install is running.
- [NodeJS](https://nodejs.org/en/download/)
- [Drush CLI](http://docs.drush.org/en/master/install/) must be installed locally or globally for automating cache refresh with Gulp. it is recommended that Drupal 8 sites are built using Composer, with Drush listed as a dependency.

```sh
brew install drush

drush dl drupal-8

# clone a copy into your themes directory
cd themes
mkdir custom
cd custom
git clone git@github.com:mlaroy/drupal-8-webpack-starter.git theme-name
cd theme-name

# get it going with the latest Node:
nvm use stable
npm install

# run it
gulp watch

```
