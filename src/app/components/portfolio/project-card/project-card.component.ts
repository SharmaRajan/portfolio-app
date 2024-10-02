import { Component, Input } from '@angular/core';
import { Project } from '../../../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  // 2nd Method to assign data to the card  
  // @Input() projectName: string = '';

  // @Input() projectDescription: string = '';

  // 3rd Method to assign data to the card
  @Input() project = {} as Project ;


  bsModalRef? : BsModalRef;

  constructor(private modalService: BsModalService) { 

  }

  openProjectModal() {
    // to make our modal wider we use class
    // initialState initiliazes project data to our modal that we get through Input decorator
    const modalOptions : ModalOptions = {
      class: 'modal-lg',
      initialState: { project: this.project }
    }
    this.bsModalRef = this.modalService.show(ProjectModalComponent,modalOptions);
  }

}
