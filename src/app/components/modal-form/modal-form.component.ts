import { Component, OnInit, Input, Output, ContentChild, TemplateRef, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal-form',
  animations: [
    trigger(
      'enterAnimationModal', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})

export class ModalFormComponent implements OnInit {
  @Input('title') title;
  @ViewChild("dialogTemplate")
	dialogTemplate: TemplateRef<any>;
  @Input() formId: string;
  @Input() showSubmit: boolean=true;
  @Input() isDisabled: boolean=false;
  @Input() closeModal: boolean;
  @Input() showCheckCloseModal: boolean=true;
  @Output() onChangeCloseModal = new EventEmitter();
  @Output() onSaveModal = new EventEmitter();
  
  closeResult: string;
  modalReference:NgbModalRef;

  constructor(public _modalService:NgbModal) {}

  ngOnInit() {
  }

  show(options?:NgbModalOptions): void {
    this.modalReference = this._modalService.open(this.dialogTemplate, options);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });    
  }
  
  close() {
    this.modalReference.close();
  }

  onSave(button){
    console.log('Save Button Modal');
    this.onSaveModal.emit(button);
    //this.isDisabled = true;
  } 

  changeCloseModal() {
    this.onChangeCloseModal.emit(this.closeModal);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
