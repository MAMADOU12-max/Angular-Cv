import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import {RouterLink, RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'cv'  , children: [
        {path: '', component: CvComponent} ,
        {path: 'add', component: AddCvComponent} ,
        {path: 'delete/:id', component: DeleteCvComponent} ,
        {path: ':id', component: DetailComponent} ,
    ]} ,
  {path: '', component: CvComponent} ,
  {path: 'login', component: LoginComponent} ,
  {path: 'color/:default', component: ColorComponent} ,
  {path: '**' , component: ErrorComponent}
] ;

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ColorComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,                                                                                                                                                                 
    DetailComponent,
    AddCvComponent,
    DeleteCvComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule ,
        HttpClientModule ,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
