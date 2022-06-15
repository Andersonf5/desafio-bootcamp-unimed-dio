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
        this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });  /* traz o valor do parametro setado 
                                                                                para a rota ativa e converte para o tipo number */
    }

    save():void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Salvo com sucesso', course),
            error: err => console.log('Error', err)

        });
    }




}