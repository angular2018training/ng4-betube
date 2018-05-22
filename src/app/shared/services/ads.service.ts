import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Ads } from './../../shared/defines/ads.class';
import { AppSetting } from './../../app.setting';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AdsService {
	
	constructor(
		private _db: AngularFireDatabase
	) {}

	getItemByPosition(position: string) : Observable<Ads[]> {
		return this._db.list(AppSetting.TBL_ADS, {
			query: {
				orderByChild: 'position',
				equalTo: position
			}
		}).map(Ads.fromJsonList);
	}


}