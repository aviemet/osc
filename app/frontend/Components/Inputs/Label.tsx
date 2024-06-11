import React from 'react'
import { Box, type BoxProps } from '@mantine/core'
import cx from 'clsx'

interface LabelProps extends
	BoxProps,
	Omit<React.ComponentPropsWithoutRef<'label'>, keyof BoxProps>
{
	required?: boolean
}

const Label = ({ children, required = false, className, ...props }: LabelProps) => {
	return (
		<Box component="label" className={ cx(className, { required }) } { ...props }>
			{ children }
		</Box>
	)
}

export default Label
