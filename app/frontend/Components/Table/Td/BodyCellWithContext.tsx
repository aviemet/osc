import React, { useRef } from 'react'
import cx from 'clsx'
import { type TableCellProps } from '.'
import { Table } from '@mantine/core'

export interface BodyCellWithContextProps extends Omit<TableCellProps, 'hideable'> {
	hideable?: false|string
	model?: string
}

const BodyCellWithContext = ({ children, nowrap, fitContent, hideable, model, style, className, ...props }: BodyCellWithContextProps) => {
	const tdRef = useRef<HTMLTableCellElement>(null)

	return (
		<Table.Td
			ref={ tdRef }
			className={ cx({ 'table-column-fit': fitContent }, className) }
			style={ [{ whiteSpace: nowrap ? 'nowrap' : 'normal' }, style ] }
			{ ...props }
		>
			{ children }
		</Table.Td>
	)
}

export default BodyCellWithContext
