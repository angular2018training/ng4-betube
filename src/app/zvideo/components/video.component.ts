import { Component, OnInit, OnDestroy, AfterViewChecked} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { VideoService } from './../../shared/services/video.service';
import { Video } from './../../shared/defines/video.class';
import * as $ from 'jquery';


@Component({
	moduleId: module.id,
	selector: 'zvn-zvideo-video',
	templateUrl: './../templates/video.component.html'
})
export class VideoComponent implements OnInit, OnDestroy, AfterViewChecked {
	videoID: string;
	videoInfo: Video = null;
	layoutDefault: string = 'grid';
	subscription: Subscription;

	constructor(
		private _routeService: Router,
		private _activatedRouteService: ActivatedRoute,
		private _videoService: VideoService,
	) {}

	ngOnInit() {
		this.subscription = this._activatedRouteService.params.subscribe(
			(params: Params) => {
				this.videoID = params['id'];

				// VideoInfo by videoID
				this._videoService.getItemByID(this.videoID).subscribe(
					(item: Video) => {
						this.videoInfo = item;
					}
				);
			}
		);
	}

	ngAfterViewChecked(){
		this._routeService.events.pairwise().subscribe((event) => {
			$("html, body").stop().animate({scrollTop:0}, 1000, 'swing');
		});
	}

	changeLayout(event: any){
		this.layoutDefault = event;
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}