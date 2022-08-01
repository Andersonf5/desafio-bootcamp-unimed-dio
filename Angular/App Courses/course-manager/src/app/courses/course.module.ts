import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppPipeModule } from "../shared/component/Pipe/app-pipe.module";
import { StarModule } from "../shared/component/star/star.module";
import { CourseListComponent } from "./course-list.component";
import { CourseInfoComponent } from "./courses-info.component";

@NgModule({
        declarations: [
CourseListComponent,
CourseInfoComponent,

        ], 
        imports: [
            FormsModule,
            CommonModule,
            StarModule,
            AppPipeModule,
            RouterModule.forChild([
                {
                    path:'Courses', component: CourseListComponent /* quando estiver na rota Courses troque o componente para CourseListComponent */
                  },
                  {
                    path:'Courses/info/:id', component: CourseInfoComponent /* quando estiver na rota Courses/info/(o valor do parâmetro id: nesse caso
                      Courses/info/1) troque o componente para CourseInfoComponent */
                  }
            ])

        ]
})
export class CourseModule{

}