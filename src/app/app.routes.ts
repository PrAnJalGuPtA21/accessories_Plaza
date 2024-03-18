import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SubaboutComponent } from './pages/about/subabout/subabout.component';

export const routes: Routes = [
    {
        path: "",
        component: MenuComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "menu",
        component: MenuComponent
    },
    {
        path: "subabout",
        component: SubaboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
];
