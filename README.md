> ######  DEV BUILD
> #######  Please note this is a work in progress. It is currently untested, and edited as a fork from kurtisdunn/Drupal-8-Starter-Gulp-SASS, with a major overhaul to the Gulp workflow.
> TODO: remove bootstrap js/css dependency as well as bootstrap classes. The plan is to be completely framework-free, and include Susy Grids for grid layout.

# Drupal-8-Gulp-Starter
A starter theme for Drupal 8 using Drush CLI, Gulp + BrowserSync for automation.


### Prerequisites

- [Drupal 8](https://www.drupal.org/drupal-8.0.2-release-notes)
- [NodeJS](https://nodejs.org/en/download/)
- [Drush CLI](http://docs.drush.org/en/master/install/) must be installed locally or globally for automating cache refresh with Gulp. it is recommended that Drupal 8 sites are built using Composer, with Drush listed as a dependency.

```sh
# Download latest stable release using the code below or browse to github.com/drush-ops/drush/releases.
wget http://files.drush.org/drush.phar
# Or use our upcoming release: wget http://files.drush.org/drush-unstable.phar

# Test your install.
php drush.phar core-status

# Rename to `drush` instead of `php drush.phar`. Destination can be anywhere on $PATH.
chmod +x drush.phar
sudo mv drush.phar /usr/local/bin/drush

# Enrich the bash startup file with completion and aliases.
drush init

```

### Usage

```sh

# clone a copy
git clone git@github.com:mlaroy/drupal-8-gulp-starter.git
cd drupal-8-gulp-starter

# get it going:
npm install

# run it
gulp watch

```
