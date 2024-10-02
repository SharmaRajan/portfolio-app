import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Rajan Sharma - CV');
  }

}
