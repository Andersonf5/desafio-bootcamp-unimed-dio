import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list-service.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponent implements OnInit {

personagens: Array<any>= [];

  constructor(private ListService:ListService ) { }

  ngOnInit(): void {
    this.getListConponent();
  }

getListConponent(){
this.ListService.getListServer().subscribe(respostaServidor =>{
  this.personagens=respostaServidor.results;
  console.log(this.personagens);
})
}  

}
