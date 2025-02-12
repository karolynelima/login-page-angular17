import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    }
    ,
    {
        path:"",
        component: HomeLayoutComponent
    }


];
