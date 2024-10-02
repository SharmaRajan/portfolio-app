import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project} from '../../_models/Project';
import { Tag } from '../../_models/Tag';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  project: Project = {
    id :0,
    name: 'Portfolio Website',
    summary: 'A responsive portfolio website built using Angular',
    description: 'This website showcases my projects, skills, and experiences.',
    projectLink: 'https://github.com/rajansharma1997/portfolio-app',
    pictures: ['assets/images/portfolio/portfolio1.jpg', 'assets/images/portfolio/portfolio2.jpg', 'assets/images/portfolio/portfolio3.jpg'],
    tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP]
  }

  project1: Project = {
    id :1,
    name: 'Fuel Locator',
    summary: 'A responsive fuel locator website built using Angular',
    description: 'Shows location of the petrol pump where petrol is available to purchase.',
    projectLink: 'https://github.com/rajansharma1997/portfolio-app',
    pictures: ['assets/images/portfolio/portfolio1.jpg', 'assets/images/portfolio/portfolio2.jpg', 'assets/images/portfolio/portfolio3.jpg'],
    tags: [Tag.ANGULAR, Tag.Java, Tag.HTML, Tag.SPRINGBOOT]
  }

  project2: Project = {
    id :2,
    name: 'Video Streaming App',
    summary: 'A responsive video streaming website built using React Native and Vite',
    description: 'Youtube Like feature to stream and upload videos to server and play it.',
    projectLink: 'https://github.com/rajansharma1997/portfolio-app',
    pictures: ['assets/images/portfolio/portfolio1.jpg', 'assets/images/portfolio/portfolio2.jpg', 'assets/images/portfolio/portfolio3.jpg'],
    tags: [Tag.REACTNATIVE, Tag.Java, Tag.SPRINGBOOT, Tag.HTML]
  }

  project3: Project = {
    id :3,
    name: 'Blogging App',
    summary: 'A responsive blogging website built using Angular',
    description: 'Create blogs, update blogs, like and comment on other users blog post.',
    projectLink: 'https://github.com/rajansharma1997/portfolio-app',
    pictures: ['assets/images/portfolio/portfolio1.jpg', 'assets/images/portfolio/portfolio2.jpg', 'assets/images/portfolio/portfolio3.jpg'],
    tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP]
  }

  // Array of projects
  // projects: Project[] = [this.project, this.project1, this.project2, this.project3];
  // projects: Project[] = [
  //   // {id: 0, name:'Sample Python Project', summary: 'Python Project that analyzes stock market data',description: 'Sample Python Project',projectLink: "www.github.com", pictures: [], tags: []},
  //   // {id: 1, name:'Sample Angular App', summary: 'Full Stack web app developed using Angular and Node.JS',description: 'Sample Angular Project',projectLink: "www.github.com", pictures: [], tags: []},
  //   // {id: 2, name:'Sample .Net App', summary: 'Full Stack web app developed using React and ASP.NET',description: 'Sample .Net Project',projectLink: "www.github.com", pictures: [], tags: []},
  //   // {id: 3, name:'Web API Project', summary: 'Web API project that was developed for a class project',description: 'Web API Project',projectLink: "www.github.com", pictures: [], tags: []},
  //   // {id: 4, name:'Chrome Extension', summary: 'Developed a chrome extension that tracks the prices of furniture',description: 'Sample Chrome Extension Project',projectLink: "www.github.com", pictures: [], tags: []},
  //   // {id: 5, name:'Mobile App', summary: 'Mobile app developed in Java that tracks the departure and arrivals of trains',description: 'Sample Mobile App Project',projectLink: "www.github.com", pictures: [], tags: []},
  //   {id: 6, name:'Fuel Locator', summary: 'A responsive fuel locator website built using Angular',description: 'Shows location of the petrol pump where petrol is available to purchase.',projectLink: "www.github.com", pictures: [], tags: [Tag.ANGULAR, Tag.Java, Tag.HTML, Tag.SPRINGBOOT]},
  //   {id: 7, name:'Video Streaming App', summary: 'A responsive video streaming website built using React Native and Vite',description: 'Youtube Like feature to stream and upload videos to server and play it.',projectLink: "www.github.com", pictures: [], tags: [Tag.REACTNATIVE, Tag.Java, Tag.SPRINGBOOT, Tag.HTML]},
  //   {id: 8, name:'Blogging App', summary: 'A responsive blogging website built using Angular',description: 'Create blogs, update blogs, like and comment on other users blog post.',projectLink: "www.github.com", pictures: [], tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP]},

  // ];

  isCollapsed: boolean = true;

  typescript: boolean = false;
  java: boolean = false;
  angular: boolean = false;

  springboot: boolean = false;
  react: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;

  nodejs: boolean = false;
  aspnet: boolean = false;

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Rajan Sharma - Portfolio');
  }
  
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter(){
    let filterTags : Tag[] = [];

    if(this.java){
      filterTags.push(Tag.Java);
    }

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.springboot){
      filterTags.push(Tag.SPRINGBOOT);
    }

    if(this.react){
      filterTags.push(Tag.REACT);
    }

    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }

    if(this.python){
      filterTags.push(Tag.PYTHON);
    }

    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }

    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }

    if(this.aspnet){
      filterTags.push(Tag.ASPNET);
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

}
