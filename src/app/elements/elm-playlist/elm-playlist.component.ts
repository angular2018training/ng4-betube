import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Video } from './../../shared/defines/video.class';
import { Playlist } from './../../shared/defines/playlist.class';
import { VideoService } from './../../shared/services/video.service';
import { PlaylistService } from './../../shared/services/playlist.service';

@Component({
	moduleId: module.id,
	selector: 'zvn-elm-playlist',
	templateUrl: './elm-playlist.component.html'
})
export class ElmPlaylistComponent implements OnInit, OnChanges {

	@Input('playlistID') playlistID: string;
	@Input('layout') layout: string;
	@Input('totalItems') totalItems: number = 2;

	playlistInfo: Playlist = null;
	items: Video[] = [];

	constructor(
		private _videoService: VideoService,
		private _playlistService: PlaylistService
	) {}

	ngOnInit() {
		this.initData();
	}

	ngOnChanges() {
		this.initData();
	}

	initData(){
		// Playlist Info
		this._playlistService.getItemByID(this.playlistID).subscribe(
			(item: Playlist) => {
				this.playlistInfo = item;
			}
		);

		// Videos
		this._videoService.getItemsByPlaylistID(this.playlistID, +(this.totalItems)).subscribe(
			(items: Video[]) => {
				this.items = items;
			}
		);
	}

	changeLayout(data: any) {
		this.layout = data;
	}
}