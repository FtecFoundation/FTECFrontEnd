export const routes = [
    {path: '', redirectTo: 'modules', pathMatch: 'prefix'},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'modules', loadChildren: './modules/layout.module#LayoutModule'}
];
