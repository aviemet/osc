export interface Pagination {
	count: number
	pages: number
	limit: number
	current_page: number
	next_page: number
	prev_page: number
	is_first_page: boolean
	is_last_page: boolean
}

export type PaginatedModel<T> = {
	data: T
	pagination: Pagination
}