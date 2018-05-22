import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';


// Component
import { TrainingComponent } from "./components/training.component";
import { PushDataComponent } from "./components/push-data.component";

// Routing
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
	imports: [
		CommonModule,

		// Routing
		AdminRoutingModule,
	],
	declarations: [
		TrainingComponent,
		PushDataComponent
  	],
  	exports: [
  		
  	]
})
export class AdminModule { }
