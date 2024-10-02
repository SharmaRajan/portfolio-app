import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    // {id: 0, name:'Sample Python Project', summary: 'Python Project that analyzes stock market data',description: 'Sample Python Project',projectLink: "www.github.com", pictures: [], tags: []},
    // {id: 1, name:'Sample Angular App', summary: 'Full Stack web app developed using Angular and Node.JS',description: 'Sample Angular Project',projectLink: "www.github.com", pictures: [], tags: []},
    // {id: 2, name:'Sample .Net App', summary: 'Full Stack web app developed using React and ASP.NET',description: 'Sample .Net Project',projectLink: "www.github.com", pictures: [], tags: []},
    // {id: 3, name:'Web API Project', summary: 'Web API project that was developed for a class project',description: 'Web API Project',projectLink: "www.github.com", pictures: [], tags: []},
    // {id: 4, name:'Chrome Extension', summary: 'Developed a chrome extension that tracks the prices of furniture',description: 'Sample Chrome Extension Project',projectLink: "www.github.com", pictures: [], tags: []},
    // {id: 5, name:'Mobile App', summary: 'Mobile app developed in Java that tracks the departure and arrivals of trains',description: 'Sample Mobile App Project',projectLink: "www.github.com", pictures: [], tags: []},
    {id: 0, name:'Fuel Locator', summary: 'A responsive fuel locator website built using Angular',description: 'Shows location of the petrol pump where petrol is available to purchase.',projectLink: "https://github.com/SharmaRajan", pictures: ["images/ben.jpg","images/design-md.jpg","images/design-md.jpg"], tags: [Tag.ANGULAR, Tag.Java, Tag.HTML, Tag.SPRINGBOOT]},
    {id: 1, name:'Video Streaming App', summary: 'A responsive video streaming website built using React Native and Vite',description: 'Youtube Like feature to stream and upload videos to server and play it.',projectLink: "https://github.com/SharmaRajan", pictures: [], tags: [Tag.REACTNATIVE, Tag.Java, Tag.SPRINGBOOT, Tag.HTML]},
    {id: 2, name:'Blogging App', summary: 'A responsive blogging website built using Angular',description: 'Create blogs, update blogs, like and comment on other users blog post.',projectLink: "https://github.com/SharmaRajan", pictures: [], tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP]},

  ];

  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id: number) : Project{
    let project = this.projects.find(pjt => pjt.id === id);
    if(project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }

  // getProjectsByTag(tag: Tag){
  //   return this.projects.filter(p => p.tags.includes(tag));
  // }

  // getProjectsByLanguage(language: string){
  //   return this.projects.filter(p => p.tags.some(t => t.toString().includes(language)));
  // }
  
    getProjectsByFilter(filterTags: Tag[]){
      let filteredProjects : Project[] = [];

      this.projects.forEach(function(project){
        let foundAll = true;

        filterTags.forEach(function(filterTag){
            if(project.tags.includes(filterTag) == false){
              foundAll = false;
            } 
        });
        if(foundAll) {
          filteredProjects.push(project);
        }
      });

      return filteredProjects;
    }
}
