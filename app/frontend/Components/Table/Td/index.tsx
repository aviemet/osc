import React from 'react'
import { useTableContext } from '../TableContext'
import BodyCell from './BodyCell'
import { type TableTdProps } from '@mantine/core'
import { usePageProps } from '@/lib/hooks'

export interface TableCellProps extends TableTdProps {
	fitContent?: boolean
	sort?: string
	nowrap?: boolean
	hideable?: false|string
	ref?: React.RefObject<HTMLTableCellElement>
}

const RenderedCell = ({ children = true, hideable, sort, ...props }: TableCellProps) => {
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

	return <BodyCell { ...props }>{ children }</BodyCell>
}

export default RenderedCell
