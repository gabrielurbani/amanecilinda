import { Component, OnInit } from '@angular/core';
import { Paginas } from 'src/app/paginas.model';
import { PaginasService } from 'src/app/paginas.service';

@Component({
  selector: 'app-hoja',
  templateUrl: './hoja.component.html',
  styleUrls: ['./hoja.component.css']
})
export class HojaComponent implements OnInit {

  constructor(private paginasService: PaginasService) { }
  paginas:Paginas[]=[];
  ngOnInit(): void {
    this.paginas=this.paginasService.paginas;
  }

}
