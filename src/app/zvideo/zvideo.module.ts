import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

// Module
import { ElementsModule }  from './../elements/elements.module';

// Component
import { HomeComponent } from "./components/home.component";
import { PlaylistComponent } from "./components/playlist.component";
import { PlaylistsComponent } from "./components/playlists.component";
import { VideoComponent } from "./components/video.component";
import { VideosComponent } from "./components/videos.component";
import { ErrorComponent } from "./components/error.component";

// Routing
import { ZVideoRoutingModule } from './zvideo-routing.module';

@NgModule({
	imports: [
		CommonModule,

		// Custom Module
		ElementsModule,

		// Routing
		ZVideoRoutingModule,
	],
	declarations: [
		HomeComponent,
		PlaylistComponent,
		PlaylistsComponent,
		VideoComponent,
		VideosComponent,
		ErrorComponent
  	],
  	exports: [
  		
  	]
})
export class ZVideoModule { }
