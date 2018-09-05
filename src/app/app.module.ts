import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Mapa
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { MapaComponent } from './shared/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagesComponent,
    LoginComponent,
    PagenotfoundComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqnffBs97VbVbUI4L6XJyRoJkRq_c60uM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
