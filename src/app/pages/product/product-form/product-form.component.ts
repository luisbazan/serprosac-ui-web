import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Pattern } from '../../../common/pattern';
import { AlertComponent } from '../../../components/alert/alert.component';
import { CrudAbstractFormComponent } from '../../../components/shared/CrudAbstractFormComponent';
import { ProductService, AlertService, ICRUDService, SettingsService } from '../../../services/service.index';
import { Product } from '../../../interfaces/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent extends CrudAbstractFormComponent{

  constructor( 
    private _ProductService: ProductService,
    private spinnerService: Ng4LoadingSpinnerService,
    private _fb: FormBuilder,
    private _alert: AlertService,
    public _settings: SettingsService, 
    public _router:Router,
    public _activatedRoute: ActivatedRoute
  ) {
      super(_settings, _router, _activatedRoute);
      this.basicForm = this.createFormGroup();
  }

  getTitle():string {
    return 'Producto';
  }

  createFormGroup(): (FormGroup){
    return this._fb.group({
      code: [, [Validators.required, Validators.maxLength(10)]],
      shortDescription: [, [Validators.required, Validators.maxLength(120), Validators.minLength(10)]],
      description: [],
      listPrice: [, [Validators.required]],
      currentPrice: [, [Validators.required]],
      category: ['', [Validators.required]],
      state: ['A', [Validators.required]]
    });
  }

  public getSpinnerService():Ng4LoadingSpinnerService {
    return this.spinnerService;
  }

  public getAlert():AlertService {
    return this._alert;
  }

  public getService():ICRUDService {
    return this._ProductService;
  }

}

