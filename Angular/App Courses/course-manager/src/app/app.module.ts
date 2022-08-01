import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/nav-bar/core.module';



@NgModule({
  declarations: [
    AppComponent
   
     
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([  /* carrega as rotas da aplicação no momento da inicialização, espera um array de objetos do tipo rota */
    
    {
      path:'', redirectTo:'Courses', pathMatch:'full' /* modo de leitura: qunado estiver na raiz do projeto, redirecione para Courses */
    }
   

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
