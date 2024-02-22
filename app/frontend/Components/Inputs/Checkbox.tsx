import React, { forwardRef } from 'react'
import { Checkbox, type CheckboxProps } from '@mantine/core'

export interface ICheckboxProps extends CheckboxProps {}

const CheckboxComponent = forwardRef<HTMLInputElement, ICheckboxProps>((
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
