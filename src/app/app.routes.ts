import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';
import { MapaComponent } from './shared/mapa/mapa.component';

const appRoutes: Routes = [
    {
        path: '', component: PagesComponent, children: [{
            path: 'dashboard', component: DashboardComponent
        },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PagenotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });