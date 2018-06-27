import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',  
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']  
})
export class ConfirmModalComponent implements OnInit {
  @Input() title;
  @Input() message;
  @Output() onClickYes = new EventEmitter();
  
  @ViewChild("dialogTemplate")
  dialogTemplate: TemplateRef<any>;

  modalReference:NgbModalRef;

  constructor(public _modalService:NgbModal) { }

  ngOnInit() {
  }

  clickYes(event) {
    this.onClickYes.emit(event);
    this.modalReference.close('Y');
  }

  show(title:string, msg:string, options?:NgbModalOptions): Promise<any> {
    this.title = title;
    this.message = msg;
    this.modalReference = this._modalService.open(this.dialogTemplate, options);
    return this.modalReference.result;
  }
}
