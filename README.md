> ######  DEV BUILD
> #######  Please note this is a work in progress. It is currently untested, and edited as a fork from kurtisdunn/Drupal-8-Starter-Gulp-SASS, with a major overhaul to the Gulp workflow.

# Drupal 8 Webpack Starter
A starter theme for Drupal 8 using Drush CLI, KSS, Webpack + BrowserSync for automation.


#### Assumptions

- A new [Drupal 8](https://www.drupal.org/drupal-8.0.2-release-notes) install is running.
- [NodeJS](https://nodejs.org/en/download/)
- [Drush CLI](http://docs.drush.org/en/master/install/) must be installed locally or globally for automating cache refresh with Gulp. it is recommended that Drupal 8 sites are built using Composer, with Drush listed as a dependency.

```sh
brew install drush
drush dl drupal-8
```

### Clone a copy into your themes directory
```sh
cd drupal-site/themes
mkdir custom
cd custom
git clone git@github.com:mlaroy/drupal-8-webpack-starter.git theme-name
cd theme-name
```

### Get it going with the latest Node:
```sh
nvm use stable
npm install
```
Clean out this git history and start a new repo for your new project
```sh
rm -rf .git && git init
git commit -m "Initialized with Drupal Webpack Starter"
```

You now have all the necessary dependencies to run the build process.

### Build commands

* `npm start` — Compile assets when file changes are made, start BrowserSync session
* `npm run build` — Compile and optimize the files in your assets directory
* `npm run build:production` — Compile assets for production

#### Additional commands

* `npm run clean` — Remove your `dist/` folder
* `npm run lint` — Run eslint against your assets and build scripts
* `composer test` — Check your PHP for code smells with `phpmd` and PSR-2 compliance with `phpcs`

### Using BrowserSync

To use BrowserSync during `npm start` you need to update `devUrl` at the bottom of `assets/config.json` to reflect your local development hostname.

If your local development URL is `https://project-name.dev`, update the file to read:
```json
...
  "devUrl": "https://project-name.dev",
...
```

Update `publicPath` to reflect your folder structure:

```json
...
  "publicPath": "/themes/custom/theme-name/"
...
```


## Run it
```sh
npm start
```
