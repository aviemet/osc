import React, { forwardRef } from 'react'
import { Checkbox, type CheckboxProps as MantineCheckboxProps } from '@mantine/core'

export interface CheckboxProps  extends MantineCheckboxProps {}

const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>((
	{ id, name, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<Checkbox
			ref={ ref }
			id={ inputId }
			name={ name }
			{ ...props }
		/>
	)
})

export default CheckboxComponent
