import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/courses-info.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([  /* carrega as rotas da aplicação no momento da inicialização, espera um array de objetos do tipo rota */
    
    {
      path:'Courses', component: CourseListComponent /* quando estiver na rota Courses troque o componente para CourseListComponent */
    },
    {
      path:'Courses/info/:id', component: CourseInfoComponent /* quando estiver na rota Courses/info/(o valor do parâmetro id: nesse caso
        Courses/info/1) troque o componente para CourseInfoComponent */
    },
    {
      path:'', redirectTo:'Courses', pathMatch:'full' /* modo de leitura: qunado estiver na raiz do projeto, redirecione para Courses */
    },
    {
      path:'**', component: Error404Component /* Quando não encontrar a rota selecionada apontar para o componente de Error404Component */
    }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
