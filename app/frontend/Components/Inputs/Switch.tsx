import React, { forwardRef } from 'react'
import { Switch, type SwitchProps as MantineSwitchProps } from '@mantine/core'

export interface SwitchProps extends MantineSwitchProps {}

const SwitchComponent = forwardRef<HTMLInputElement, SwitchProps>((
	{ id, name, style, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<>
			<Switch
				ref={ ref }
				id={ inputId }
				name={ name }
				required={ props.required }
				style={ [{ padding: '14px 10px' }, style] }
				{ ...props }
			/>
		</>
	)
})

export default SwitchComponent
