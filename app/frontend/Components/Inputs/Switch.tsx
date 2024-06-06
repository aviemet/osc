import React, { forwardRef } from 'react'
import { Switch, type SwitchProps as MantineSwitchProps } from '@mantine/core'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface SwitchProps extends MantineSwitchProps, BaseInputProps {}

const SwitchComponent = forwardRef<HTMLInputElement, SwitchProps>((
	{ id, name, style, wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Switch
				ref={ ref }
				id={ inputId }
				name={ name }
				required={ props.required }
				style={ [{ padding: '14px 10px' }, style] }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default SwitchComponent
