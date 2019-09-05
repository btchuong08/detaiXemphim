import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ItemPhimModule } from './item-phim/item-phim.module';


@NgModule({
  declarations: [DanhSachPhimComponent],
  exports: [DanhSachPhimComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule,
    ItemPhimModule
  ]
})
export class DanhSachPhimModule { }
