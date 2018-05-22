import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Component
import { TrainingComponent } from "./components/training.component";
import { PushDataComponent } from "./components/push-data.component";


const defineRoutes: Routes = [
	{ path: 'training',  component: TrainingComponent },
	{ path: 'push-data',  component: PushDataComponent },

];

@NgModule({
	imports: [
		RouterModule.forChild(defineRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AdminRoutingModule {}
