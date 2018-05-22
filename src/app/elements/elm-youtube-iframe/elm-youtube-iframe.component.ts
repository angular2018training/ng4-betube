import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-elm-youtube-iframe',
	templateUrl: './elm-youtube-iframe.component.html'
})
export class ElmYoutubeIframeComponent implements OnInit {
	@Input() videoID: string;
	@Input() width: number 	= 560;
	@Input() height: number = 315;

	constructor() {}

	ngOnInit() {
	}
}