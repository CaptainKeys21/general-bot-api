export interface PagedData<T> {
  metadata: {
    total: number;
    totalPages: number;
    page: number;
  };
  data: T;
}

export interface PaginationParams {
  page: number;
  numPerPage: number;
}

export interface DateParams {
  dateInitial: number;
  dateFinal: number;
}
