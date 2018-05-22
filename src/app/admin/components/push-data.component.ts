import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { dbAds } from './../../../environments/db-ads';
import { dbPlaylist } from './../../../environments/db-playlist';

@Component({
	moduleId: module.id,
	selector: 'zvn-admin-push-data',
	templateUrl: './../templates/push-data.component.html'
})
export class PushDataComponent implements OnInit {

	
	constructor(
		private _db: AngularFireDatabase
	) {
	}

	ngOnInit() {
		
	}

	onPushData(){
		dbAds.ads.forEach( (ads : any) => {
			console.log(ads);
		});

		// Ads
		/*
		const adsRef = this._db.list('ads');
		dbAds.ads.forEach( (ads : any) => {
			adsRef.push({
				url			: ads.url,
				link		: ads.link,
				text		: ads.text,
				position 	: ads.position,
			});
		});
		*/

		// Playlist
		/*
		const playlistRef = this._db.list('playlist');
		dbPlaylist.playlist.forEach( (playlist : any) => {
			playlistRef.push({
				id			: playlist.id,
				channelId	: playlist.channelId,
				title		: playlist.title,
				slug		: playlist.slug,
				description : playlist.description,	
				thumbnails	: playlist.thumbnails,
			});
		});
		*/

		// Video
		
		const videoRef = this._db.list('video');
		dbPlaylist.playlist.forEach( (playlist : any) => {
			playlist.items.forEach( (video:any) =>  {
				videoRef.push({
					id 			: video.id,
					publishedAt	: video.publishedAt,
					channelId	: video.channelId,
					playlistId	: video.playlistID, //
					title		: video.title,
					slug		: video.slug,
					description	: video.description,
					thumbnails	: video.thumbnails,
					views		: this.getRandomInt(1,500),	// Add Field
					comments	: this.getRandomInt(1,10),	// Add Field
					ratings		: this.getRandomInt(1,100),	// Add Field
					featured	: (this.getRandomInt(1,5)==2) ? true : false,	// Add Field
				});
			});
		});
		
	}

	getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
