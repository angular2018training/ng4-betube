export class Pager {
	constructor(
		private _totalItems			: number,		// Tổng số phần tử
		private _totalItemsPerPage	: number = 1,	// Tổng số phần tử xuất hiện trên một trang
		private _pageRange			: number = 5,	// Số trang xuất hiện
		private _totalPage			: number,		// Tổng số trang
		private _currentPage		: number = 1	// Trang hiện tại
	){

	}

	public get totalItems() : number {
		return this._totalItems;
	}

	public get totalItemsPerPage() : number {
		return this._totalItemsPerPage;
	}

	public get pageRange() : number {
		return this._pageRange;
	}

	public get totalPage() : number {
		return this._totalPage;
	}

	public get currentPage() : number {
		return this._currentPage;
	}

}