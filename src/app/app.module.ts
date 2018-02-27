import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PaginainicialComponent } from './componentes/paginainicial/paginainicial.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaginaregistoComponent } from './componentes/paginaregisto/paginaregisto.component';
import { PaginaloginComponent } from './componentes/paginalogin/paginalogin.component';
import { PaginaprivadaComponent } from './componentes/paginaprivada/paginaprivada.component';
import { PaginanotfoundComponent } from './componentes/paginanotfound/paginanotfound.component';
import { PaginaAdminComponent } from './componentes/pagina-admin/pagina-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginainicialComponent,
    NavbarComponent,
    PaginaregistoComponent,
    PaginaloginComponent,
    PaginaprivadaComponent,
    PaginanotfoundComponent,
    PaginaAdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
