import { Injectable } from '@angular/core';
import { Paginas } from './paginas.model';

@Injectable({
  providedIn: 'root'
})
export class PaginasService {
paginas:Paginas[]=[
  new Paginas(1,"assets/amaneci_linda_Graciana_Urbani_01.jpg"),
  new Paginas(2,"assets/amaneci_linda_Graciana_Urbani_02.jpg"),
  new Paginas(3,"assets/amaneci_linda_Graciana_Urbani_03.jpg"),
  new Paginas(4,"assets/amaneci_linda_Graciana_Urbani_04.jpg"),
  new Paginas(5,"assets/amaneci_linda_Graciana_Urbani_05.jpg"),
  new Paginas(6,"assets/amaneci_linda_Graciana_Urbani_06.jpg"),
  new Paginas(7,"assets/amaneci_linda_Graciana_Urbani_07.jpg"),
  new Paginas(8,"assets/amaneci_linda_Graciana_Urbani_08.jpg"),
  new Paginas(9,"assets/amaneci_linda_Graciana_Urbani_09.jpg"),
  new Paginas(10,"assets/amaneci_linda_Graciana_Urbani_10.jpg"),
  new Paginas(11,"assets/amaneci_linda_Graciana_Urbani_11.jpg"),
  new Paginas(12,"assets/amaneci_linda_Graciana_Urbani_12.jpg"),
  new Paginas(13,"assets/amaneci_linda_Graciana_Urbani_13.jpg"),
  new Paginas(14,"assets/amaneci_linda_Graciana_Urbani_14.jpg"),
  new Paginas(15,"assets/amaneci_linda_Graciana_Urbani_15.jpg"),
  new Paginas(16,"assets/amaneci_linda_Graciana_Urbani_16.jpg"),
  new Paginas(17,"assets/amaneci_linda_Graciana_Urbani_17.jpg"),
  new Paginas(18,"assets/amaneci_linda_Graciana_Urbani_18.jpg"),
  new Paginas(19,"assets/amaneci_linda_Graciana_Urbani_19.jpg"),
  new Paginas(20,"assets/amaneci_linda_Graciana_Urbani_20.jpg"),
  new Paginas(21,"assets/amaneci_linda_Graciana_Urbani_21.jpg"),
  new Paginas(22,"assets/amaneci_linda_Graciana_Urbani_22.jpg"),
  new Paginas(23,"assets/amaneci_linda_Graciana_Urbani_23.jpg"),
  new Paginas(24,"assets/amaneci_linda_Graciana_Urbani_24.jpg"),
  new Paginas(25,"assets/amaneci_linda_Graciana_Urbani_25.jpg"),
  new Paginas(26,"assets/amaneci_linda_Graciana_Urbani_26.jpg"),

]
  constructor() { }
}
