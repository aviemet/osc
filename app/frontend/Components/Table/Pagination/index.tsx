import React from 'react'
import { Link } from '@/Components'
import { useTableContext } from '../TableContext'
import { Group, Pagination, type PaginationProps } from '@mantine/core'
import LimitSelect from './LimitSelect'
import classes from './Pagination.module.css'

const pageLink = (page: number) => {
	const url = new URL(window.location.href)

	if(page === 1) {
		url.searchParams.delete('page')
	} else {
		url.searchParams.set('page', String(page))
	}

	return `${url.pathname}${url.search}`
}

interface IPaginationComponent extends Omit<PaginationProps, 'total'> {}

const PaginationComponent = ({ boundaries = 2, siblings = 2, ...props }: IPaginationComponent) => {
	const { tableState: { pagination, model } } = useTableContext()

	if(!pagination) return <></>

	const { count, pages, limit, current_page, next_page, prev_page } = pagination
	const recordStart = count === 0 ? 0 : ((current_page - 1) * limit) +  1
	const recordEnd = Math.min(current_page * limit, count)

	return (
		<Group mt="auto" pt={ 8 }>
			<div>
				{ model && <>Records per page: <LimitSelect pagination={ pagination } model={ model } /></> }
        Showing <b> { recordStart } - { recordEnd } / { count } </b>
			</div>

			<Pagination.Root
				total={ pages }
				getItemProps={ (page) => ({
					component: Link,
					href: pageLink(page),
				}) }
				defaultValue={ current_page }
				{ ...props }
			>
				<Group gap={ 7 } wrap="nowrap" className={ classes.links }>
					<Pagination.First component={ Link } href={ pageLink(1) } />
					<Pagination.Previous component={ Link } href={ pageLink(next_page) } />
					<Pagination.Items />
					<Pagination.Next component={ Link } href={ pageLink(prev_page) } />
					<Pagination.Last component={ Link } href={ pageLink(pages) } />
				</Group>
			</Pagination.Root>
		</Group>
	)
}

export default PaginationComponent
