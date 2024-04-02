import React, { forwardRef } from 'react'
import { Select, type ComboboxData, type SelectProps as MantineSelectProps } from '@mantine/core'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'
import Label from '../Label'

function append(str: string, value: string) {
	if(str.endsWith(value)) return str

	return `${str}${value}`
}

export interface SelectProps extends Omit<MantineSelectProps, 'data'> {
	options?: ComboboxData
	onOpen?: () => void
	fetchOnOpen?: string
}

const SelectComponent = forwardRef<HTMLInputElement, SelectProps>((
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

		onDropdownOpen?.()
	}

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Select
				ref={ ref }
				// Add "search" suffix to prevent password managers trying to autofill dropdowns
				id={ inputId ? append(inputId, '-search') : undefined }
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
