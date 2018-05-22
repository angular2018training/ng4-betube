import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Playlist } from './../../shared/defines/playlist.class';
import { AppSetting } from './../../app.setting';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PlaylistService {
	
	constructor(
		private _db: AngularFireDatabase
	) {}

	getItems(): Observable<Playlist[]> {
		return this._db.list(AppSetting.TBL_PLAYLIST, {
				query: {
					limitToFirst: 4
				}
			}).map(Playlist.fromJsonList);
	}

	getItemByID(playlistID: string): Observable<Playlist> {
		return this._db.list(AppSetting.TBL_PLAYLIST, {
			query: {
				orderByChild: 'id',
				equalTo: playlistID
			}
		}).map(results => Playlist.fromJson(results[0]));
	}

}