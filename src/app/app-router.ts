import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../app/core-components/home/home.component";
import { PageNotFoundComponent } from "app/core-components/page-not-found/page-not-found.component";
import { DetailComponent } from "app/core-components/detail/detail.component";


const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'detail/:code', component: DetailComponent,
    },
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);



