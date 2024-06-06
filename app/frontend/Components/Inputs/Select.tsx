import React, { forwardRef } from 'react'
import { Select, type ComboboxData, type SelectProps } from '@mantine/core'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'
import { type BaseInputProps } from '.'
import Label from './Label'
import InputWrapper from './InputWrapper'

export interface SelectInputProps extends Omit<SelectProps, 'data'>, BaseInputProps {
	options?: ComboboxData
	fetchOnOpen?: string
}

const SelectComponent = forwardRef<HTMLInputElement, SelectInputProps>((
	{
		options = [],
		label,
		required,
		id,
		name,
		size = 'md',
		maxDropdownHeight = 400,
		fetchOnOpen,
		onDropdownOpen,
		wrapper,
		wrapperProps,
		...props
	},
	ref,
) => {
	const inputId = id || name

	const handleDropdownOpen = () => {
		if(fetchOnOpen) {
			router.reload({ only: coerceArray(fetchOnOpen) })
		}

		onDropdownOpen?.()
	}

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Select
				ref={ ref }
				// Add "search" suffix to prevent password managers trying to autofill dropdowns
				id={ `${inputId}-search` }
				autoComplete="off"
				name={ name }
				size={ size }
				data={ options }
				required={ required }
				maxDropdownHeight={ maxDropdownHeight }
				onDropdownOpen={ handleDropdownOpen }
				nothingFoundMessage="No Results"
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default SelectComponent
