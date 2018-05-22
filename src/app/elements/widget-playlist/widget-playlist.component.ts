import { Component, OnInit } from '@angular/core';

import { Playlist } from './../../shared/defines/playlist.class';
import { PlaylistService } from './../../shared/services/playlist.service';

@Component({
	moduleId: module.id,
	selector: '[zvn-widget-playlist]',
	templateUrl: './widget-playlist.component.html'
})
export class WidgetPlaylistComponent implements OnInit {
	items: Playlist[] = [];
	constructor(
		private _playlistService: PlaylistService
	) {}

	ngOnInit() {
		this._playlistService.getItems().subscribe(
			(items: Playlist[]) => {
				this.items = items;
			}
		);
	}
}