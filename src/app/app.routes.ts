import { Routes } from '@angular/router';
import { Login } from './features/login/login';

export const routes: Routes = [
    { path: 'login', component: Login },
    // {   path: 'app',
    //     component: LayoutComponent,
    //     children:
    //     [
    //         {path: 'home', component: HomePage},
    //         {path: 'factura', component: FacturaPage}
    //     ]
    // },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: 'login' } // Ruta no encontrada
];