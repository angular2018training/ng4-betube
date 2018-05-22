import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Component
import { HomeComponent } from "./components/home.component";
import { PlaylistComponent } from "./components/playlist.component";
import { PlaylistsComponent } from "./components/playlists.component";
import { VideoComponent } from "./components/video.component";
import { VideosComponent } from "./components/videos.component";
import { ErrorComponent } from "./components/error.component";

const defineRoutes: Routes = [

	// Home Page /
	{ path: '',  component: HomeComponent },

	// List Videos /videos?page=1
	{ path: 'videos',  component: VideosComponent },	

	// List Playlists /playlists?page=1
	{ path: 'playlists',  component: PlaylistsComponent },

	// List videos in Playlist
	{ 
		path: 'playlist',
		children: [
			{
				path: '',
				component: PlaylistsComponent
			},
			{
				path: ':id',
				component: PlaylistComponent
			}
		]
	},

	// Info video /video/:id
	{ 
		path: 'video',
		children: [
			{
				path: '',
				component: VideosComponent
			},
			{
				path: ':id',
				component: VideoComponent
			}
		]
	},

	{ path: '**',  component: ErrorComponent },
	
];

@NgModule({
	imports: [
		RouterModule.forChild(defineRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ZVideoRoutingModule {}
