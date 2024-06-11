import React from 'react'
import { useTableContext } from '../TableContext'
import HeadCell from './HeadCell'
import { type TableThProps } from '@mantine/core'
import { usePageProps } from '@/lib/hooks'

export interface TableHeadCellProps extends TableThProps {
	fitContent?: boolean
	sort?: string
	nowrap?: boolean
	hideable?: false|string
	ref?: React.RefObject<HTMLTableCellElement>
}

const RenderedCell = ({ children = true, hideable, sort, ...props }: TableHeadCellProps) => {
	const { auth: { user: { table_preferences } } } = usePageProps()

	const tableState = useTableContext(false)

	let hiddenByUser: boolean = false

	if(tableState !== null) {
		const { tableState: { model } } = tableState

		const hideableString = hideable || sort
		if(hideableString !== undefined && model !== undefined) {
			hiddenByUser = table_preferences?.[model]?.hide?.[hideableString]
		}
	}

	if(hiddenByUser) return <></>

	return <HeadCell hideable={ hideable } sort={ sort } { ...props }>{ children }</HeadCell>
}

export default RenderedCell
