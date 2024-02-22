import React from 'react'
import { Box, BoxProps } from '@mantine/core'
import cx from 'clsx'

export interface IFieldProps extends BoxProps {
	children: React.ReactNode
	type?: TInputType
	required?: boolean
	errors?: boolean
	grid?: boolean
}

const Field = ({ children, type, required = false, errors = false, className, grid, ...props }: IFieldProps) => {
	return (
		<Box
			className={ cx(
				'field',
				{ [String(type)]: type },
				{ 'required': required },
				{ 'field_with_errors': errors },
				{ 'no-grid': grid === false },
			) }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default Field
