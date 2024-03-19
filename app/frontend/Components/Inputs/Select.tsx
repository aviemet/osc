import React, { forwardRef } from 'react'
import { Select, type ComboboxData, type SelectProps } from '@mantine/core'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'
import Label from '../Label'

export interface ISelectProps extends Omit<SelectProps, 'data'> {
	options?: ComboboxData
	onOpen?: () => void
	fetchOnOpen?: string
}

const SelectComponent = forwardRef<HTMLInputElement, ISelectProps>((
	{
		options = [],
		label,
		required,
		id,
		name,
		fetchOnOpen,
		onDropdownOpen,
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

		if(onDropdownOpen) onDropdownOpen()
	}

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Select
				ref={ ref }
				// Add "search" suffix to prevent password managers trying to autofill dropdowns
				id={ `${inputId}-search` }
				autoComplete="off"
				name={ name }
				size="md"
				data={ options }
				required={ required }
				maxDropdownHeight={ 400 }
				nothingFoundMessage="No Results"
				onDropdownOpen={ handleDropdownOpen }
				{ ...props }
			/>
		</>
	)
})

export default React.memo(SelectComponent)
