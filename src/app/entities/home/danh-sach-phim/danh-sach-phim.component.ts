import { Component, OnInit } from '@angular/core';
import { DataService } from "././../../../shared/services/data.service"
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {


  danhSachPhim: any = [];
  subListMovie = new Subscription();
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.getListMovie();
  }
getListMovie() {
  const uri = `QuanLyPhim/LayDanhSachPhim?maNhom=GP01`;
  this.subListMovie = this.dataService.get(uri).subscribe((data: any) => {
    console.log (data);
    this.danhSachPhim= data;
  });
}
}
