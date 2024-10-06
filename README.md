<h1 align="center"> Portfolio-Application </h1>
<p></p>

![author](https://img.shields.io/badge/author-SharmaRajan-blueviolet.svg)![issues](https://img.shields.io/github/issues/SharmaRajan/portfolio-app.svg)![stars](https://img.shields.io/github/stars/SharmaRajan/portfolio-app.svg)![forks](	https://img.shields.io/github/forks/SharmaRajan/portfolio-app.svg)![license](https://img.shields.io/github/license/SharmaRajan/portfolio-app.svg)
------

- Welcome to my portfolio! This collection showcase my work in web development, showcasing a variety of projects that demonstrate my skills in front-end and back-end development. Each project reflect my passion for creating responsive, user-friendly websites and web application.

- This software built with `Angular` using `HTML`, `CSS`, `BootStrap`.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

------

## Contributing

Contributions are very welcome!

If you see an problem that you'd like to see fixed, the best way to make it happen is to help out by submitting a pull request implementing it. 

[//]: # (Refer to the [CONTRIBUTING.md]&#40;https://github.com/SharmaRajan/portfolio-app/blob/master/CONTRIBUTING.md&#41; file for more details about the workflow.)

You can also ask for problem solving ideas and discuss in GitHub issues directly.

-----

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

-----

# Installation
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


-----

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
   > ng build --output-path=dist --base-href=/{github-repo-name}/
```


***Step 6: Deploy local folder `dist/browser` to GitHub Pages***

```
   > ngh --dir=dist/browser
```


***Step 7: Push Code to GitHub Repo***





[//]: # (### 2. Change the Google Maps Api)

[//]: # (- Get [Google Map api]&#40;https://developers.google.com/maps/documentation/android/signup&#41;)

[//]: # (- Now go to : [app\src\release\res\values\google_maps_api.xml]&#40;app\src\release\res\values\google_maps_api.xml&#41;)

[//]: # (- and replace the "google_maps_key" with your own google map api key.)




## License

---

[//]: # (- [@Rajan_Kumar_Sharma]&#40;https://github.com/SharmaRajan/portfolio-app&#41;)


[![Author](https://img.shields.io/static/v1.svg?label=Author&message=@SharmaRajan&logo=github&style=social)](https://github.com/SharmaRajan/)

**MIT &copy; [Rajan Sharma](https://github.com/SharmaRajan/portfolio-app)**

<a href="https://x.com/RajanS5259"><img src="images5/twitter.png" width="32px" height="32px"></a> <a href="https://www.linkedin.com/in/rajan-kumar-sharma-709a17229/"><img src="images5/linkedin.png" width="32px" height="32px"></a>



[//]: # (## 🔗 Links)

[//]: # ([![portfolio]&#40;https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white&#41;]&#40;https://sharmarajan.github.io/portfolio-app/&#41;)

[//]: # ([![linkedin]&#40;https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&#41;]&#40;https://www.linkedin.com/in/rajan-kumar-sharma-709a17229/&#41;)

[//]: # ([![github]&#40;https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=black&#41;]&#40;https://twitter.com/MoAhsanKhan5&#41;)

[//]: # ()



## Oh, Thanks!

-----

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

-----

## Need help?

```javascript

  if (needHelp === true) {
     var emailId = "mr.sharmajeerajan@gmail.com";
     // email is the best way to reach out to me.
     sendEmail(emailId);
  }

```
* Feel free to reach out if you're looking for a dedicated and collaborative partner!


**Share your story([mr.sharmajeerajan@gmail.com](https://mail.google.com/mail/))** if you're using this repo for your mini/course project. I will be more than happy to know how does this project helped you.

[![GMAIL](https://img.shields.io/static/v1.svg?label=send&message=mr.sharmajeerajan@gmail.com&color=red&logo=gmail&style=social)](mailto:mr.sharmajeerajan@gmail.com) [![GitHub followers](https://img.shields.io/github/followers/SharmaRajan.svg?label=Follow&style=social)](https://github.com/SharmaRajan)


<!-- [![Email Badge](https://img.shields.io/badge/Gmail-Contact_Me-green?style=flat-square&logo=gmail&logoColor=FFFFFF&labelColor=3A3B3C&color=62F1CD)](mailto:mr.sharmajeerajan@gmail.com) -->

* Invite me to connect on [LinkedIn](https://www.linkedin.com/in/rajan-kumar-sharma-709a17229/).

------

```javascript

  if (isAwesome) {
    // thanks in advance :p
    starThisRepository();
  }
  
```

-----


- [↑↑↑ GO TO TOP ↑↑↑](#contributing)
