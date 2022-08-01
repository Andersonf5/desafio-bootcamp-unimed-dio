import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
   // selector:'app-course-list',
    templateUrl:'./course-list.component.html'
})
export class CourseListComponent implements OnInit{
   
    filteredCourses: Course[] = [];

    _courses: Course[]=[];

    _filterBy:string = '';


    constructor(private CourseService: CourseService){ }; /* metodo utilizado pelo angular para adicionar dependencias, faz referencia ao mesmo objeto */

    ngOnInit(): void {
       this.retrieveAll();

       }

    retrieveAll(): void{
        this.CourseService.retrieveAll().subscribe({
            next: courses =>{
                this._courses= courses;
                this.filteredCourses = this._courses
            },
        error: err => console.log('Error', err)   
        });
        
    }  
    
    deleteById(courseId: number): void{
        this.CourseService.deleteById(courseId).subscribe({
            next: ()=>{
                console.log('Deletado com sucesso!');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

       set filter(value:string) { /* Criar evento de saída */
            this._filterBy=value;

            this.filteredCourses=this._courses.filter((course:Course)=>course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) >-1);
       } 

       get filter(){ /* pega (puxa) o valor da variável */
           return this._filterBy
       }
    
}

