import React from 'react'
import { NestedObject, UseFormProps, useInertiaInput } from 'use-inertia-form'
import { ConditionalWrapper } from '@/Components'
import Field from '../Field'
import MultiSelect, { type MultiSelectProps } from '@/Components/Inputs/MultiSelect'
import { type ComboboxData } from '@mantine/core'
import { type BaseFormInputProps } from '.'

type OmittedOverwrittenTypes = 'onFocus'|'onBlur'|'onChange'|'onClear'|'onDropdownOpen'|'onDropdownClose'|'onOptionSubmit'
export interface FormMultiSelectProps<TForm extends NestedObject = NestedObject>
	extends Omit<MultiSelectProps, OmittedOverwrittenTypes|'name'>,
	Omit<BaseFormInputProps, OmittedOverwrittenTypes> {

	onChange?: (values: string[], options: ComboboxData, form: UseFormProps<TForm>) => void
	onBlur?: (values: string[], options: ComboboxData, form: UseFormProps<TForm>) => void
	onFocus?: (values: string[], options: ComboboxData, form: UseFormProps<TForm>) => void
	onClear?: (options: ComboboxData, form: UseFormProps<TForm>) => void
	onDropdownOpen?: (options: ComboboxData, form: UseFormProps<TForm>) => void
	onDropdownClose?: (options: ComboboxData, form: UseFormProps<TForm>) => void
	onOptionSubmit?: (values: string[], options: ComboboxData, form: UseFormProps<TForm>) => void
}

const MultiSelectComponent = <TForm extends NestedObject = NestedObject>(
	{
		name,
		options = [],
		label,
		required,
		id,
		errorKey,
		model,
		field = true,
		onBlur,
		onChange,
		onDropdownOpen,
		onDropdownClose,
		...props
	}: FormMultiSelectProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string[], TForm>({ name, model, errorKey })

	const handleBlur = () => {
		onBlur?.(value, options || [],  form)
	}

	const handleChange = (values: string[]) => {
		setValue(values)

		onChange?.(values, options || [], form)
	}

	const handleDropdownOpen = () => {
		onDropdownOpen?.(options || [],form)
	}

	const handleDropdownClose = () => {
		onDropdownClose?.(options || [],form)
	}

	return (
		<ConditionalWrapper
			condition={ props.hidden !== true && field }
			wrapper={ children => (
				<Field
					type="select"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
		>
			<MultiSelect
				// Add "search" suffix to prevent password managers trying to autofill dropdowns
				id={ `${id || inputId}-search` }
				autoComplete="off"
				name={ inputName }
				label={ label }
				value={ value }
				error={ error }
				options={ options }
				onBlur={ handleBlur }
				onChange={ handleChange }
				onDropdownClose={ handleDropdownClose }
				onDropdownOpen={ handleDropdownOpen }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default React.memo(MultiSelectComponent)
