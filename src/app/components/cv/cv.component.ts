import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Rajan Sharma - CV');
  }

  downloadCV(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'pdfs/Rajan_Resume_Java_Developer_1yr.pdf');
    link.setAttribute('download', 'Rajan_Resume_Java_Developer_1yr.pdf');
    link.click();
    link.remove();
  }

}
