import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'zvn-zvideo-playlist',
	templateUrl: './../templates/playlist.component.html'
})
export class PlaylistComponent implements OnInit {
	subscription: Subscription;
	playlistID: string = null;
	layoutDefault: string = 'grid';
	
	constructor(
		private _activatedRouteService: ActivatedRoute
	) {}

	ngOnInit() {
		this.subscription = this._activatedRouteService.params.subscribe(
			(params : Params) => {
				this.playlistID = params['id'];
			}
		);
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}