import { Component, OnInit } from '@angular/core';

import { Video } from './../../shared/defines/video.class';
import { VideoService } from './../../shared/services/video.service';

@Component({
	moduleId: module.id,
	selector: '[zvn-widget-featured-video]',
	templateUrl: './widget-featured-video.component.html'
})
export class WidgetFeaturedVideoComponent implements OnInit {
	items: Video[] = [];

	constructor(
		private _videoService: VideoService
	) {}

	ngOnInit() {
		this._videoService.getItemsFeatured().subscribe(
			(items: Video[]) => {
				this.items = items;
			}
		);
	}
}