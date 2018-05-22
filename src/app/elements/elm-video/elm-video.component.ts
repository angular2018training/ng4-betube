import { Component, OnInit, Input } from '@angular/core';
import { Video } from './../../shared/defines/video.class';

@Component({
	moduleId: module.id,
	selector: '[zvn-elm-video]',
	templateUrl: './elm-video.component.html'
})
export class ElmVideoComponent implements OnInit {
	@Input("show-desc") showDesc: boolean = false;
	@Input("zvn-elm-video") item: Video = null;

	constructor() {}

	ngOnInit() {
	}
}