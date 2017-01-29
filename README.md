# Ang2Review
Angular 2 Overview before App Implementation

### Pre-work
- Install typings -g
- typings install dt~core-js dt~jasmine dt~node --save --global
 - typings tells typescript about the packages above

### package.json scripts
- tsc: start typscript
- tsc:w : typscript watch
- typings: typings
- postinstall: typings install  //If not installed

npm install concurrently
npm start script runs everything together using concurrently


Creating .ts files while running the concurrent start function will auto create .js files

### Core Package Dependencies

- Core JS Shim -> adds features for browsers
- Zone.JS -> Helps track down errors in application
- Reflect Metadata->  metadata to classes
- RxJS -> Reactive Apps Async Observables instead of promises
- SystemJS -> Load different modules etc

npm install core-js reflect-metadata zone.js rxjs systemjs --save

### Angular Packages
- @Angular/Core
- @Angular/Common
- @Angular/Compiler
- @Angular/platform-browser
- @Angular/platform-browser-dynamic

Extras
- @angular/router
- @angular/http
- @angular/forms
- @angular/upgrade

npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router @angular/upgrade --save


### ServerJS
- Could also use WebPack ... Angular CLI uses Webpack docs have ServerJS
-
