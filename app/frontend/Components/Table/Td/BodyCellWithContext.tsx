import React, { useRef } from 'react'
import cx from 'clsx'
import { type TableCellProps } from '.'
import { Table } from '@mantine/core'

export interface BodyCellWithContextProps extends Omit<TableCellProps, 'hideable'> {
	hideable?: false|string
	model?: string
}

const BodyCellWithContext = ({
	children,
	fitContent,
	hideable,
	model,
	className,
	...props
}: BodyCellWithContextProps) => {
	const tdRef = useRef<HTMLTableCellElement>(null)

	return (
		<Table.Td
			ref={ tdRef }
			className={ cx({ 'table-column-fit': fitContent }, className) }
			{ ...props }
		>
			{ children }
		</Table.Td>
	)
}

export default BodyCellWithContext
