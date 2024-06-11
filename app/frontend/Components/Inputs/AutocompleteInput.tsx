import React, { forwardRef } from 'react'
import { Autocomplete, type AutocompleteProps as MantineAutocompleteProps } from '@mantine/core'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface AutocompleteProps extends MantineAutocompleteProps, BaseInputProps {}

const AutocompleteComponent = forwardRef<HTMLInputElement, AutocompleteProps>((
	{ id, name, style, wrapper, wrapperProps, onClick, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Autocomplete
				ref={ ref }
				id={ inputId }
				name={ name }
				style={ [{ padding: '14px 10px' }, style] }
				wrapperProps={ wrapper ? {} : wrapperProps }
				onClick={ e => {
					e.stopPropagation()
					onClick?.(e)
				} }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default AutocompleteComponent
