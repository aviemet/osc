import React, { forwardRef } from 'react'
import { MultiSelect, type ComboboxData, type MultiSelectProps as MantineMultiSelectInputProps } from '@mantine/core'
import Label from './Label'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'

export interface MultiSelectInputProps extends Omit<MantineMultiSelectInputProps, 'data'>, BaseInputProps {
	options?: ComboboxData
	fetchOnOpen?: string
}

const MultiSelectComponent = forwardRef<HTMLInputElement, MultiSelectInputProps>((
	{
		options = [],
		label,
		required,
		id,
		name,
		size = 'md',
		maxDropdownHeight = 400,
		wrapper,
		wrapperProps,
		fetchOnOpen,
		onDropdownOpen,
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
			<MultiSelect
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

export default MultiSelectComponent
