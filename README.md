<h1 align="center"> Portfolio-Application </h1>
<p></p>

![author](https://img.shields.io/badge/author-SharmaRajan-blueviolet.svg)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](#)
![stars](https://img.shields.io/github/stars/SharmaRajan/portfolio-app.svg)
[![GitHub Forks](https://img.shields.io/github/forks/SharmaRajan/portfolio-app.svg?style=social&label=Fork&maxAge=2592000)](https://www.github.com/SharmaRajan/portfolio-app/fork)
[![GitHub Issues](https://img.shields.io/github/issues/SharmaRajan/portfolio-app.svg?style=flat&label=Issues&maxAge=2592000)](https://www.github.com/SharmaRajan/portfolio-app/issues)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&label=Contributions&colorA=red&colorB=black)](#)
![license](https://img.shields.io/github/license/SharmaRajan/portfolio-app.svg)

- **Welcome to my portfolio!** This collection showcase my work in web development, showcasing a variety of projects that demonstrate my skills in front-end and back-end development. Each project reflect my passion for creating responsive, user-friendly websites and web application.

- This software built with `Angular` using `HTML`, `CSS`, `BootStrap`.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Prerequisites

- Active internet connection :)
- Basic knowledge of Angular CLI :)
- NodeJs (20.18.0) and NPM (10.9.0) - [NodeJS Install](https://nodejs.org/en/download/package-manager/)
- [Git bash](https://git-scm.com/downloads) (for Windows users)
- The ports 4200, 5200, 8080, 8081 must be avaialable at the host machine.

### How-to run (in project root folder)

- Install frontend dependencies
```
  npm install
```

- Build project. The build artifacts will be stored in the `dist/` directory.
```
  ng build
```

## VS Code Extensions

```
	1. Code runner ( Optional)
	2. Tabnine
	3. Live server
	4. Excel viewer
	5. Codetour
	6. Todo highlight By wayou liu
	7. Drawio By henning dieterichs
	8. Polacode 2022 -> code snippet tool
	9. Spell checker
	10. Prettier -> GO to settings -> formatonsave -> ON
          [
              Cmd + Shift + P -> Open user settings json
              Paste it in settings.json file

		 {
                    "editor.defaultFormatter": "esbenp.prettier-vscode",
                    "[javascript]": {
                      "editor.defaultFormatter": "esbenp.prettier-vscode"
                  }
            ]
	11. Indent rainbow
	12. Autoclose tag
	13. REST client
	15. Material icon theme
	16. Angular language service
	17. Angular Snippets version 18
```

## Installation

### Development Server

- Open Terminal and clone the repo

```
  git clone https://github.com/SharmaRajan/portfolio-app.git
```

- Go to the portfolio-app directory and start the environment

```
  > cd portfolio-app
  > ng serve --o
```

- This `--o` will navigate to `http://localhost:4200/` as port 4200 is set default for this repo. The application will automatically reload if you change any of the source files.

### Code scaffolding

- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

- Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Deploy to GitHub Pages

**_Step 1: Install GitHub Pages Globally_**

```
    > npm install -g angular-cli-ghpages
```

**_Step 2: Add GitHub Pages in your Project_**

```
    > ng add angular-cli-ghpages
```

**_Step 3: Go to `package.json` file and paste just above `name key`_**

```
   "homepage": "https://{github-user-name}.github.io/{github-repo-name}",
```

**_Step 4: In `package.json` file paste the command inside script (This is optional)_**

```
    "predeploy" : "npm run build",
    "deploy": "gh-pages -d build"
```

**_Step 5: build the project using GitHub Repo Name_**

```
   > ng build --output-path=dist --base-href=/{github-repo-name}/
```

**_Step 6: Deploy local folder `dist/browser` to GitHub Pages_**

```
   > ngh --dir=dist/browser
```

**_Step 7: Push Code to GitHub Repo_**

<hr>

<h1 align="left">Hey there, I'm <a href="https://www.linkedin.com/in/rajan-kumar-sharma-709a17229/">Rajan </a><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28"> - A curious engineer tinkerer at heart</h1>

## 👨‍💻 Technical Skills & Expertise

- Development of Web Applications.
- Web Scraping, Browser Automation, Python Scripting

<h2 align="left">🌐 Connect</h2>
<a href="mailto:mr.sharmajeerajan@gmail.com"><img src="images5/gmail-96.svg" width="32px" height="32px"></a> <a href="https://www.linkedin.com/in/rajan-kumar-sharma-709a17229/"><img src="images5/linkedin.png" width="32px" height="32px"></a>
<a href="https://x.com/RajanS5259"><img src="images5/twitter.png" width="32px" height="32px"></a> <a href="https://www.instagram.com/impervious.aviral/"><img src="images5/instagram-144.png" width="32px" height="32px"></a>


## Contributing

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](#)

If you find any bug in the code or have any improvements in mind then feel free to generate a pull request.

Contributions are very welcome!

You can also ask for problem solving ideas and discuss in GitHub issues directly.

## Issues

[![GitHub Issues](https://img.shields.io/github/issues/SharmaRajan/portfolio-app.svg?style=flat&label=Issues&maxAge=2592000)](https://www.github.com/SharmaRajan/portfolio-app/issues)

If you face any issue, you can create a new issue in the Issues Tab and I will be glad to help you out.

## Need help?

```javascript
if (needHelp === true) {
  var emailId = "mr.sharmajeerajan@gmail.com";
  // email is the best way to reach out to me.
  sendEmail(emailId);
}
```

- Feel free to reach out if you're looking for a dedicated and collaborative partner!

**Share your story([mr.sharmajeerajan@gmail.com](https://mail.google.com/mail/))** if you're using this repo for your mini/course project. I will be more than happy to know how does this project helped you.

[![GMAIL](https://img.shields.io/static/v1.svg?label=send&message=mr.sharmajeerajan@gmail.com&color=red&logo=gmail&style=social)](mailto:mr.sharmajeerajan@gmail.com) [![GitHub followers](https://img.shields.io/github/followers/SharmaRajan.svg?label=Follow&style=social)](https://github.com/SharmaRajan)


## License
[![Author](https://img.shields.io/static/v1.svg?label=Author&message=@SharmaRajan&logo=github&style=social)](https://github.com/SharmaRajan/)

**MIT &copy; [Rajan Sharma](https://github.com/SharmaRajan/portfolio-app)**

## Oh, Thanks!

Thank you for being here!
This project has saved me and my friends for many times in college.

```bash

   ____ _           _    _
  / ___| | __ _  __| |  | |_ ___
 | |  _| |/ _` |/ _` |  | __/ _ \
 | |_| | | (_| | (_| |  | || (_) |
  \____|_|\__,_|\__,_|   \__\___/

  ___  ___  ___
 / __|/ _ \/ _ \
 \__ \  __/  __/
 |___/\___|\___|

                      _                  _
  _   _  ___  _   _  | |__   ___ _ __ ___| |
 | | | |/ _ \| | | | | '_ \ / _ \ '__/ _ \ |
 | |_| | (_) | |_| | | | | |  __/ | |  __/_|
  \__, |\___/ \__,_| |_| |_|\___|_|  \___(_)
  |___/


```

<hr>

```javascript
if (isAwesome) {
  // thanks in advance :p
  starThisRepository();
}
```

---

- [↑↑↑ GO TO TOP ↑↑↑](#prerequisites)
