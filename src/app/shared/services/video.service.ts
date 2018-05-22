import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireDatabase } from 'angularfire2/database';
import { Video } from './../../shared/defines/video.class';
import { AppSetting } from './../../app.setting';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class VideoService {
	
	constructor(
		private _db: AngularFireDatabase
	) {}

	getItemsFeatured(): Observable<Video[]> {
		return this._db.list(AppSetting.TBL_VIDEO, {
				query: {
					orderByChild: 'featured',
					equalTo		: true,
					limitToFirst: 4,
				}
			}).map(Video.fromJsonList);
	}

	getItemsPopular(): Observable<Video[]> {
		return this._db.list(AppSetting.TBL_VIDEO, {
				query: {
					orderByChild: 'views',
					limitToLast: 3,
				}
			}).map(Video.fromJsonList);
	}

	getItemsByPlaylistID(playlistID: string, totalItems: number = 4): Observable<Video[]> {
		return this._db.list(AppSetting.TBL_VIDEO, {
			query: {
				orderByChild: 'playlistId',
				equalTo: playlistID,
				limitToFirst: totalItems
			}
		}).map(Video.fromJsonList);
	}

	getItemsScrollByPlaylistID(playlistID: string, limit: BehaviorSubject<number>): Observable<Video[]> {
		return this._db.list(AppSetting.TBL_VIDEO, {
			query: {
				orderByChild: 'playlistId',
				equalTo: playlistID,
				limitToFirst: limit
			}
		}).map(Video.fromJsonList);
	}
	// Playlist
	// key1 - Video 1
	// key2 - Video 2
	// key3 - Video 3
	getItemLastByPlaylistID(playlistID: string): Observable<Video> {
		return this._db.list(AppSetting.TBL_VIDEO, {
			query: {
				orderByChild: 'playlistId',
				equalTo: playlistID,
				limitToLast: 1
			}
		}).map(results => Video.fromJson(results[0]));
	}

	getItemByID(videoID: string): Observable<Video> {
		return this._db.list(AppSetting.TBL_VIDEO, {
			query: {
				orderByChild: 'id',
				equalTo: videoID,
				limitToLast: 1
			}
		}).map(results => Video.fromJson(results[0]));
	}
	
}