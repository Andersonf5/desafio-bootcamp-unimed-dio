import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector:'app-course-list',
    templateUrl:'./course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[]=[];
    ngOnInit(): void {
        this.courses=[{
            id:1,
            name:'Angular: Forms',
            imageUrl:'./assets/imagens/forms.png',
            price:99.99,
            code:'XPS-87960',
            duration:120,
            rating:4.5,
            realeaseDate:'2 de Novembro de 2019'
        },
        {
            id:2,
            name:'Angular: HTTP',
            imageUrl:'/assets/imagens/http.png',
            price:45.99,
            code:'LKL-1094',
            duration:80,
            rating:4,
            realeaseDate:'4 de Dezembro de 2019'
        }]
    }
    
}

