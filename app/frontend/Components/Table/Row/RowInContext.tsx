import React, { forwardRef } from 'react'
import { useTableSectionContext } from '../TableContext'
import { type ITableRow } from './index'

import HeadRow from './HeadRow'
import BodyRow from './BodyRow'

interface IRowInContextProps extends Omit<ITableRow, 'ref'> {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const RowInContext = forwardRef<HTMLTableRowElement, IRowInContextProps>((
	{ children, ...props },
	ref,
) => {
	const { section } = useTableSectionContext()

	return section === 'head' ?
		<HeadRow ref={ ref } { ...props }>{ children }</HeadRow>
		:
		<BodyRow ref={ ref } { ...props }>{ children }</BodyRow>

})

export default RowInContext
