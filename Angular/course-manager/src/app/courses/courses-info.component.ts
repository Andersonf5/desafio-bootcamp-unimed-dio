import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:'./courses-info.component.html',
})
export class CourseInfoComponent implements OnInit{

    course:any ;
    
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){

    } /* o metodo constructor injeta uma variavel, neste caso do 
    componente que contem as rotas ativas */

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));  /* traz o valor do parametro setado 
                                                                                para a rota ativa e converte para o tipo number */
    }

    save():void{
        this.courseService.save(this.course);
    }




}