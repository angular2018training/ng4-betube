export class PagerService {

    pageRange: number = 6;

    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        let totalPages: number;        // Total Pages
        let startPage: number;        
        let endPage: number;
        let specialNumber: number = Math.floor(this.pageRange/2) - 1;

        totalPages = Math.ceil(totalItems / pageSize);

        if(totalPages == 1) return null;
     
        if (totalPages <= this.pageRange) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage   = totalPages;
        }  else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage  <= this.pageRange - specialNumber) {    // nhóm 1
                startPage = 1;
                endPage   = this.pageRange;
            } else if (currentPage >= totalPages - specialNumber) {  // nhóm 3
                startPage = totalPages - this.pageRange + 1;
                endPage   = totalPages;
            } else {
                startPage = currentPage - specialNumber - 1;
                endPage   = currentPage + specialNumber;
            }
        }
         // 1: 0 1 2 3
         // 2: 4 5 6 7
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex   = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        // create an array of pages to ng-repeat in the pager control
        // 1 2 3 4 5 6 7 8 9 10
        let pages = this.range(startPage, endPage);
 
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,    // tổng số phần tử
            currentPage: currentPage,    // trang hiện tại
            pageSize: pageSize,        // tổng số phần tử trên 1 trang
            totalPages: totalPages,    // tổng số trang
            startPage: startPage,     // trang bắt đầu
            endPage: endPage,        // trang kết thúc
            startIndex: startIndex,    // vị trí bắt đầu
            endIndex: endIndex,    // vị trí kết thúc
            pages: pages        // ?
        };
    }

    range(start, end) {
        let total = [];
        for (let i = start; i <= end; i++) {
            total.push(i);
        }
        return total;
    } 
}