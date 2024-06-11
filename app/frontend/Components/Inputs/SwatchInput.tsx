import React, { forwardRef, useState } from 'react'
import HiddenInput from './HiddenInput'
import SwatchPicker from '../SwatchPicker'
import Label from './Label'
import { InputProps } from 'react-html-props'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface SwatchInputProps extends Omit<InputProps, 'onChange'>, BaseInputProps {
	label?: React.ReactNode
	initialValue?: string
	onChange?: (color: string) => void
	wrapperProps?: Record<string, any>
}

const SwatchInput = forwardRef<HTMLInputElement, SwatchInputProps>((
	{ label, id, name, required, initialValue, onChange, wrapper, wrapperProps, ...props },
	ref,
) => {
	const [color, setColor] = useState(initialValue || '')

	const handleChange = (color: string) => {
		setColor(color)

		onChange?.(color)
	}

	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<HiddenInput value={ color } id={ inputId } name={ name } { ...props } ref={ ref } />
			<SwatchPicker value={ color } onChange={ handleChange } />
		</InputWrapper>
	)
})

export default SwatchInput
