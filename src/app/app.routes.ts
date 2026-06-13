import { Routes } from '@angular/router';
// import { Home } from './home/home';
// import { DataBinding } from './data-binding/data-binding';
// import { Directives } from './directives/directives';
// import { Lifecycle } from './lifecycle/lifecycle';

export const routes: Routes = [

    // {path: 'home', component: Home},
    // {path: 'data', component: DataBinding},
    // {path: 'directives', component: Directives},
    // {path: 'lifecycle', component: Lifecycle},

    {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'data',
        loadComponent: () => import('./data-binding/data-binding').then(m => m.DataBinding)
    },
    {
        path: 'directives',
        loadComponent: () => import('./directives/directives').then(m => m.Directives)
    },
    {
        path: 'lifecycle',
        loadComponent: () => import('./lifecycle/lifecycle').then(m => m.Lifecycle)
    },
    
    {path: '**', redirectTo: '/home'}

];
