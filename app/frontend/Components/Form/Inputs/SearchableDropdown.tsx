import React, { forwardRef } from 'react'
import Field from '../Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import { ConditionalWrapper, Group } from '@/Components'
import { router } from '@inertiajs/react'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'

type OmittedDropdownTypes = 'name'|'defaultValue'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'
interface IInputProps extends Omit<ISearchableDropdownProps, OmittedDropdownTypes>, IInertiaInputProps {
	defaultValue?: string
	onDropdownOpen?: (form: UseFormProps<any>) => void
	onDropdownClose?: (form: UseFormProps<any>) => void
	fetchOnOpen?: string
	newForm?: React.ReactElement
	field?: boolean
}

const SearchableDropdown = forwardRef<HTMLInputElement, IInputProps>((
	{
		name,
		label,
		model,
		required,
		defaultValue,
		onChange,
		onBlur,
		onDropdownOpen,
		onDropdownClose,
		fetchOnOpen,
		newForm,
		field = true,
		id,
		errorKey,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model, errorKey })

	const handleChange = (option: string|null) => {
		setValue(option ? option : '')
		if(onChange) onChange(option, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		if(onChange) onChange(value, form)
	}

	const handleDropdownOpen = () => {
		if(fetchOnOpen) router.reload({ only: [fetchOnOpen] })
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	return (
		<Group noWrap align="baseline" position="apart">
			<>
				<ConditionalWrapper
					wrapper={ children => (
						<Field
							type="select"
							required={ required }
							errors={ !!error }
						>
							{ children }
						</Field>
					) }
					condition={ field }
				>
					<SearchableDropdownInput
						ref={ ref }
						id={ id || inputId }
						name={ inputName }
						label={ label }
						value={ String(value) }
						onChange={ handleChange }
						onBlur={ handleBlur }
						onDropdownOpen={ handleDropdownOpen }
						onDropdownClose={ handleDropdownClose }
						defaultValue={ defaultValue ?? String(value) }
						error={ error }
						{ ...props }
					/>
				</ConditionalWrapper>
			</>
		</Group>
	)
})

export default SearchableDropdown
