export class Video {
	constructor(
		private _$key			: string = "",
		private _id			: string = "",
		private _publishedAt: string = "",
		private _channelId	: string = "",
		private _playlistId	: string = "",
		private _title		: string = "",
		private _slug		: string = "",
		private _description: string = "",
		private _thumbnails	: string = "",
		private _views		: number = 0,
		private _comments	: number = 0,
		private _ratings	: number = 0,
		private _featured	: boolean = false
	){

	}

	static fromJson( {$key, id, publishedAt, channelId, playlistId, title, slug, description, thumbnails, views, comments, ratings, featured } : Video ){
		return new Video($key, id, publishedAt, channelId, playlistId, title, slug, description, thumbnails, views, comments, ratings, featured);
	}

	static fromJsonList( array : any ) : Video[]{	
		return array.map(Video.fromJson)
	}

	public get $key() : string {
		return this._$key;
	}

	public get id() : string {
		return this._id;
	}

	public get publishedAt() : string {
		return this._publishedAt;
	}

	public get channelId() : string {
		return this._channelId;
	}

	public get playlistId() : string {
		return this._playlistId;
	}

	public get title() : string {
		return this._title;
	}

	public get slug() : string {
		return this._slug;
	}

	public get description() : string {
		return this._description;
	}

	public get thumbnails() : string {
		return this._thumbnails;
	}

	public get views() : number {
		return this._views;
	}

	public get comments() : number {
		return this._comments;
	}

	public get ratings() : number {
		return this._ratings;
	}

	public get featured() : boolean {
		return this._featured;
	}

}