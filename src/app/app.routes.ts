import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { userResolve } from './components/profile/user.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(component => component.HomeComponent)
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./components/product/product.component').then(component => component.ProductComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./components/cart/cart.component').then(component => component.CartComponent)
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        loadComponent: () => import('./components/profile/profile').then(component => component.ProfileComponent),
        resolve: {
            userLogged : userResolve
        }
    },
    {
        path: 'register',
        loadComponent: () => import('./components/register/register').then(component => component.RegisterComponent)
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
