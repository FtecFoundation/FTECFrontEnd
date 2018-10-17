export class Pagination {
    totalPages: number;
    totalElements: number;
    pageSize: number;
    currentPage: number;

    constructor(pages: number, elements: number, size: number, current: number) {
        this.totalPages = pages;
        this.totalElements = elements;
        this.currentPage = current;
        this.pageSize = size;
    }
}