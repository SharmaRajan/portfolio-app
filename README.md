# PortfolioApp

![author](https://img.shields.io/badge/author-SharmaRajan-blueviolet.svg)![issues](https://img.shields.io/github/issues/SharmaRajan/portfolio-app.svg)![stars](https://img.shields.io/github/stars/SharmaRajan/portfolio-app.svg)![forks](	https://img.shields.io/github/forks/SharmaRajan/portfolio-app.svg)![license](https://img.shields.io/github/license/SharmaRajan/portfolio-app.svg)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

Portfolio software built with Angular using HTML, CSS, BootStrap.

https://github.com/SharmaRajan/portfolio-app/issues


## Contributing

Contributions are very welcome!

If you see an problem that you'd like to see fixed, the best way to make it happen is to help out by submitting a pull request implementing it. 

[//]: # (Refer to the [CONTRIBUTING.md]&#40;https://github.com/SharmaRajan/portfolio-app/blob/master/CONTRIBUTING.md&#41; file for more details about the workflow.)

You can also ask for problem solving ideas and discuss in GitHub issues directly.


[//]: # (## INDEX)

## Prerequisites
- Active internet connection :)
- Basic knowledge of Angular CLI :)
- [Git bash](https://git-scm.com/downloads) (for Windows users)
- The ports 4200, 5200, 8080, 8081 must be avaialable at the host machine.


# Setup
### Development Server

- Simply clone this repo and run command in Terminal

  ```
  > cd portfolio-app
  > ng serve --o
  ```
- This `--o` will navigate to `http://localhost:4200/` as port 4200 is set default for this repo. The application will automatically reload if you change any of the source files.


### Code scaffolding

- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

- Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Deploy to GitHub Pages

***Step 1: Install GitHub Pages Globally***

  ```
  > npm install -g angular-cli-ghpages
  ```

***Step 2: Add GitHub Pages in your Project***

  ```
  > ng add angular-cli-ghpages
  ```

***Step 3: Go to `package.json` file and paste just above `name key`***

  ```
    "homepage": "https://{github-user-name}.github.io/{github-repo-name}",
  ```

***Step 4: In `package.json` file inside script paste the command (This is optional)***

```
    "predeploy" : "npm run build",
    "deploy": "gh-pages -d build"
```


***Step 5: build the project using GitHub Repo Name***

```
    ng build --output-path=dist --base-href=/{github-repo-name}/
```


***Step 6: Deploy local folder `dist/browser` to GitHub Pages***

```
    ngh --dir=dist/browser
```


***Step 7: Push Code to GitHub Repo***




- [↑↑↑ GO TO TOP ↑↑↑](#setup)
