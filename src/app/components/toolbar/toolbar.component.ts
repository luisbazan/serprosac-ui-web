import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigurationService } from '../../services/service.index';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() configId:string;
  @Output() clickToolbar = new EventEmitter();

  constructor(public _configurationService: ConfigurationService) { 
    
  }

  ngOnInit() {
    this._configurationService.getConfigurationByModule(this.configId).subscribe((res:any) => {
      
    });
  }

  onClickToolbar(button){
    this.clickToolbar.emit(button);
  } 
}
