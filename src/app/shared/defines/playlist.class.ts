export class Playlist {
	constructor(
		private _id			: string = "",
		private _channelId	: string = "",
		private _title		: string = "",
		private _slug		: string = "",
		private _description: string = "",
		private _thumbnails	: string = "",
	){

	}

	static fromJson( {id, channelId, title, slug, description, thumbnails} : Playlist ){
		return new Playlist(id, channelId, title, slug, description, thumbnails);
	}

	static fromJsonList( array : any ) : Playlist[]{	
		return array.map(Playlist.fromJson)
	}

	public get id() : string {
		return this._id;
	}

	public get channelId() : string {
		return this._channelId;
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
}