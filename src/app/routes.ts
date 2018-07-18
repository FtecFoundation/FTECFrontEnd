import {BannedComponent} from './auth/banned/banned.component';

export const routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'modules', loadChildren: './modules/layout.module#LayoutModule'},
    {path: 'banned', component: BannedComponent}
];
