import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemPhimRoutingModule } from './item-phim-routing.module';
import { ItemPhimComponent } from './item-phim.component';


@NgModule({
  declarations: [ItemPhimComponent],
  exports: [ItemPhimComponent],
  imports: [
    CommonModule,
    ItemPhimRoutingModule
  ]
})
export class ItemPhimModule { }
