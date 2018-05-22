import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: '[zvn-elm-panel-title]',
	templateUrl: './elm-panel-title.component.html'
})
export class ElmPanelTitleComponent implements OnInit {
	
	@Input("zvn-elm-panel-title") title: string = null;
	@Input('layout') layout: string;
	@Output() myLayout = new EventEmitter<string>();

	constructor() {}

	ngOnInit() {
	}

	setLayout(layout: string) {
		this.layout = layout;
		this.myLayout.emit(layout);
		
		return false;
	}

	setActive(layout: string){
		return {
			active: (layout == this.layout)
		}
	}
}