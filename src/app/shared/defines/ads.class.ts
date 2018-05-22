export class Ads {
	constructor(
		private _url		: string = "",
		private _link		: string = "",
		private _text		: string = "",
		private _position	: string = ""
	){

	}

	public get url() : string {
		return this._url;
	}

	public get link() : string {
		return this._link;
	}

	public get text() : string {
		return this._text;
	}

	public get position() : string {
		return this._position;
	}

	static fromJson( {url, link, text, position} : Ads ){
		return new Ads(url, link, text, position);
	}

	static fromJsonList( array : any ) : Ads[]{	
		return array.map(Ads.fromJson)
	}
}