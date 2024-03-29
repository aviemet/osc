import React, { useRef } from 'react'
import cx from 'clsx'
import { type ICellProps } from './index'
import { Box } from '@mantine/core'

export interface IBodyCellWithContextProps extends Omit<ICellProps, 'hideable'> {
	hideable?: false|string
	model?: string
}

const BodyCellWithContext = ({ children, nowrap, fitContent, hideable, model, ...props }: IBodyCellWithContextProps) => {
	const tdRef = useRef<HTMLTableCellElement>(null)

	return (
		<Box
			component="td"
			ref={ tdRef }
			className={ cx({ 'table-column-fit': fitContent }) }
			style={ { whiteSpace: nowrap ? 'nowrap' : 'normal' } }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default BodyCellWithContext
