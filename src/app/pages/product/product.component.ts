import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ProductService, AbstractCRUDServices, AlertService } from '../../services/service.index';

import { ProductFormComponent } from '../product/product-form/product-form.component';
import { CrudAbstractComponent } from '../../components/shared/CrudAbstractComponent';
import { CrudAbstractFormComponent } from '../../components/shared/CrudAbstractFormComponent';
import { DatatableComponent, dtColumn, dtField } from '../../components/ui/datatable/datatable.component';

import { Product } from '../../interfaces/product';
import { CodeType } from '../../enums/code-type.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends CrudAbstractComponent implements OnInit {
  @ViewChild(ProductFormComponent) productForm: ProductFormComponent;
  public cols:dtColumn[];
  public fiels:dtField[];
  
  constructor(public _ProductService: ProductService,
    private _alert: AlertService,
    public spinnerService: Ng4LoadingSpinnerService) {
      super();
      this.createGrid();
  }

  getCrudService():AbstractCRUDServices {
    return this._ProductService;
  }

  getSpinnerService():Ng4LoadingSpinnerService {
    return this.spinnerService;
  }

  getAlertService():AlertService {
      return this._alert;
  }

  getCrudForm():CrudAbstractFormComponent {
    return this.productForm;
  }

  getTitle():String {
    return "Producto";
  }

  createGrid():void {
    this.cols = [
      {
        title:'Codigo'
      },
      {
        title:'Description'
      },
      {
        title:'Precio de Lista'
      },
      {
        title:'Precio Actual'
      },
      {
        title:'Categoria'
      },
      {
        title:'Estado'
      }
    ]

    this.fiels = [
      {
        name:'code'
      },
      {
        name:'shortDescription'
      },
      {
        name:'listPrice'
      },
      {
        name:'currentPrice'
      },
      {
        name:'category',
        codeType: CodeType.CATEGORY
      },
      {
        name:'state',
        codeType: CodeType.STATE
      }
    ]
  }

  ngOnInit() {
    this.refreshGrid();
  }
}