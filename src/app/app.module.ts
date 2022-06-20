import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExedComponent } from './exed/exed.component';
import { NamecardComponent } from './namecard/namecard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component'


@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    ExedComponent,
    NamecardComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
