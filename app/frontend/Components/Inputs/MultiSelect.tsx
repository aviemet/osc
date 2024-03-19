import React, { forwardRef } from 'react'
import { MultiSelect, type ComboboxData, type MultiSelectProps } from '@mantine/core'
import Label from '../Label'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'

export interface IMultiSelectProps extends Omit<MultiSelectProps, 'data'> {
	options?: ComboboxData
	fetchOnOpen?: string
}

const MultiSelectComponent = forwardRef<HTMLInputElement, IMultiSelectProps>((
	{
		options = [],
		label,
		required,
		id,
		name,
		size = 'md',
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

		if(onDropdownOpen) onDropdownOpen()
	}

	return (
		<>
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
				onDropdownOpen={ handleDropdownOpen }
				nothingFoundMessage="No Results"
				{ ...props }
			/>
		</>
	)
})

export default React.memo(MultiSelectComponent)
