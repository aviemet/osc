import React from 'react'
import { Link } from '@/Components'
import { useTableContext } from '../TableContext'
import { Group, Pagination, type PaginationProps } from '@mantine/core'
import LimitSelect from './LimitSelect'
import cx from 'clsx'
import * as classes from '../Table.css'

const pageLink = (page: number) => {
	const url = new URL(window.location.href)

	if(page === 1) {
		url.searchParams.delete('page')
	} else {
		url.searchParams.set('page', String(page))
	}

	return `${url.pathname}${url.search}`
}

interface PaginationComponent extends Omit<PaginationProps, 'total'> {}

const PaginationComponent = ({
	boundaries = 2,
	siblings = 2,
	className,
	...props
}: PaginationComponent) => {
	const { tableState: { pagination, model } } = useTableContext()

	if(!pagination) return <></>

	const { count, pages, limit, current_page, next_page, prev_page /* is_first_page, is_last_page */ } = pagination
	const recordStart = ((current_page - 1) * limit) + 1
	const recordEnd = Math.min(current_page * limit, count)

	return (
		<Group justify="space-between" mt="auto" pt={ 8 }>
			<div>
				{ model && <>
					Records per page:
					<LimitSelect
						className={ cx(classes.limitSelect) }
						pagination={ pagination }
						model={ model }
					/>
				</> }
        Showing <b> { recordStart } - { recordEnd } / { count } </b>
			</div>

			<Pagination.Root
				className={ cx(className, classes.pagination) }
				total={ pages }
				getItemProps={ (page) => ({
					component: Link,
					href: pageLink(page),
				}) }
				defaultValue={ current_page }
				{ ...props }
			>
				<Group gap={ 7 } justify="center"
					style={ { 'a:hover': {
						textDecoration: 'none',
					} } }>
					<Pagination.First
						component={ Link }
						href={ pageLink(1) }
						disabled={ current_page === 1 }
					/>

					<Pagination.Previous
						component={ Link }
						href={ pageLink(prev_page) }
						disabled={ prev_page === null }
					/>

					<Pagination.Items />

					<Pagination.Next
						component={ Link }
						href={ pageLink(next_page) }
						disabled={ next_page === null }
					/>

					<Pagination.Last
						component={ Link }
						href={ pageLink(pages) }
						disabled={ current_page === pages }
					/>

				</Group>
			</Pagination.Root>
		</Group>
	)
}

export default PaginationComponent
