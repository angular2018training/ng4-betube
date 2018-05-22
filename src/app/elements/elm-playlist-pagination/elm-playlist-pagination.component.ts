import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { Video } from './../../shared/defines/video.class';
import { Playlist } from './../../shared/defines/playlist.class';
import { VideoService } from './../../shared/services/video.service';
import { PlaylistService } from './../../shared/services/playlist.service';
import { PagerService } from './../../shared/services/pager.service';

@Component({
	moduleId: module.id,
	selector: 'zvn-elm-playlist-pagination',
	templateUrl: './elm-playlist-pagination.component.html'
})
export class ElmPlaylistPaginationComponent implements OnInit, OnChanges, OnDestroy {

	@Input('playlistID') playlistID: string;
	@Input('layout') layout: string;
	@Input('totalItems') totalItems: number = 2;
	@Input('showMoreVideo') showMoreVideo: boolean = true;

	playlistInfo: Playlist = null;
	items: Video[] = [];
	pagedItems: Video[];
	pager: any;
	subscriptionQuery: Subscription;

	constructor(
		private _activatedRouteService: ActivatedRoute,
		private _routeService: Router,
		private _videoService: VideoService,
		private _playlistService: PlaylistService,
		private _pagerService: PagerService
		
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

				this.subscriptionQuery = this._activatedRouteService.queryParams.subscribe(
					(params: Params) => {
						let currentPage: number = params['page'];
						if(currentPage === undefined) currentPage = 1;
						this.setPage(currentPage);
					}
				);
			}
		);
	}

	setPage(page: number) {
		 // get pager object from service
        this.pager = this._pagerService.getPager(this.items.length, +(page),  3);
      
      	if( this.pager) {
      		// get current page of items
	        this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

			this._routeService.navigate(['playlist', this.playlistID], {
		 			queryParams: {
		 				page: page
		 			}
		 		});
      	}else {
      		 this.pagedItems = this.items;
      	}
        
	}
	
	changeLayout(data: any) {
		this.layout = data;
	}

	ngOnDestroy(){
		this.subscriptionQuery.unsubscribe();
	}
}