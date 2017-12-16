import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public aria_label1:String = "First group";
  public aria_label2:String = "Second group";
  
  constructor(public _configurationService: ConfigurationService) { 

  }

  ngOnInit() {
    this._configurationService.getConfigurationByModule("1234567").subscribe((res:any) => {
      console.log(res.btngroup);
    });
  }

}
