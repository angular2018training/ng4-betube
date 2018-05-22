import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Video } from './../../shared/defines/video.class';
import { Playlist } from './../../shared/defines/playlist.class';
import { VideoService } from './../../shared/services/video.service';
import { PlaylistService } from './../../shared/services/playlist.service';

@Component({
	moduleId: module.id,
	selector: 'zvn-elm-playlist-load-more',
	templateUrl: './elm-playlist-load-more.component.html'
})
export class ElmPlaylistLoadMoreComponent implements OnInit {

	@Input('playlistID') playlistID: string;
	@Input('layout') layout: string;

	playlistInfo: Playlist 			= null;
	items: 	Video[] 				= [];
	limit: BehaviorSubject<number> 	= null;
	lastKey: string 				= null;
	queryable: boolean				= true;
	showButtonLoadMore: boolean		= true;

	constructor(
		private _videoService: VideoService,
		private _playlistService: PlaylistService
	) {}

	ngOnInit() {
		this.limit = new BehaviorSubject<number>(3);

		this.initData();
	}


	initData(){
		// Playlist Info
		this._playlistService.getItemByID(this.playlistID).subscribe(
			(item: Playlist) => this.playlistInfo = item
		);

		// Get key last 
		this._videoService.getItemLastByPlaylistID(this.playlistID).subscribe(
			(item: any) => {
				this.lastKey = item.$key;
			}
		);

		// Videos
		this._videoService.getItemsScrollByPlaylistID(this.playlistID, this.limit).subscribe(
			(items: Video[]) => {
				this.items = items;
				if(this.items.length > 0){
					if(this.items[this.items.length - 1].$key === this.lastKey) {
						this.queryable = false;
					}
				}
			}
		);
	}

	// videos
	// video - playlistid - 
	// video - playlistid - 
	// video - playlistid - 

	loadMore(){
		if(this.queryable) {
			this.limit.next(this.limit.getValue() + 3);
		}else{
			this.showButtonLoadMore = false;
		}
	}

	changeLayout(data: any) {
		this.layout = data;
	}
}