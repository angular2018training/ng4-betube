import { Component, OnInit, Input } from '@angular/core';
import { AdsService } from './../../shared/services/ads.service';
import { Ads } from './../../shared/defines/ads.class';

@Component({
	moduleId: module.id,
	selector: '[zvn-widget-ads]',
	templateUrl: './widget-ads.component.html'
})
export class WidgetAdsComponent implements OnInit {
	@Input("zvn-widget-ads") position: string;

	item: Ads = null;

	constructor(
		private _adsService: AdsService
	) {}

	ngOnInit() {
		this._adsService.getItemByPosition(this.position).subscribe(
			(items: Ads[]) => {
				this.item = items[0];
			}
		);
	}
}