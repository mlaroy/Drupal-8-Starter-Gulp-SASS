import * as svgInjector from 'svg-injector';

const mySVGsToInject = document.querySelectorAll('img.svg-inject');
// Do the injection
svgInjector(mySVGsToInject);