import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const defineRoutes: Routes = [
	// { path: '', redirectTo: '/study', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(defineRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
