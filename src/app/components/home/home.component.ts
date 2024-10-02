import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  // constructor() {
  //   this.title = 'Welcome to My Personal Website';
  //   this.subtitle = 'I am a software engineer with a passion for creating engaging and user-friendly interfaces.';
  //   this.buttonText = 'Discover My Portfolio';
  // }

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Rajan Sharma - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(0);
  }

}
