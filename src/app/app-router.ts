import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../app/core-components/home/home.component";
import { PageNotFoundComponent } from "app/core-components/page-not-found/page-not-found.component";


const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent,
    },
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);



