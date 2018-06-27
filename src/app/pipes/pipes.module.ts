import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagenPipe } from './imagen.pipe';
import { FilterPipe } from './filter.pipe';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [
  ],
  declarations: [ 
    ImagenPipe,
    FilterPipe,
    HighlightPipe
  ], exports: [
    ImagenPipe,
    FilterPipe,
    HighlightPipe
  ]
})
export class PipesModule { }
